import AppKit
import AVFoundation
import CoreGraphics
import CoreVideo
import Foundation

struct Token: Codable {
    let surface: String
    let transliteration: String
    let gloss: String
}

struct Cue: Codable {
    let id: String
    let startMs: Int
    let endMs: Int
    let translation: String
    let tokens: [Token]
}

struct VideoData: Codable {
    let language: String
    let direction: String
    let durationSeconds: Double
    let cues: [Cue]
    let annotationStatus: String
}

struct Page {
    let indices: [Int]
    let weights: [CGFloat]
}

guard (3...4).contains(CommandLine.arguments.count) else {
    fatalError("Usage: render_youtube_video DATA.json OUTPUT.mp4 [preview-seconds]")
}

let dataURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])
let data = try JSONDecoder().decode(VideoData.self, from: Data(contentsOf: dataURL))
let isRTL = data.direction == "rtl"
let width = 1920
let height = 1080
let fps: Int32 = 30
let requestedDuration = CommandLine.arguments.count == 4 ? Double(CommandLine.arguments[3]) : nil
let renderDuration = min(data.durationSeconds, requestedDuration ?? data.durationSeconds)
let frameCount = Int(ceil(renderDuration * Double(fps)))

if FileManager.default.fileExists(atPath: outputURL.path) {
    try FileManager.default.removeItem(at: outputURL)
}

func color(_ red: CGFloat, _ green: CGFloat, _ blue: CGFloat, _ alpha: CGFloat = 1) -> NSColor {
    NSColor(srgbRed: red / 255, green: green / 255, blue: blue / 255, alpha: alpha)
}

let palette = (
    background: color(252, 252, 249),
    line: color(205, 208, 203),
    text: color(20, 23, 21),
    marker: color(35, 38, 36),
    annotation: color(76, 80, 77)
)

func cueWeight(_ cue: Cue) -> CGFloat {
    if cue.tokens.count >= 11 || cue.translation.count > 72 { return 2.0 }
    if cue.tokens.count >= 9 || cue.translation.count > 54 { return 1.33 }
    return 1.0
}

func paginate(_ cues: [Cue]) -> [Page] {
    var pages: [Page] = []
    var indices: [Int] = []
    var weights: [CGFloat] = []
    var total: CGFloat = 0

    for index in cues.indices {
        let weight = cueWeight(cues[index])
        if !indices.isEmpty && (indices.count == 4 || total + weight > 4.05) {
            pages.append(Page(indices: indices, weights: weights))
            indices = []
            weights = []
            total = 0
        }
        indices.append(index)
        weights.append(weight)
        total += weight
    }
    if !indices.isEmpty {
        pages.append(Page(indices: indices, weights: weights))
    }

    if pages.count > 1, pages.last?.indices.count == 1 {
        let final = pages.removeLast()
        let previous = pages.removeLast()
        if previous.indices.count > 2 {
            let movedIndex = previous.indices.last!
            let movedWeight = previous.weights.last!
            pages.append(Page(indices: Array(previous.indices.dropLast()), weights: Array(previous.weights.dropLast())))
            pages.append(Page(indices: [movedIndex] + final.indices, weights: [movedWeight] + final.weights))
        } else {
            pages.append(previous)
            pages.append(final)
        }
    }
    return pages
}

let pages = paginate(data.cues)
var pageForCue: [Int: Page] = [:]
for page in pages {
    for index in page.indices { pageForCue[index] = page }
}

func activeCueIndex(at seconds: Double) -> Int {
    var result = 0
    for index in data.cues.indices where seconds >= Double(data.cues[index].startMs) / 1000 {
        result = index
    }
    return result
}

func drawText(
    _ text: String,
    in rect: NSRect,
    font: NSFont,
    color: NSColor,
    alignment: NSTextAlignment = .left,
    direction: NSWritingDirection = .leftToRight
) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.alignment = alignment
    paragraph.baseWritingDirection = direction
    paragraph.lineBreakMode = .byTruncatingTail
    (text as NSString).draw(
        in: rect,
        withAttributes: [
            .font: font,
            .foregroundColor: color,
            .paragraphStyle: paragraph,
        ]
    )
}

func renderBlock(_ cue: Cue, rect: NSRect, active: Bool, showDivider: Bool) {
    if active {
        palette.marker.setFill()
        let markerX = isRTL ? rect.maxX + 8 : rect.minX - 13
        let markerRect = NSRect(x: markerX, y: rect.minY + 8, width: 5, height: rect.height - 16)
        NSBezierPath(roundedRect: markerRect, xRadius: 2.5, yRadius: 2.5).fill()
    }

    if showDivider {
        palette.line.setStroke()
        let divider = NSBezierPath()
        divider.move(to: NSPoint(x: rect.minX, y: rect.maxY))
        divider.line(to: NSPoint(x: rect.maxX, y: rect.maxY))
        divider.lineWidth = 1
        divider.stroke()
    }

    let horizontalPadding: CGFloat = 12
    let contentX = rect.minX + horizontalPadding
    let contentWidth = rect.width - horizontalPadding * 2
    let translationSize = max(26, min(36, rect.height * 0.14))
    drawText(
        cue.translation,
        in: NSRect(x: contentX, y: rect.minY + 13, width: contentWidth, height: translationSize + 6),
        font: .systemFont(ofSize: translationSize, weight: active ? .semibold : .regular),
        color: palette.text
    )

    let tokenTop = rect.minY + max(52, rect.height * 0.25)
    let tokenCount = max(1, cue.tokens.count)
    let columnWidth = contentWidth / CGFloat(tokenCount)
    let targetSize = max(30, min(data.language == "Arabic" ? 52 : 48, columnWidth * 0.32))
    let annotationSize = max(17, min(23, columnWidth * 0.16))
    let targetFont = NSFont(name: data.language == "Arabic" ? "GeezaPro-Bold" : "PingFangSC-Semibold", size: targetSize) ?? .boldSystemFont(ofSize: targetSize)
    let annotationFont = NSFont.systemFont(ofSize: annotationSize, weight: active ? .medium : .regular)
    let tokenGap: CGFloat = 20
    let measuredWidths = cue.tokens.map { token -> CGFloat in
        let surfaceWidth = (token.surface as NSString).size(withAttributes: [.font: targetFont]).width
        let transliterationWidth = (token.transliteration as NSString).size(withAttributes: [.font: annotationFont]).width
        let glossWidth = (token.gloss as NSString).size(withAttributes: [.font: annotationFont]).width
        return max(targetSize * 1.15, surfaceWidth, transliterationWidth, glossWidth) + 8
    }
    let availableForTokens = max(1, contentWidth - tokenGap * CGFloat(max(0, tokenCount - 1)))
    let measuredTotal = max(1, measuredWidths.reduce(0, +))
    let widthScale = min(1, availableForTokens / measuredTotal)
    let tokenWidths = measuredWidths.map { $0 * widthScale }
    var cursorX = isRTL ? contentX + contentWidth : contentX

    for (index, token) in cue.tokens.enumerated() {
        let tokenWidth = tokenWidths[index]
        let x: CGFloat
        if isRTL {
            cursorX -= tokenWidth
            x = cursorX
            cursorX -= tokenGap
        } else {
            x = cursorX
            cursorX += tokenWidth + tokenGap
        }
        let cell = NSRect(x: x, y: tokenTop, width: tokenWidth, height: rect.maxY - tokenTop - 5)
        drawText(
            token.surface,
            in: NSRect(x: cell.minX, y: cell.minY, width: cell.width, height: targetSize + 5),
            font: targetFont,
            color: palette.text,
            alignment: .center,
            direction: isRTL ? .rightToLeft : .leftToRight
        )
        drawText(
            token.transliteration,
            in: NSRect(x: cell.minX, y: cell.minY + targetSize + 3, width: cell.width, height: annotationSize + 5),
            font: annotationFont,
            color: palette.annotation,
            alignment: .center
        )
        drawText(
            token.gloss,
            in: NSRect(x: cell.minX, y: cell.minY + targetSize + annotationSize + 8, width: cell.width, height: annotationSize + 5),
            font: annotationFont,
            color: palette.annotation,
            alignment: .center
        )
    }
}

func renderFrame(context: CGContext, activeIndex: Int) {
    context.translateBy(x: 0, y: CGFloat(height))
    context.scaleBy(x: 1, y: -1)
    context.setFillColor(palette.background.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: width, height: height))

    let graphicsContext = NSGraphicsContext(cgContext: context, flipped: true)
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = graphicsContext

    let page = pageForCue[activeIndex]!
    let margin: CGFloat = 12
    let gap: CGFloat = 0
    let availableHeight = CGFloat(height) - margin * 2 - gap * CGFloat(page.indices.count - 1)
    let totalWeight = page.weights.reduce(0, +)
    var y = margin

    for (offset, cueIndex) in page.indices.enumerated() {
        let blockHeight = availableHeight * page.weights[offset] / totalWeight
        let rect = NSRect(x: 30, y: y, width: CGFloat(width) - 60, height: blockHeight)
        renderBlock(
            data.cues[cueIndex],
            rect: rect,
            active: cueIndex == activeIndex,
            showDivider: offset < page.indices.count - 1
        )
        y += blockHeight + gap
    }

    NSGraphicsContext.restoreGraphicsState()
}

let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
let videoInput = AVAssetWriterInput(
    mediaType: .video,
    outputSettings: [
        AVVideoCodecKey: AVVideoCodecType.h264,
        AVVideoWidthKey: width,
        AVVideoHeightKey: height,
        AVVideoCompressionPropertiesKey: [
            AVVideoAverageBitRateKey: 4_500_000,
            AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
        ],
    ]
)
videoInput.expectsMediaDataInRealTime = false

let pixelBufferAttributes: [String: Any] = [
    kCVPixelBufferPixelFormatTypeKey as String: Int(kCVPixelFormatType_32BGRA),
    kCVPixelBufferWidthKey as String: width,
    kCVPixelBufferHeightKey as String: height,
]
let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: videoInput, sourcePixelBufferAttributes: pixelBufferAttributes)

guard writer.canAdd(videoInput) else { fatalError("Unable to add H.264 input") }
writer.add(videoInput)
guard writer.startWriting() else { fatalError("Unable to start writer: \(writer.error?.localizedDescription ?? "unknown")") }
writer.startSession(atSourceTime: .zero)
guard let pool = adaptor.pixelBufferPool else { fatalError("Unable to create pixel buffer pool") }

var cachedFrames: [Int: Data] = [:]
for frame in 0..<frameCount {
    while !videoInput.isReadyForMoreMediaData { usleep(1_000) }
    var optionalBuffer: CVPixelBuffer?
    guard CVPixelBufferPoolCreatePixelBuffer(nil, pool, &optionalBuffer) == kCVReturnSuccess, let buffer = optionalBuffer else {
        fatalError("Unable to allocate frame \(frame)")
    }

    CVPixelBufferLockBaseAddress(buffer, [])
    guard let base = CVPixelBufferGetBaseAddress(buffer) else { fatalError("Missing pixel buffer base address") }
    let byteCount = CVPixelBufferGetBytesPerRow(buffer) * height
    let seconds = Double(frame) / Double(fps)
    let activeIndex = activeCueIndex(at: seconds)
    if let cached = cachedFrames[activeIndex] {
        cached.copyBytes(to: base.assumingMemoryBound(to: UInt8.self), count: byteCount)
    } else {
        guard let context = CGContext(
            data: base,
            width: width,
            height: height,
            bitsPerComponent: 8,
            bytesPerRow: CVPixelBufferGetBytesPerRow(buffer),
            space: CGColorSpaceCreateDeviceRGB(),
            bitmapInfo: CGBitmapInfo.byteOrder32Little.rawValue | CGImageAlphaInfo.premultipliedFirst.rawValue
        ) else { fatalError("Unable to create graphics context") }
        renderFrame(context: context, activeIndex: activeIndex)
        cachedFrames[activeIndex] = Data(bytes: base, count: byteCount)
    }
    CVPixelBufferUnlockBaseAddress(buffer, [])

    let presentationTime = CMTime(value: Int64(frame), timescale: fps)
    guard adaptor.append(buffer, withPresentationTime: presentationTime) else {
        fatalError("Unable to append frame \(frame): \(writer.error?.localizedDescription ?? "unknown")")
    }
}

videoInput.markAsFinished()
writer.endSession(atSourceTime: CMTime(seconds: renderDuration, preferredTimescale: 600))
let completion = DispatchSemaphore(value: 0)
writer.finishWriting { completion.signal() }
completion.wait()
guard writer.status == .completed else { fatalError("Export failed: \(writer.error?.localizedDescription ?? "unknown")") }
print("\(data.language): \(pages.count) pages, \(data.cues.count) active states → \(outputURL.path)")
