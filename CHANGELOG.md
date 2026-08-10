# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/), versioning
follows [Semantic Versioning](https://semver.org/).

## [1.10.0] — 2026-08-10

### Fixed
- A real bug where notes triggered from your DAW's piano roll or the
  on-screen keyboard could come out almost silent — a couple milliseconds
  of audio instead of the full hit. This affected playback everywhere
  except clicking pads directly or the built-in sequencer's own steps
- The SEQ tab's step grid (and a couple of other things, like which tab
  is highlighted) wasn't visually showing on/off state, even though
  clicking was actually working underneath — it just never looked like
  it. Fixed at the root, so this couldn't quietly break again elsewhere

### Added
- A small CPU/voice-count readout in the toolbar
- Clicking a step ON in the SEQ tab now plays a quick preview so you can
  hear what you just programmed

## [1.9.0] — 2026-08-10

### Added
- Copy and Paste buttons on the SEQ tab — select a pad's row, hit Copy,
  select another pad, hit Paste, and the whole pattern (including step
  velocities) transplants over in one click

## [1.8.0] — 2026-08-10

### Added
- Mute and Solo buttons on every pad — small "M"/"S" toggles in the
  corner. Solo a pad and only soloed pads play; mute one and it goes
  silent (but keeps playing internally, so unmuting mid-hit picks up
  right where it actually is instead of restarting)

## [1.7.0] — 2026-08-09

### Added
- Per-step velocity on the SEQ tab — scroll your mouse wheel over a lit
  step to make it louder or quieter, shown by how bright it looks. Your
  existing patterns are unaffected until you touch this
- Recording live while Record is armed now captures how hard you actually
  hit the pad, instead of always recording it at full volume

### Changed
- Turntable's Sensitivity/Speed knobs and preset scratch buttons are now
  grouped together right under Pitch/Volume, ahead of the EQ/Filter/Reverb
  tone knobs

## [1.6.0] — 2026-08-09

### Added
- Turntable now has Sensitivity and Speed knobs for scratching — Sensitivity
  controls how much platter drag turns into audio movement, Speed controls
  how quickly the sound spins down/up when you let go. Both are MIDI-learnable
  and default to exactly how scratching already felt
- Four preset scratch buttons on the turntable — Baby, Scribble, Chirp, and
  Transform — one click plays a scripted scratch gesture on whatever's loaded

## [1.5.0] — 2026-08-09

### Added
- The step sequencer now has its own SEQ tab, showing all 16 pads' patterns
  at once in a full grid instead of one pad's row at a time squeezed onto
  the Pads page — click a pad's name on the left to jump to editing it

### Fixed
- Hits recorded live while Record was armed now show up on the step grid
  right away instead of only appearing after you happened to click
  something else

## [1.4.0] — 2026-08-09

### Added
- An "Expand" button on the sample chopper now grows the waveform view
  to a noticeably bigger size (both wider and taller) so it's easier to
  place chop points and trim handles precisely — click it again to go
  back to the normal layout

## [1.3.0] — 2026-08-09

### Fixed
- Notes with a specific length in your DAW's piano roll (or held on the
  on-screen keyboard) now actually stop when they're supposed to instead
  of always playing the full sample — the pad fades out through its own
  Release setting instead of getting cut off with a click
- The Keys tab's pattern preview now actually locks to your DAW's
  play/stop and tempo position instead of running on its own separate
  clock that could drift out of time

### Added
- Record and Loop buttons in the toolbar, next to Play/Stop, so they're
  reachable from every tab instead of only Pads (Record) or Keys (Loop)

## [1.2.0] — 2026-08-09

### Fixed
- Turntable scratch was glitchy and too fast in some drag patterns —
  rebuilt to track the real speed of your drag instead of forcing
  playback to catch up within a single audio block
- Turntable Pitch and Volume now actually respond to MIDI Learn — the
  right-click menu was already there, it just didn't do anything

### Added
- Turntable momentum — letting go of the platter now spins the sound
  down naturally instead of stopping dead
- Turntable gained EQ (3-band), Filter, Reverb, a beat-length Loop, and
  hold-to-engage Stutter — the same set of tools the Boom Bap Producer
  Decks turntables have, all MIDI-learnable
- Right-click MIDI Learn now covers every knob and toggle in the plugin,
  not just most of them — including Roll, Record-arm, and the turntable
- Roll's on/off state now actually saves with your project (it used to
  silently reset every time you reopened it)
- The turntable now starts/stops with your DAW's own play/stop, and a
  new Play/Stop button in the toolbar (visible on every tab) also gives
  the standalone build a genuine one-click transport
- A persistent, playable keyboard strip at the bottom of the plugin —
  three modes: play whichever pad is selected chromatically, one key per
  pad, or the whole keyboard split into 16 zones (one per pad)
- The Keys tab now has its own Play/Loop preview, so you can audition a
  pattern on its own without needing the whole song playing
- Loading a sample (onto a pad, the turntable, or previewing in the
  browser) now happens in the background instead of freezing the UI —
  noticeable on larger files

### Changed
- Stems tab redesigned — colour-coded Low/Mid/High chips and clearer
  per-pad cards that show at a glance which pads are loaded and which
  have already been split. Same underlying feature, just easier to read

## [1.1.0] — 2026-08-07

### Added
- Auto BPM + key detection when you load a sample, plus a "Sync" button
  that matches the pad's Speed to your host's tempo
- Transient-aware auto-slice — a "Transients" button that slices at the
  sample's actual hits instead of equal divisions
- Per-pad output routing — route any pad to its own channel in your
  DAW's mixer instead of the shared stereo output
- Frequency-colored waveform — a "Freq" toggle in the sample editor
  tints the waveform by pitch content (low=red, high=blue)
- Cue-point quantize-to-beat — a "Quantize" toggle snaps chop points and
  trim handles to the beat grid (or nearest transient with no detected
  tempo)
- Refreshed branding, and a proper icon for the standalone app and the
  installed VST3
- The plugin now shows its version number right in the banner

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
