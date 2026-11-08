import AppKit
import AVFoundation
import CoreGraphics
import CoreVideo
import Foundation

struct Token {
    let form: String
    let pinyin: String
    let literal: String
    let gloss: String
}

struct Cue {
    let start: Double
    let end: Double
    let source: String
    let pinyin: String
    let translation: String
    let tokens: [Token]
}

let cues = [
    Cue(
        start: 0,
        end: 7.001,
        source: "我学习英语。",
        pinyin: "wǒ xuéxí Yīngyǔ",
        translation: "I learn English.",
        tokens: [
            Token(form: "我", pinyin: "wǒ", literal: "I", gloss: "1SG"),
            Token(form: "学习", pinyin: "xuéxí", literal: "learn", gloss: "learn"),
            Token(form: "英语", pinyin: "Yīngyǔ", literal: "English", gloss: "English"),
        ]
    ),
    Cue(
        start: 9.001,
        end: 14.774,
        source: "我是初学者。",
        pinyin: "wǒ shì chūxuézhě",
        translation: "I'm only a beginner.",
        tokens: [
            Token(form: "我", pinyin: "wǒ", literal: "I", gloss: "1SG"),
            Token(form: "是", pinyin: "shì", literal: "be", gloss: "COP"),
            Token(form: "初学者", pinyin: "chūxuézhě", literal: "beginner", gloss: "beginner"),
        ]
    ),
    Cue(
        start: 16.774,
        end: 24.976,
        source: "我还会出很多错误。",
        pinyin: "wǒ hái huì chū hěn duō cuòwù",
        translation: "I still make many mistakes.",
        tokens: [
            Token(form: "我", pinyin: "wǒ", literal: "I", gloss: "1SG"),
            Token(form: "还", pinyin: "hái", literal: "still", gloss: "still"),
            Token(form: "会", pinyin: "huì", literal: "will / tend to", gloss: "MOD"),
            Token(form: "出", pinyin: "chū", literal: "produce", gloss: "produce"),
            Token(form: "很多", pinyin: "hěn duō", literal: "many", gloss: "many"),
            Token(form: "错误", pinyin: "cuòwù", literal: "mistakes", gloss: "error"),
        ]
    ),
]

let width = 1280
let height = 720
let fps: Int32 = 30
let duration = 25.0
let frameCount = Int(duration * Double(fps))
let fileManager = FileManager.default
let scriptURL = URL(fileURLWithPath: CommandLine.arguments[0]).deletingLastPathComponent()
let outputURL = scriptURL.appendingPathComponent("assets/chinese-interlinear-video-only.mp4")

if fileManager.fileExists(atPath: outputURL.path) {
    try fileManager.removeItem(at: outputURL)
}

func color(_ red: CGFloat, _ green: CGFloat, _ blue: CGFloat, _ alpha: CGFloat = 1) -> NSColor {
    NSColor(srgbRed: red / 255, green: green / 255, blue: blue / 255, alpha: alpha)
}

let palette = (
    background: color(246, 247, 242),
    surface: color(255, 255, 255),
    contextSurface: color(238, 241, 235),
    line: color(216, 222, 213),
    text: color(19, 32, 27),
    muted: color(104, 116, 109),
    accent: color(40, 111, 108),
    transliteration: color(89, 101, 111),
    gloss: color(66, 82, 107)
)

func drawText(
    _ text: String,
    in rect: NSRect,
    font: NSFont,
    color: NSColor,
    alignment: NSTextAlignment = .left
) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.alignment = alignment
    paragraph.lineBreakMode = .byWordWrapping
    (text as NSString).draw(
        in: rect,
        withAttributes: [
            .font: font,
            .foregroundColor: color,
            .paragraphStyle: paragraph,
        ]
    )
}

func cueAt(_ time: Double) -> Cue? {
    cues.first { time >= $0.start && time < $0.end }
}

func renderFrame(context: CGContext, time: Double) {
    // AVAssetWriter presents Core Graphics bitmap rows in the opposite
    // orientation from the AppKit text drawing context used below.
    context.translateBy(x: 0, y: CGFloat(height))
    context.scaleBy(x: 1, y: -1)
    context.setFillColor(palette.background.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: width, height: height))

    let graphicsContext = NSGraphicsContext(cgContext: context, flipped: true)
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = graphicsContext

    palette.surface.setFill()
    NSBezierPath(rect: NSRect(x: 0, y: 0, width: width, height: 72)).fill()
    drawText(
        "INTERLINEAR MEDIA STUDIO",
        in: NSRect(x: 48, y: 12, width: 430, height: 18),
        font: .boldSystemFont(ofSize: 11),
        color: palette.muted
    )
    drawText(
        "Interlinear Caption Composer",
        in: NSRect(x: 48, y: 31, width: 520, height: 30),
        font: .boldSystemFont(ofSize: 23),
        color: palette.text
    )
    drawText(
        "STEP 4 OF 5  ·  COMPOSE & PREVIEW",
        in: NSRect(x: 740, y: 25, width: 490, height: 26),
        font: .boldSystemFont(ofSize: 13),
        color: palette.accent,
        alignment: .right
    )

    if let cue = cueAt(time) {
        let cueIndex = cues.firstIndex { $0.start == cue.start } ?? 0
        let cueNumber = cueIndex + 1
        drawText(
            "Sentence \(cueNumber) of \(cues.count)",
            in: NSRect(x: 58, y: 92, width: 220, height: 22),
            font: .boldSystemFont(ofSize: 12),
            color: palette.muted
        )
        drawText(
            String(format: "%02.0f:%05.2f–%02.0f:%05.2f", floor(cue.start / 60), cue.start.truncatingRemainder(dividingBy: 60), floor(cue.end / 60), cue.end.truncatingRemainder(dividingBy: 60)),
            in: NSRect(x: 900, y: 92, width: 320, height: 22),
            font: .monospacedDigitSystemFont(ofSize: 12, weight: .regular),
            color: palette.muted,
            alignment: .right
        )

        drawText(
            "TRANSLATION · ENGLISH",
            in: NSRect(x: 58, y: 125, width: 300, height: 18),
            font: .boldSystemFont(ofSize: 11),
            color: palette.muted
        )
        drawText(
            cue.translation,
            in: NSRect(x: 58, y: 148, width: 1164, height: 50),
            font: .systemFont(ofSize: 34, weight: .semibold),
            color: palette.text
        )

        palette.line.setStroke()
        let divider = NSBezierPath()
        divider.move(to: NSPoint(x: 58, y: 211))
        divider.line(to: NSPoint(x: 1222, y: 211))
        divider.lineWidth = 1
        divider.stroke()

        let labels = ["Original", "Pinyin", "Gloss"]
        let rowY: [CGFloat] = [244, 306, 362]
        for (index, label) in labels.enumerated() {
            drawText(
                label.uppercased(),
                in: NSRect(x: 58, y: rowY[index] + 8, width: 115, height: 22),
                font: .boldSystemFont(ofSize: 11),
                color: palette.muted
            )
        }

        let contentX: CGFloat = 190
        let contentWidth: CGFloat = 1025
        let columnWidth = contentWidth / CGFloat(cue.tokens.count)
        for (column, token) in cue.tokens.enumerated() {
            let x = contentX + CGFloat(column) * columnWidth
            let width = columnWidth - 9
            let values = [token.form, token.pinyin, token.gloss]
            let fonts = [
                NSFont(name: "PingFangSC-Medium", size: 31) ?? .systemFont(ofSize: 31),
                NSFont.systemFont(ofSize: 18),
                NSFont.systemFont(ofSize: 17),
            ]
            let colors = [palette.text, palette.transliteration, palette.gloss]
            for row in 0..<values.count {
                drawText(
                    values[row],
                    in: NSRect(x: x, y: rowY[row], width: width, height: 44),
                    font: fonts[row],
                    color: colors[row],
                    alignment: .center
                )
            }
        }

        func drawContextCue(_ contextCue: Cue?, label: String, rect: NSRect) {
            palette.contextSurface.setFill()
            NSBezierPath(roundedRect: rect, xRadius: 8, yRadius: 8).fill()
            drawText(
                label.uppercased(),
                in: NSRect(x: rect.minX + 16, y: rect.minY + 12, width: rect.width - 32, height: 18),
                font: .boldSystemFont(ofSize: 10),
                color: palette.muted
            )
            drawText(
                contextCue?.source ?? (label == "Previous subtitle" ? "Start of clip" : "End of clip"),
                in: NSRect(x: rect.minX + 16, y: rect.minY + 34, width: rect.width - 32, height: 34),
                font: NSFont(name: "PingFangSC-Medium", size: 21) ?? .systemFont(ofSize: 21),
                color: contextCue == nil ? palette.muted : palette.text
            )
            drawText(
                contextCue?.translation ?? "",
                in: NSRect(x: rect.minX + 16, y: rect.minY + 71, width: rect.width - 32, height: 28),
                font: .systemFont(ofSize: 14),
                color: palette.muted
            )
        }

        drawContextCue(cueIndex > 0 ? cues[cueIndex - 1] : nil, label: "Previous subtitle", rect: NSRect(x: 58, y: 446, width: 566, height: 110))
        drawContextCue(cueIndex + 1 < cues.count ? cues[cueIndex + 1] : nil, label: "Next subtitle", rect: NSRect(x: 638, y: 446, width: 584, height: 110))
    } else {
        drawText(
            "Listen for the next sentence…",
            in: NSRect(x: 50, y: 300, width: 1180, height: 60),
            font: .systemFont(ofSize: 30, weight: .medium),
            color: palette.muted,
            alignment: .center
        )
    }

    palette.surface.setFill()
    NSBezierPath(rect: NSRect(x: 0, y: 642, width: width, height: 78)).fill()
    palette.line.setFill()
    NSBezierPath(roundedRect: NSRect(x: 58, y: 668, width: 1164, height: 8), xRadius: 4, yRadius: 4).fill()
    palette.accent.setFill()
    NSBezierPath(roundedRect: NSRect(x: 58, y: 668, width: 1164 * min(1, time / duration), height: 8), xRadius: 4, yRadius: 4).fill()
    drawText(
        String(format: "00:%02.0f", floor(time)),
        in: NSRect(x: 58, y: 684, width: 80, height: 20),
        font: .monospacedDigitSystemFont(ofSize: 12, weight: .regular),
        color: palette.muted
    )
    drawText(
        "00:25",
        in: NSRect(x: 1142, y: 684, width: 80, height: 20),
        font: .monospacedDigitSystemFont(ofSize: 12, weight: .regular),
        color: palette.muted,
        alignment: .right
    )

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
            AVVideoAverageBitRateKey: 3_000_000,
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
let adaptor = AVAssetWriterInputPixelBufferAdaptor(
    assetWriterInput: videoInput,
    sourcePixelBufferAttributes: pixelBufferAttributes
)

guard writer.canAdd(videoInput) else {
    fatalError("Unable to add the H.264 video input to the MP4 writer.")
}
writer.add(videoInput)

guard writer.startWriting() else {
    fatalError("Unable to start MP4 writer: \(writer.error?.localizedDescription ?? "unknown error")")
}
writer.startSession(atSourceTime: .zero)

guard let pool = adaptor.pixelBufferPool else {
    fatalError("Unable to create the pixel buffer pool.")
}

for frame in 0..<frameCount {
    while !videoInput.isReadyForMoreMediaData {
        usleep(1_000)
    }

    var optionalBuffer: CVPixelBuffer?
    let status = CVPixelBufferPoolCreatePixelBuffer(nil, pool, &optionalBuffer)
    guard status == kCVReturnSuccess, let buffer = optionalBuffer else {
        fatalError("Unable to allocate video frame \(frame).")
    }

    CVPixelBufferLockBaseAddress(buffer, [])
    guard
        let baseAddress = CVPixelBufferGetBaseAddress(buffer),
        let context = CGContext(
            data: baseAddress,
            width: width,
            height: height,
            bitsPerComponent: 8,
            bytesPerRow: CVPixelBufferGetBytesPerRow(buffer),
            space: CGColorSpaceCreateDeviceRGB(),
            bitmapInfo: CGBitmapInfo.byteOrder32Little.rawValue | CGImageAlphaInfo.premultipliedFirst.rawValue
        )
    else {
        fatalError("Unable to create a graphics context.")
    }

    let time = Double(frame) / Double(fps)
    renderFrame(context: context, time: time)
    CVPixelBufferUnlockBaseAddress(buffer, [])

    let presentationTime = CMTime(value: Int64(frame), timescale: fps)
    guard adaptor.append(buffer, withPresentationTime: presentationTime) else {
        fatalError("Unable to append video frame \(frame): \(writer.error?.localizedDescription ?? "unknown error")")
    }
}
videoInput.markAsFinished()
writer.endSession(atSourceTime: CMTime(seconds: duration, preferredTimescale: 600))

let completion = DispatchSemaphore(value: 0)
writer.finishWriting {
    completion.signal()
}
completion.wait()

guard writer.status == .completed else {
    fatalError("Video export failed: \(writer.error?.localizedDescription ?? "unknown error")")
}

print(outputURL.path)
