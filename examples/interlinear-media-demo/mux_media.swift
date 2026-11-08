import AVFoundation
import Foundation

guard CommandLine.arguments.count == 4 else {
    fatalError("Usage: mux_media VIDEO_ONLY.mp4 AUDIO_FILE OUTPUT.mp4")
}

let videoURL = URL(fileURLWithPath: CommandLine.arguments[1])
let audioURL = URL(fileURLWithPath: CommandLine.arguments[2])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[3])
if FileManager.default.fileExists(atPath: outputURL.path) {
    try FileManager.default.removeItem(at: outputURL)
}

let videoAsset = AVURLAsset(url: videoURL)
let audioAsset = AVURLAsset(url: audioURL)
guard
    let sourceVideo = videoAsset.tracks(withMediaType: .video).first,
    let sourceAudio = audioAsset.tracks(withMediaType: .audio).first
else { fatalError("A source track is missing") }

let duration = videoAsset.duration
let composition = AVMutableComposition()
guard
    let videoTrack = composition.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid),
    let audioTrack = composition.addMutableTrack(withMediaType: .audio, preferredTrackID: kCMPersistentTrackID_Invalid)
else { fatalError("Unable to create composition tracks") }

try videoTrack.insertTimeRange(CMTimeRange(start: .zero, duration: duration), of: sourceVideo, at: .zero)
try audioTrack.insertTimeRange(CMTimeRange(start: .zero, duration: duration), of: sourceAudio, at: .zero)

guard let exporter = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetHighestQuality) else {
    fatalError("Unable to create export session")
}
exporter.outputURL = outputURL
exporter.outputFileType = .mp4
exporter.timeRange = CMTimeRange(start: .zero, duration: duration)
exporter.shouldOptimizeForNetworkUse = true

let completion = DispatchSemaphore(value: 0)
exporter.exportAsynchronously { completion.signal() }
completion.wait()
guard exporter.status == .completed else {
    fatalError("Mux failed: \(exporter.error?.localizedDescription ?? "unknown")")
}
print(outputURL.path)
