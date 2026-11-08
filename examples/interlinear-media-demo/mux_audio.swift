import AVFoundation
import Foundation

let duration = CMTime(seconds: 25, preferredTimescale: 600)
let fileManager = FileManager.default
let scriptURL = URL(fileURLWithPath: CommandLine.arguments[0]).deletingLastPathComponent()
let videoURL = scriptURL.appendingPathComponent("assets/chinese-interlinear-video-only.mp4")
let audioURL = scriptURL.appendingPathComponent("assets/chinese-sample.m4a")
let outputURL = scriptURL.appendingPathComponent("assets/chinese-interlinear-sample.mp4")

if fileManager.fileExists(atPath: outputURL.path) {
    try fileManager.removeItem(at: outputURL)
}

let videoAsset = AVURLAsset(url: videoURL)
let audioAsset = AVURLAsset(url: audioURL)
guard
    let sourceVideo = videoAsset.tracks(withMediaType: .video).first,
    let sourceAudio = audioAsset.tracks(withMediaType: .audio).first
else {
    fatalError("The video-only MP4 or sample M4A is missing its media track.")
}

let composition = AVMutableComposition()
guard
    let videoTrack = composition.addMutableTrack(
        withMediaType: .video,
        preferredTrackID: kCMPersistentTrackID_Invalid
    ),
    let audioTrack = composition.addMutableTrack(
        withMediaType: .audio,
        preferredTrackID: kCMPersistentTrackID_Invalid
    )
else {
    fatalError("Unable to create composition tracks.")
}

try videoTrack.insertTimeRange(
    CMTimeRange(start: .zero, duration: duration),
    of: sourceVideo,
    at: .zero
)
try audioTrack.insertTimeRange(
    CMTimeRange(start: .zero, duration: duration),
    of: sourceAudio,
    at: .zero
)

guard let exporter = AVAssetExportSession(
    asset: composition,
    presetName: AVAssetExportPresetHighestQuality
) else {
    fatalError("Unable to create the MP4 export session.")
}
exporter.outputURL = outputURL
exporter.outputFileType = .mp4
exporter.timeRange = CMTimeRange(start: .zero, duration: duration)
exporter.shouldOptimizeForNetworkUse = true

let completion = DispatchSemaphore(value: 0)
exporter.exportAsynchronously {
    completion.signal()
}
completion.wait()

guard exporter.status == .completed else {
    fatalError("Audio/video mux failed: \(exporter.error?.localizedDescription ?? "unknown error")")
}

print(outputURL.path)
