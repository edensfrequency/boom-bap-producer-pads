
![banner-image.png](../assets/banner-image.png)

<hr>

# Usage

The plugin has four tabs, switched via the buttons in the toolbar strip
(top-left, next to the preset controls): **PADS**, **STEMS**, **TURNTABLE**,
and **KEYS**. The preset bar and output meter stay visible on every tab.
The banner shows the installed version number (e.g. `v1.22.0`) directly
under the plugin name — check it before reporting a bug, since the fix
you're looking for might already be in a newer build.

![The PADS tab — the default view](../assets/screen-shots/01-pads-tab.png)

- [The toolbar](#the-toolbar) — presets, metering, tabs
- [PADS tab](#pads-tab)
  - [The pad grid](#the-pad-grid)
  - [Sample editor (waveform, zoom, trim, chop)](#sample-editor)
  - [DSP controls (filter, envelope, pitch, FX)](#dsp-controls)
  - [Output routing](#output-routing)
  - [Step sequencer](#step-sequencer)
  - [Roll / note-repeat](#roll--note-repeat)
- [STEMS tab](#stems-tab)
- [TURNTABLE tab](#turntable-tab)
- [KEYS tab (keyboard + piano roll)](#keys-tab)
- [MIDI Learn](#midi-learn)
- [Saving your work](#saving-your-work)
- [Running as a standalone app](#running-as-a-standalone-app)

## The toolbar

- **PRESET** dropdown — pick a saved preset to load it immediately.
- **Preset name** field + **Save** — type a name and click Save to store the
  current full state (every pad's sample, DSP settings, patterns, swing) as
  a preset. Saving over an existing name overwrites it.
- **Delete** — removes whichever preset is currently selected in the dropdown.
- **Meter** (far right) — live stereo output level. Turns red when clipping.
- **PADS / STEMS / TURNTABLE / KEYS** — switch tabs. The active tab is
  highlighted in orange.

Presets are stored per-user at
`%APPDATA%/Boom Bap Producer Pads/Presets/*.bbpreset` — they're independent
of any DAW project, so they carry across projects and sessions.

## PADS tab

This is the main view: sample browser on the left, the 4x4 pad grid in the
middle, and the waveform/DSP column on the right, with the step sequencer
and performance controls along the bottom.

### Sample browser

Top-left panel.

- **Choose Folder...** — point the browser at your own sample library.
  Remembered across sessions.
- **Search** box — filters the visible tree by filename (case-insensitive
  substring match). Folders you already had open keep showing what they
  last scanned until you collapse and reopen them; newly opened folders
  always reflect the current search.
- **Double-click a file** to load it onto whichever pad is currently
  selected.
- Dragging a file *out of* this browser and onto a pad isn't supported yet
  — drag from Windows Explorer or your DAW's own browser instead (see
  below), or double-click.

### The pad grid

16 pads, laid out left-to-right/top-to-bottom (pad 1 top-left, pad 16
bottom-right). Each pad plays one sample, one-shot (it always plays from the
start of its region; triggering it again while it's still playing cuts the
previous hit and restarts — different pads never cut each other off).

- **Click an empty pad** — opens a file chooser to load a sample onto it.
- **Click a loaded pad** — selects it (highlights gold) and triggers it
  (flashes, and glows orange while the sample is still playing).
- **Drag an audio file onto any pad** — loads it directly, from Windows
  Explorer or your DAW's own sample browser if it supports OS-level
  drag-and-drop.
- **Drag a loaded pad's sample out** (past a small threshold) — exports its
  current region to a temp WAV and starts a real file drag: drop it onto
  another pad to copy the sample there, or drop it into your DAW's own
  browser/playlist to pull it out of the plugin entirely.
- **Right-click any pad** — Load Sample… / Clear.
- Supported file types: `.wav`, `.aif`/`.aiff`, `.flac`, `.ogg`, `.mp3`.

Pads also respond to MIDI: notes 36–51 (C1 upward) trigger pads 1–16 with
real velocity sensitivity from your MIDI controller/keyboard. Clicking a pad
in the UI always triggers at a fixed velocity.

### Sample editor

Top-right panel — shows the waveform of whichever pad is currently selected.

- **Trim handles** (the two vertical orange bars) — drag to set the region
  the pad actually plays. Everything outside the region is dimmed.
- **Click inside the waveform** — drops a cyan cut-point marker.
- **Chop** — splits the current region at every cut-point marker you've
  placed, and assigns the resulting slices to this pad and the pads after
  it (capped at pad 16 — slices never wrap back around).
- **Clear Cuts** — removes any pending cut-point markers without chopping.
- **Slices** slider + **Auto-Slice** — divides the current region into N
  equal pieces automatically, same underlying chop as above, without
  needing to click cut-points by hand.
- **Transients** — an alternative to Auto-Slice: instead of N equal
  pieces, slices at the N *strongest detected hits* in the region (same N
  from the Slices slider). Better for a break or phrase where the real
  hits aren't evenly spaced; falls back to doing nothing if the region
  doesn't have that many clear transients, rather than guessing.
- **Quantize** toggle — when on, placing a cut point or dragging a trim
  handle snaps to the nearest beat-grid line (shown as faint vertical
  lines once a tempo is detected) instead of the exact pixel you clicked.
  With no detected tempo, it snaps to the nearest transient instead.
- **BPM / Key** readout — automatically detected when you load a sample
  (shows `--` for either if nothing could be estimated — a one-shot hit
  with no discernible tempo, for example). **Sync** sets this pad's Speed
  so its detected BPM matches your host's current tempo, one click.
- **Freq** toggle — switches the waveform from the plain gold colour to a
  tint by frequency content (bass-heavy = red, treble-heavy = blue), so
  you can spot where the low end and the brighter transients sit at a
  glance.
- **Zoom slider** — 0 (fully zoomed out) to fully zoomed in.
- **Ctrl+scroll** on the waveform — zooms in/out anchored to wherever your
  cursor is, like a code editor. Plain scroll (no ctrl) pans left/right
  once you're zoomed in.

### DSP controls

Below the sample editor — the same per-pad chain, always following whichever
pad is selected. Every knob/toggle is a real, host-automatable parameter and
supports [MIDI Learn](#midi-learn).

- **Filter** — Cutoff (20 Hz–20 kHz) and Res(onance) (0.1–10). A resonant
  low-pass filter, reset fresh on every trigger.
- **Envelope** — Attack, Decay, Sustain, Release (0–5 seconds, Sustain is a
  0–1 level). This is position-based, not held-note-based: since pads are
  one-shot, Attack/Decay ramp in from the start of the region and Release
  ramps out over the last R seconds *before* the region's natural end.
- **Pitch** — Tune (±24 semitones), Fine (±100 cents), Speed (0.5x–2.0x).
  Speed is a simple resample-based stretch, so it changes pitch too — it's
  not true time-stretching.
- **FX** — Reverse (plays the region backward) and Bitcrush (Bits: 2–16,
  Rate Div: 1–32, a sample-rate-reduction/decimation effect for
  SP-1200/MPC60-style lo-fi grit).
- **Normalize** — scans the pad's current region and boosts it so its peak
  hits 0dBFS. **Reset** removes that boost. Non-destructive; recomputed
  automatically if you re-chop or re-trim.

### Output routing

Each pad also has its own dedicated stereo output pair, so you can send
an individual pad to its own channel in your DAW's mixer instead of the
shared master output — useful for processing the kick separately from
the rest of the kit, for example. This is off by default; enable it from
your DAW's own multi-output routing UI for this plugin instance (exactly
how varies by DAW — look for "add output" or similar on the plugin's
mixer channel). Once a pad's own output is enabled, that pad's audio
goes *only* to its own channel, not also into the main mix.

### Step sequencer

Bottom strip. Always shows and edits the **currently selected pad's**
pattern — one bar of 4/4 sixteenth notes, beat-grouped in shaded blocks of 4.

- **Click a step** to toggle it on/off.
- **Clear Pattern** wipes the selected pad's steps.
- **Swing** delays every second step slightly, for a less mechanical feel.
- **Volume** — persistent per-pad level, audible immediately even on a
  currently-playing pad (separate from the transient per-hit velocity).
- The sequencer follows your DAW's transport and tempo — press play in
  your DAW, not in the plugin. (Running the plugin standalone, without a
  DAW, is different — see [below](#running-as-a-standalone-app).)

Each pad has its own independent pattern, so you build a full beat by
selecting each pad in turn and programming its part.

### Roll / note-repeat

**Roll** toggle + rate dropdown (1/8, 1/16, 1/32), next to Clear Pattern.
Turn it on, then press and hold any loaded pad — it auto-retriggers at the
selected subdivision for as long as you hold it, free-running from your
DAW's current tempo. Release to stop. While Roll is on, dragging a pad
(the sample-export gesture above) is disabled to avoid the two gestures
colliding.

## STEMS tab

![The STEMS tab](../assets/screen-shots/02-stems-tab.png)

Splits a pad's sample into three frequency bands — **Low / Mid / High** —
using filters. This is **not** AI/ML source separation: it can't cleanly
pull an isolated vocal, drum, or bass part out of a full mix, since it only
splits by frequency, not by instrument. It's most useful for pulling apart
the tonal range of a single one-shot, not remixing a full song.

- **Split** (per pad row) — splits that pad's currently-loaded sample,
  writing three WAV files (`..._Low.wav`, `..._Mid.wav`, `..._High.wav`)
  into a `Stems` subfolder next to the original sample file.
- **Split All** — runs Split on every pad that currently has a sample
  loaded.
- After a successful split, three small chips appear per row (**Low / Mid
  / High**) — **drag any chip** straight into your DAW's playlist/browser
  to pull that band in directly, or click **Export...** to copy all three
  to a folder of your choice.
- If you load a different sample onto a pad after splitting, that row's
  chips and Export button reset — they only ever point at bands that
  actually match what's currently loaded.

## TURNTABLE tab

![The TURNTABLE tab](../assets/screen-shots/03-turntable-tab.png)

One dedicated deck, separate from the 16 pads — its own sample slot, not
tied to pad selection.

- **Load...** or **drag an audio file** onto the panel to load a sample
  onto the deck.
- **Click-drag the platter** to scratch: dragging clockwise plays forward,
  counter-clockwise reverses, and the pitch follows how fast you drag.
  Release to resume normal playback from wherever the scratch left off.
- **Play / Pause** — normal playback at the current pitch.
- **Cue** — stops and jumps back to the start.
- **Pitch** fader — 0.5x–2.0x playback speed when not scratching.
- **Volume** fader — deck output level.

## KEYS tab

![The KEYS tab — piano roll](../assets/screen-shots/04-keys-tab.png)

A vertical piano keyboard on the left plus a 16-step x pitch grid (the
piano roll) on the right, both scrolling together. This always plays and
edits whichever pad is currently selected on the PADS tab — it's not a
separate instrument, it's a melodic/chromatic way to play and sequence that
same pad's sample.

- **Click or drag along the keyboard strip** to audition the selected pad
  at different pitches. The highlighted row is MIDI note 60 (middle C) —
  that's the pad's own natural pitch (its Tune/Fine settings), with every
  row above or below shifting by a semitone (±24 semitones total, matching
  the Tune knob's own range).
- **Click an empty grid cell** to place a note at that step and pitch — it
  previews immediately and defaults to a length of 1 step.
- **Click an already-active note** (no dragging) to remove it.
- **Drag right from a note's start cell** to resize it — notes stop
  (with a short fade, not a hard click) once they reach their length,
  rather than always playing the pad's full sample. Drag right immediately
  after placing a new note to set its length in the same gesture.
- The playhead highlights the current step in sync with the regular step
  sequencer — this is the *same* pattern data, just a pitch-and-length-aware
  view of it. Anything you place here also shows as "on" in the plain PADS
  tab step row, and vice versa.
- **Export MIDI...** — saves the selected pad's pattern as a standard
  `.mid` file, so you can drag it into your DAW's own piano roll/playlist.
- **Import MIDI...** (button, or just drag a `.mid` file onto the panel) —
  loads a `.mid` file's notes onto the selected pad's pattern, replacing
  whatever was there. Reads the file's own tempo resolution, so patterns
  exported from other software should import correctly too.

## MIDI Learn

Right-click any DSP knob, toggle, the Volume slider, or the Swing slider,
and choose **MIDI Learn** — then move a control on your MIDI hardware (a
knob, fader, or similar) to bind it. Right-click the same control again and
choose **Clear MIDI Learn** to unbind it. Bindings persist with your saved
state (project/preset), same as everything else.

## Saving your work

Sample assignments, patterns (including piano-roll pitch/length), all DSP
settings, MIDI Learn bindings, and the turntable's loaded sample all save
with your DAW project — reopening the project restores everything, as long
as the original sample files haven't moved or been deleted. Presets
(Save/Load in the toolbar) capture the exact same full state as a portable,
named file independent of any project.

## Running as a standalone app

Building the project also produces `Boom Bap Producer Pads.exe` (in
`build/BoomBapProducerPads_artefacts/Release/Standalone/`) — the same
plugin, running on its own without a DAW. On first launch, use its audio
settings to pick an output device (and a MIDI input if you want to play it
from a controller).

There's no DAW transport to drive the step sequencer in standalone mode, so
a **Seq Play** toggle appears next to Roll — turn it on to make the
sequencer run, at a fixed 120 BPM. It has no effect when the plugin is
loaded inside a real DAW (the DAW's own transport is always in control
there); pads, Roll, the turntable, and the keyboard/piano-roll all trigger
normally in standalone mode regardless of this toggle.
