![banner-image.png](../assets/banner-image.png)

<hr>

# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/), versioning
follows [Semantic Versioning](https://semver.org/).

## [1.72.0] — 2026-08-30

### Fixed
- Turntable Vinyl Sim settings (Wow/Flutter, Vinyl Noise, Saturation,
  Motor Ramp) now actually save with your project — they were silently
  resetting to off on reload

## [1.68.0] — 2026-08-29

### Fixed
- The BASS tab was leaving a lot of empty space below its controls —
  it now fills the space it's actually given

## [1.65.0] — 2026-08-29

### Added
- **AIFF export** — the STEMS tab now has a Format: WAV/AIFF choice,
  applied to split stems and the Export... button
- **Formant Shift** — a new insert effect (available per-pad and in
  Master FX) that shifts a sound's resonant character independent of its
  pitch

## [1.64.0] — 2026-08-29

### Fixed
- Restored the plugin's window proportions to how they originally looked
  — the toolbar now spans 2 compact rows instead of 1 very wide one

## [1.63.0] — 2026-08-29

### Added
- **Per-pad insert effects** — each pad now has 3 effect slots instead of
  1. Right-click a pad and pick "Insert FX 1/2/3". Reverb, Delay, and
  Saturation slots also get an "Edit Knobs..." option with real,
  adjustable parameters
- **Window-size buttons** — "Smaller", "Mid", and "Full Screen" buttons
  in the top banner give you one-click sizing. Full Screen always fits
  your actual screen

### Fixed
- The Saturation (Console) effect was missing from the per-pad Insert FX
  menu — it's back
- Resizing the plugin by dragging one edge could distort its proportions
  — it now always keeps its shape
- The keyboard strip at the bottom could leave an empty gap on the right
  at some window sizes — fixed
- The plugin now opens a bit larger by default

## [1.62.0] — 2026-08-28

### Added
- **Master FX knobs** — Reverb, Delay, and Saturation slots in the
  Master FX popup now have real adjustable knobs (Size/Damping/Mix for
  Reverb, Time/Feedback/Mix for Delay, Drive for Saturation). Knobs are
  automatable and MIDI-learnable, same as any other knob

## [1.61.0] — 2026-08-28

### Added
- **Master bus rack** — a new "Master FX" button in the toolbar (visible
  on every tab) lets you add up to 3 effects to your final mix

### Fixed
- The 5 new Insert FX types added last update could revert to the wrong
  effect after saving/reloading a project — fixed
- Some toolbar controls (BPM, Metronome) were rendering too small to
  use in certain window sizes — fixed

## [1.60.0] — 2026-08-28

### Added
- **5 new Insert FX types** — Reverb, Delay, and 3 Saturation flavors
  (Tube, Transformer, Console) — available from any pad's right-click →
  Insert FX menu

## [1.59.0] — 2026-08-28

### Added
- **TURNTABLE tab: Full Screen mode** — press **E** (or the Full Screen
  button) to hide everything but the platter and a small Play/Cue
  strip, for an uncluttered view while performing. Press **Escape** or
  click again to return

## [1.58.0] — 2026-08-28

### Changed
- **TURNTABLE tab redesigned** — a much bigger platter (platter on the
  left, controls on the right, instead of stacked top-to-bottom) for a
  more realistic deck feel. A "2 Decks (coming soon)" toggle previews
  what's next — a real second deck is coming in a future update

## [1.57.0] — 2026-08-28

### Added
- **Quick Stop** — a small stop icon now appears in the top-left corner
  of any pad that's currently playing. Click it to cut the sample off
  right away instead of waiting for it to finish or reaching for Mute

## [1.56.1] — 2026-08-28

### Fixed
- **Check for Updates** was silently checking the wrong location and
  never finding anything — fixed

## [1.56.0] — 2026-08-28

### Added
- **New BASS tab** — a dedicated bass voice, separate from the 16-pad
  grid. Load a sample, shape it with its own volume/pan/filter/ADSR/
  tune/fine controls, and program a 16-step pattern with a per-step
  **Glide** toggle to slide smoothly from one note into the next
  instead of retriggering

## [1.54.0] — 2026-08-28

### Added
- **ARRANGEMENT tab** — right-click a section for **Edit Next Action...**
  to choose what happens when it finishes: play the next section
  (default), jump to a specific section, or hold and repeat forever.
  Sections that jump show a curved arrow to their target; sections that
  hold show a small looping-arrow icon. This completes the ARRANGEMENT
  tab feature set

## [1.53.0] — 2026-08-28

### Fixed
- The plugin window was too large by default and didn't fit properly in
  some DAWs. It now opens at half its previous size and can be freely
  resized both smaller and larger from there — drag any edge or corner

## [1.52.0] — 2026-08-28

### Added
- **ARRANGEMENT tab** — you can now drag a section's right edge to
  resize it (in whole bars), and drag a section to reorder it within
  the timeline

## [1.51.0] — 2026-08-28

### Added
- **ARRANGEMENT tab** (early preview) — build a timeline of your 4 kit
  banks (Bank A/B/C/D) as sections with a length in bars each. Click
  **+ Add** to add a section, double-click or right-click a section to
  rename or delete it. Turn on **Arrangement Mode** in the toolbar and
  the timeline drives bank switches automatically instead of you
  clicking A/B/C/D by hand (which are disabled while it's on). Still
  early: sections currently always play in order and loop back to the
  start — custom ordering and hold/jump behavior are coming in a
  follow-up update

## [1.49.1] — 2026-08-28

### Changed
- Documentation reorganized: the usage guide is now split into one page
  per feature area instead of one long scroll, and covers Mono mode,
  the Stem pre-mix levels, and the mouse-wheel knob nudge for the first
  time

## [1.49.0] — 2026-08-28

### Changed
- **Mouse-wheel nudge on knobs** — hover over any knob (DSP panel,
  Turntable, or the toolbar's BPM/Swing/Volume/Pan sliders) and scroll
  to nudge it by a small, precise step instead of a big jump

## [1.48.0] — 2026-08-28

### Added
- **Mono mode** — new toolbar toggle. Turn it on and triggering any pad
  cuts off whatever else is currently sounding, kit-wide. This is
  different from a pad's own Choke Group setting, which only cuts other
  pads in the same numbered group — Mono affects every pad at once. Off
  by default, and automatable from your DAW like any other parameter

## [1.47.0] — 2026-08-27

### Added
- **Stem level pre-mix** on the STEMS tab — five level sliders
  (Low/Mid/High/Harmonic/Percussive) above the pad list, host-automatable
  like any other parameter. Split a pad, hit each row's "Prev" button to
  preview the blend, adjust the sliders to taste, then Export bakes your
  chosen balance into the written files instead of exporting everything
  at full volume

## [1.46.0] — 2026-08-27

### Added
- **Vinyl Sim** on the TURNTABLE tab — Wow/Flutter, Vinyl Noise, and
  Saturation knobs, plus a Motor Ramp toggle that spins the record up
  to speed from a stop instead of starting instantly. All off by
  default, so nothing changes unless you turn them on

## [1.45.0] — 2026-08-27

### Added
- **Pad Quantize** — new toolbar toggle for live performance. Turn it
  on and hitting a pad (MIDI or click) waits for the next beat instead
  of firing right when you hit it. Sequencer steps aren't affected

## [1.44.0] — 2026-08-27

### Added
- **Key Shift Pad** — right-click a loaded pad and it spreads across
  your other empty pads, each one a semitone higher than the last.
  Instantly turns a chop into a playable chromatic instrument

## [1.43.1] — 2026-08-27

### Fixed
- The YouTube embed is now actually confirmed working end-to-end --
  the previous fix wasn't enough on its own

## [1.43.0] — 2026-08-27

### Added
- **YouTube Crate** — a new way to browse DISCOVER: tag YouTube videos
  you paste in (genre, style, year, key, BPM), then filter/search your
  own crate and get a ranked "Up Next" queue of similar tracks. Nothing
  is downloaded or auto-searched -- you tag what you add

### Fixed
- The YouTube embed actually plays now -- it was silently failing to
  load on some systems and showing a confusing error page instead

## [1.42.1] — 2026-08-27

### Fixed
- YouTube embed sometimes failed to load and showed a confusing script
  error instead. If it still can't load on your system, the YouTube
  field now disables itself with an explanation rather than showing a
  broken page

## [1.42.0] — 2026-08-27

### Added
- **DISCOVER tab now plays video** — local video files preview with
  picture and sound (whatever your system can play), and you can paste
  a YouTube URL to watch it embedded right in the tab. View only --
  nothing is ever downloaded
- DISCOVER's layout redone with a bigger preview pane

## [1.41.0] — 2026-08-27

### Added
- **Favorite a pad** (right-click menu) to protect its pattern from
  Randomize and Flip — shown as a small gold star on the pad

## [1.40.0] — 2026-08-27

### Added
- **New DISCOVER tab** — quickly audition and shuffle through your own
  local samples. Point it at a folder to watch, or add specific files;
  Shuffle picks something at random and plays it, then Load to Pad or
  Send to Next Empty Pad drops it straight in

## [1.39.0] — 2026-08-27

### Added
- **Flip** button in the SEQ tab — generates a fresh pattern across a
  chopped loop's slices, a quick way to hear it rearranged
- **Export SFZ...** — exports your kit as an SFZ instrument, playable
  in any SFZ-compatible sampler outside this plugin
- Right-click a stem in the STEMS tab to send it straight to an empty
  pad

## [1.38.0] — 2026-08-27

### Added
- Chopping, Auto-Slicing, and Transients now automatically snap cut
  points to avoid clicks at slice boundaries
- **Key Snap** toggle in the DSP panel — Tune snaps to notes that are
  actually in the sample's detected key instead of any raw semitone

## [1.37.0] — 2026-08-27

### Added
- **Step probability** — Shift+scroll on a lit step to give it a chance
  of not firing each time round, for evolving/generative patterns.
  Shows as a small percentage on the step when set below 100%
- **Randomize** button next to Humanize — regenerates which steps are
  on/off while keeping about the same density as before

## [1.36.0] — 2026-08-27

### Added
- **Multi-level Undo/Redo** — Undo now remembers up to 20 steps back
  instead of just one. A new Redo button sits next to it (Ctrl+Y or
  Ctrl+Shift+Z also work)

## [1.35.0] — 2026-08-27

### Added
- **Loop** toggle in the DSP panel — the sample repeats instead of
  stopping at the end of its region. Works best held with a MIDI note or
  the on-screen keyboard, since releasing the note is what stops it
- **Play To End** toggle — makes a pad always play its full length, even
  if the triggering note was very short

### Fixed
- The installed plugin wasn't always picking up the latest version after
  a rebuild — fixed at the build-system level

## [1.34.0] — 2026-08-27

### Added
- **Harmonic/Percussive split** in the STEMS tab — a second way to split
  a pad's sample, alongside the existing Low/Mid/High bands (not instead
  of it). Good for pulling apart sustained/melodic content from drum
  hits/transients. Classical DSP, not AI-based separation
- **Time-Stretch** toggle in the DSP panel — when on, the Speed knob
  changes how long a sample plays without changing its pitch (Tune/Fine
  still handle pitch on their own). Off by default, so nothing about
  existing pads changes unless you turn it on

## [1.33.0] — 2026-08-27

### Added
- **Insert FX per pad** — right-click any pad and choose Insert FX to add
  Chorus, Flanger, Phaser, Transient Designer, Harmonic Exciter, or
  Stereo Doubler to that pad's sound. "None" (the default) sounds exactly
  like it always did. Saved with your project, presets, and kit banks

### Fixed
- Growing the plugin window taller now actually gives the pad grid,
  sample editor, and DSP panel more room instead of just adding empty
  space at the bottom

## [1.32.1] — 2026-08-26

### Fixed
- **Trim Silence** now shows up under Undo — previously it couldn't be
  undone at all

## [1.32.0] — 2026-08-24

### Fixed
- Presets could forget the first row of pads when reloaded — fixed
- Live-Record didn't do anything when the plugin was loaded in a DAW
  unless you also pressed the DAW's own transport play button — it now
  works as soon as you arm it and start hitting pads
- Presets now stay working even after you delete the original sample
  files — saving a preset copies every sample it uses into its own data
  folder alongside it

### Added
- Pad banks now carry full kits, not just patterns — switch between 4
  complete 16-pad kits (64 pads total) with the Bank A/B/C/D buttons in
  the step sequencer. Bank switches land on the next bar, not instantly,
  so they never chop a pattern off mid-phrase
- Hardware-matching pad layout, on by default — pad 1 is now bottom-left
  instead of top-left, matching how many real pad controllers are
  numbered. Toggle **Hardware Layout** in the toolbar to switch back to
  plain reading order
- **Mixer Strips** view for the DSP panel — the same filter/envelope/
  pitch/FX controls as vertical faders instead of knobs, if you find that
  quicker to read or automate by ear. Plus an **Expand** option for more
  room to work them precisely
- **Trim Silence** in the sample editor — automatically trims leading and
  trailing silence from the current region
- The turntable now responds to an external MIDI jog-wheel controller,
  not just mouse drag

## [1.31.0] — 2026-08-10

### Added
- Direct BPM entry — you can now click into the tempo readout next to
  Tap Tempo and type an exact BPM (or drag it like a knob), instead of
  only being able to get close by tapping. Standalone mode only

## [1.30.0] — 2026-08-10

### Fixed
- Fixed a gap that could make some DAWs silently fail to record
  automation when you moved a knob or used a MIDI-mapped controller —
  every control in the plugin now correctly signals the host when a
  change starts and stops, not just what the new value is

## [1.29.0] — 2026-08-10

### Added
- Export current pattern as MIDI — "Export MIDI..." on the SEQ tab
  saves your whole 16-pad pattern as a standard MIDI file you can drag
  into any DAW track. Each pad gets its own fixed note, matching how
  the plugin already listens for pad triggers, so it'll play back
  correctly if you route it back into this plugin

## [1.28.0] — 2026-08-10

### Added
- Export current pattern as a WAV file — click "Export WAV..." on the
  SEQ tab, pick how many bars, and get a bounced-down reference file of
  your current pattern. Great for quickly sharing a beat idea without
  needing to record it through your DAW first

## [1.27.0] — 2026-08-10

### Added
- Metronome — a "Click" toggle next to Tap Tempo gives you an audible
  click while playing in standalone mode, so you've got something to
  play along to before you've programmed a beat. Ticks on every quarter
  note with an accented click on beat 1

## [1.26.0] — 2026-08-10

### Added
- Tap tempo — running the standalone app with no DAW? A new Tap button
  in the toolbar lets you tap out a tempo instead of being stuck at a
  fixed 120 BPM. It's used everywhere the plugin previously assumed 120
  with no host around: the sequencer, the Keys preview, Roll, and Sync

## [1.25.0] — 2026-08-10

### Added
- Turntable scratch loop points — turn on "Scr Loop" and set Loop In/Out
  to keep a short sample (a vocal stab, a quick chop) playing forever
  under your scratching instead of running out partway through the
  gesture

## [1.24.0] — 2026-08-10

### Added
- Trim/gain staging preview — a new Gain slider next to Normalize lets
  you dial in a gain trim and actually hear it (trigger the pad while
  adjusting) before committing. Click Apply Gain to keep it, or just
  slide back to 0dB to back out — nothing changes until you apply it

## [1.23.0] — 2026-08-10

### Added
- Waveform mini-map — a small strip under the sample editor's waveform
  now shows the whole clip with a highlighted box marking where you're
  currently zoomed in. Click or drag it to jump to a different part of
  a long sample instantly, instead of zooming all the way out first

## [1.22.0] — 2026-08-10

### Added
- A/B compare for a pad's DSP settings — click "Store A" to remember
  where you started, then use the A/B button to flip back and forth
  while you tweak, so you can actually hear whether the change is an
  improvement. Not saved with your project — it's just a listening aid

## [1.21.0] — 2026-08-10

### Added
- Per-pad color tagging — right-click a pad and pick "Color" to tag it
  with one of 8 colours, shown as a small strip along the bottom of the
  pad. Handy for grouping pads visually (all kicks red, all snares
  blue, etc.) — the color sticks with the pad even if you swap the
  sample out, and follows it if you drag-reorder pads around

## [1.20.0] — 2026-08-10

### Added
- Auto-slice-to-pads — found a long loop or one-shot pack in the sample
  browser? Right-click it and choose "Auto-Slice to Empty Pads" to load
  it, slice it at its transients, and drop each piece onto its own empty
  pad automatically. It'll never overwrite a pad you've already loaded

## [1.19.0] — 2026-08-10

### Added
- Drag-to-reorder pads — hold Shift and drag one pad onto another to
  swap them completely: sample, all its knob settings, and its pattern.
  Works even if the target pad is empty. A normal drag (no Shift) still
  works exactly like before — export the sound out to your DAW's browser

## [1.18.0] — 2026-08-10

### Added
- Choke groups — right-click a pad, pick "Choke Group", assign it to
  A/B/C/D. Pads sharing a group cut each other off instantly when
  triggered, just like a closed hi-hat stopping an open one. A small
  letter badge shows which group a pad is in. Off by default

## [1.17.0] — 2026-08-10

### Fixed
- A rare crash/data-corruption risk around Pattern Banks and Undo when
  autosaving or loading a preset at the exact same moment as playback
- A rare crash risk with custom scratch patterns if you saved or deleted
  one while a different one was playing
- Clearing or chopping a pad could leave a stale BPM/Key estimate behind,
  throwing off the Sync button on the affected pad
- The Stems tab could show stale info after loading a preset if Stems was
  already the tab you had open
- A handful of background-loading edge cases (loading a sample, MIDI
  import/export, folder browsing, stem export) that could misbehave if
  you closed the plugin window at exactly the wrong moment

## [1.16.0] — 2026-08-10

### Added
- You can now rename a loaded pad's clip — right-click it and choose
  "Rename...". Clearing the name box reverts to the filename. The rename
  sticks with that specific sound: loading a new sample or chopping the
  pad resets it, and Undo covers it too

## [1.15.0] — 2026-08-10

### Added
- Undo! Press Ctrl+Z (or click the Undo button in the toolbar) right
  after Chopping a sample, clearing a pattern, or clearing a pad, and
  it's back. One level — it undoes the last one of those, not a full
  history

## [1.14.0] — 2026-08-10

### Added
- Pattern banks on the SEQ tab — 4 banks (A/B/C/D), each holding a
  complete pattern for the whole kit. Great for verse/chorus-style
  variations. Switching banks waits until the start of the next bar
  instead of jumping mid-pattern, and your banks are saved with the project

## [1.13.0] — 2026-08-10

### Added
- You can now record your own custom scratch patterns on the Turntable
  tab — hit Record, perform your scratch, hit Stop, give it a name, and
  it's saved for next time right alongside the 4 built-in presets (Baby,
  Scribble, Chirp, Transform)

## [1.12.0] — 2026-08-10

### Added
- Multi-pad batch editing — Ctrl+click pads to select several at once
  (shown with a teal ring), then any DSP knob or toggle you turn applies
  to all of them together instead of one at a time
- A "Normalize All" button that normalizes every loaded pad in one click,
  instead of doing each pad individually
- A "Humanize" button on the SEQ tab that randomizes each step's velocity
  a little, so a programmed pattern feels less mechanical

## [1.11.0] — 2026-08-10

### Added
- Full Screen button on the sample editor, next to Expand/Collapse — grows
  the chopper to fill the whole plugin for the most accurate view while
  chopping, with a button to lower it back down
- Keyboard shortcuts: press `E` to cycle through the sample editor's
  views (normal, expanded, full screen), or `Escape` to jump straight
  back down — no need to aim for a small button

### Changed
- The trim handles and cut-point markers in the sample editor are now
  easier to grab precisely, especially on a laptop trackpad

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
  pitch (tune/fine) and speed, reverse, normalize, bitcrush (ADR-0006)
- Real-time output metering with clip indication
- All per-pad DSP settings + swing converted to real, host-automatable
  parameters, with right-click MIDI Learn on every control (ADR-0008)
- Presets — save/load/delete named presets independent of any DAW project
  (ADR-0009)
- Real file-system sample browser with search, replacing the placeholder
  (ADR-0010, search added later — ADR-0016)
- Roll (note-repeat: press-and-hold a pad to auto-retrigger) and Auto-Slice
  (divide a region into N equal pieces) (ADR-0011)
- Full visual redesign: custom dark/gold "premium hardware sampler" look,
  rotary knobs, animated pad glow/pulse, restyled meter and browser
  (ADR-0012)
- Tabs: **STEMS** (3-band frequency split of a pad's sample, with drag-out
  and folder export), **TURNTABLE** (a dedicated scratch-capable deck,
  independent of the 16 pads), and **KEYS** (an on-screen keyboard plus a
  pitch-and-length-aware piano roll, with MIDI import/export) (ADR-0013,
  ADR-0014, ADR-0017, ADR-0019)
- Standalone build (`Boom Bap Producer Pads.exe`) — runs without a DAW,
  with its own audio/MIDI device selection and a "Seq Play" toggle to
  drive the step sequencer in the absence of a host transport (ADR-0015,
  ADR-0020)
- Ctrl+scroll zoom on the sample editor, anchored to the cursor (ADR-0016)
- Per-pad Pan control (equal-power), host-automatable and MIDI-learnable
  (ADR-0021)
- Live-record: pad hits played during playback write directly into the
  step grid instead of step-programming only (ADR-0021)
- Sample-accurate step triggering — steps now start on the exact sample,
  not just the right block (ADR-0021)
- Sample browser: drag a file straight onto a pad to load it, audition
  (preview) files before loading, favorite folders, and a recent-files
  list (ADR-0022)

### Fixed
- A state-restore bug where pads/steps not mentioned in an incoming preset
  or DAW project state could leak whatever was already loaded, instead of
  explicitly clearing (ADR-0009)
- Sample browser filenames getting clipped to a sliver a few folders deep
  into a real library (ADR-0012)
- Turntable scratch sounding like "a high-pitched jumbled" version of the
  sample rather than a real scratch — root-caused to an unclamped position
  accumulator that could diverge during boundary-hitting scratches; also
  reduced drag sensitivity and added a centre deadzone (ADR-0018)
- Step sequencer never advancing in the standalone build — confirmed via
  JUCE's own source that the Windows standalone wrapper never provides a
  playhead at all (ADR-0020)

## [0.1.0] — 2026-08-05

First working build. VST3, Windows only.

### Added
- 16-pad one-shot sample engine — load a sample per pad via file chooser,
  right-click menu, or drag-and-drop; trigger via MIDI (notes 36–51, real
  velocity) or UI click (fixed velocity); choke-per-pad retriggering
- 16-step sequencer per pad, synced to the host DAW's transport/tempo
  (not a free-running clock); swing control
- Pattern and sample assignments persist with the DAW project
- Original pad-grid UI with playhead highlight and per-pad selection for
  step editing
- `pluginval` strictness 5 validated; confirmed loading and playing in
  FL Studio

### Known limitations
- No sample trimming/start-point — full sample plays from 0 every time
- No per-pad volume/pan/ADSR controls
- Step triggering is block-quantized, not sample-accurate (a few ms of
  possible jitter)
- No live-record of pad hits into the step grid (step-programming only)
- Not yet load-tested in Reason or Ableton Live
- Windows only — no macOS/Logic build yet
