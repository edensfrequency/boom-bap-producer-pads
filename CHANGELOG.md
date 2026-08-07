# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/), versioning
follows [Semantic Versioning](https://semver.org/).

## [1.0.1] — 2026-08-07

### Added
- Per-pad DSP chain: resonant filter (cutoff/resonance), ADSR envelope,
  pitch (tune/fine) and speed, reverse, normalize, bitcrush
- Real-time output metering with clip indication
- Per-pad Pan control
- All per-pad DSP settings + swing are real, host-automatable parameters,
  with right-click MIDI Learn on every control
- Presets — save/load/delete named presets independent of any DAW project
- Sample browser with search, drag-to-pad loading, audition, favorites,
  and a recent-files list
- Roll (note-repeat: press-and-hold a pad to auto-retrigger) and Auto-Slice
  (divide a region into N equal pieces)
- Full visual redesign: dark/gold "premium hardware sampler" look, rotary
  knobs, animated pad glow/pulse, restyled meter and browser
- Tabs: **STEMS** (3-band frequency split of a pad's sample, with drag-out
  and folder export), **TURNTABLE** (a dedicated scratch-capable deck,
  independent of the 16 pads), and **KEYS** (an on-screen keyboard plus a
  pitch-and-length-aware piano roll, with MIDI import/export)
- Standalone build — runs without a DAW, with its own audio/MIDI device
  selection and a "Seq Play" toggle to drive the step sequencer
- Ctrl+scroll zoom on the sample editor, anchored to the cursor
- Live-record: pad hits played during playback write directly into the
  step grid instead of step-programming only
- Sample-accurate step triggering

### Fixed
- Turntable scratch feel — now tracks like a real scratch instead of a
  jumbled/high-pitched glitch
- Sample browser filenames getting clipped a few folders deep into a real
  library
- Step sequencer never advancing in the standalone build

## [0.1.0]

First working build. VST3, Windows only.

### Added
- 16-pad one-shot sample engine — load a sample per pad via file chooser,
  right-click menu, or drag-and-drop; trigger via MIDI (notes 36–51, real
  velocity) or UI click (fixed velocity); choke-per-pad retriggering
- 16-step sequencer per pad, synced to the host DAW's transport/tempo;
  swing control
- Pattern and sample assignments persist with the DAW project

### Known limitations
- No sample trimming/start-point — full sample plays from 0 every time
- No per-pad volume/pan/ADSR controls
- Step triggering is block-quantized, not sample-accurate
- No live-record of pad hits into the step grid (step-programming only)
- Windows only — no macOS/Logic build yet
