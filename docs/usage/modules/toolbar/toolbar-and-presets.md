[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>


# The toolbar

Two rows below the banner. Row 1 holds the preset bar, the **< Back**
button, and the tab buttons; row 2 holds transport, pattern-editing tools,
and everything that used to spill off a single-row toolbar as the plugin
grew. Both rows are visible on every tab.

## Row 1 — presets, back, tabs

- **PRESET** dropdown — pick a saved preset to load it immediately.
- **Preset name** field + **Save** — type a name and click Save to store the
  current full kit as a preset: every pad's sample, all its DSP settings
  (filter, envelope, pitch, bitcrush, mute/solo, choke group, color, rename),
  all 4 banks (samples and patterns together, see [Step
  sequencer](../step-sequencer/step-sequencer-and-roll.md)), swing, and the turntable's own
  settings. Saving over an existing name overwrites it.
- **Delete** — removes whichever preset is currently selected in the dropdown.
- **< Back** — returns to whichever tab you were on before your last few
  tab switches, walking further back each time you click it again (it
  doesn't create a new "forward" entry of its own, so it can't bounce you
  between the same two tabs).
- **PADS / STEMS / TURNTABLE / KEYS / SEQ / DISCOVER / ARRANGE / BASS /
  MIXER** — switch tabs. The active tab is highlighted in orange.
- **Meter** (far right) — live stereo output level. Turns red when clipping.

## Row 2 — transport, editing, tools

- **Play/Stop/REC** — the global transport button. Inside a real DAW this
  just reflects the host's own play/record state (a plugin generally can't
  command its host's transport) — the button text and colour follow along
  but clicking it has no effect there. Running standalone, it's a genuine
  Play/Stop for the whole plugin.
- **Record** — arms recording (the same armed state the PADS tab's own
  Record toggle shows); right-click for MIDI Learn like most toggles here.
- **Loop** — toggles looped playback of whatever's currently previewing
  (the KEYS tab's pattern preview, for example) — not a host parameter,
  just a plain preference.
- **Pad Quantize** — when on, hitting a pad live (MIDI or a click) waits
  for the next beat instead of firing right away. Handy for performing
  along with the sequencer without your hits drifting off the grid.
  Sequencer steps aren't affected — they're already on the grid.
- **Mono** — when on, triggering any pad stops every other currently-sounding
  pad, kit-wide. Different from a pad's own Choke Group (right-click a pad
  to set one): Choke Group only cuts other pads sharing the same numbered
  group, Mono affects every pad at once with no grouping needed. A real
  parameter, so it's automatable and MIDI-learnable like anything else. Off
  by default.
- **Limiter** — a brick-wall limiter on the final master output, to catch
  accidental clipping when several pads/the bass/the turntable all peak at
  once. Off by default.
- **Arrangement Mode** — turns on the [ARRANGEMENT tab](../arrangement/arrangement-tab.md)'s
  section timeline; while it's on, the SEQ tab's own bank buttons are
  disabled since the timeline drives bank switches instead.
- **Undo / Redo** — steps back (and forward) through Chop, Clear Pattern,
  Clear Pad, and Trim Silence — up to 20 levels. Ctrl+Z / Ctrl+Y
  (Ctrl+Shift+Z also works for Redo) work from any tab. **History** opens a
  popup listing every step in the undo/redo stack by name, so you can see
  what you're about to step through instead of guessing.
- **Tap** — tap along to set the standalone tempo (standalone only; hidden
  inside a real DAW, where the host's own tempo already applies). The **BPM**
  field next to it does the same job by direct entry — type a number or
  drag it.
- **Click** — a metronome, standalone only, same visibility rule as Tap/BPM
  above (a real DAW already has its own click).
- **Master FX** — opens a small popup with 3 effect slots applied to
  your final mix, regardless of which tab is showing. Pick an effect
  type per slot. Reverb, Delay, Saturation, and Formant Shift slots also
  show real knobs (Size/Damping/Mix, Time/Feedback/Mix, Drive, or Shift)
  — adjustable, automatable, and MIDI-learnable like any other knob in
  the plugin. The same popup is also reachable from the [MIXER
  tab](../mixer/mixer-tab.md)'s Master strip, via its own **FX** button.
- **MIDI Map** — opens a popup listing every active MIDI Learn CC mapping
  in the plugin in one place, so you can review or clear a binding without
  hunting down the control it's attached to. See [MIDI Learn](../midi/midi-learn.md).
- **Panic** — immediately silences every playing pad and the bass voice.
  For a stuck note during live use, not something you'd need routinely.
- **MIDI Out** — on by default. While on, the pattern actually playing on
  the PADS grid and the BASS lane is also sent out as real, sample-accurate
  MIDI note-on/off (not just triggering this plugin's own audio) — useful
  if you want to capture what the plugin is generating as an editable MIDI
  clip. Getting it to actually land in your DAW's own piano roll generally
  needs a virtual MIDI cable (e.g. loopMIDI or MIDI Yoke): route this
  plugin's MIDI output to the virtual port, then set that same port as a
  MIDI input in your DAW and record it — that one-time setup happens in
  your DAW/OS, not in this plugin. If you just want a one-off pattern as a
  file instead, the [SEQ](../step-sequencer/step-sequencer-and-roll.md) and
  [KEYS](../keys/keys-tab.md) tabs both have their own MIDI export/drag
  options that don't need any of this.
- **CPU / voice count** (far right) — a live readout of processor load and
  how many voices are currently sounding.

## Banner strip (top, next to the logo)

- **Smaller / Mid / Full Screen** — one-click window sizing. Full Screen
  fits your actual display, whatever size that is. The window is also
  still freely resizable by dragging any edge or corner, and always keeps
  its proportions while you do.
- A small readout next to the size buttons shows **Bank X** at all times,
  and — while Arrangement Mode is on — the current section's name and its
  position in the timeline (e.g. "Bank A - Chorus (2/5)"), so you always
  know where you are without switching to the ARRANGEMENT tab to check.

Scrolling over any knob (DSP panel, Turntable, or this toolbar's own BPM/
Swing/Volume/Pan sliders) nudges its value by a small, precise step — handy
for fine adjustments without needing to drag.

Presets are stored per-user at
`%APPDATA%/Boom Bap Producer Pads/Presets/*.bbpreset` — they're independent
of any DAW project, so they carry across projects and sessions. Saving a
preset also copies every sample it uses (across all 4 banks) into a
`<preset name>_data/` folder alongside it, so the preset keeps working
even if you later delete or move the original sample files — a common
workflow once a one-shot from a "used samples" folder has done its job.

DAW project saves (not named presets) still reference your samples by
their original file path, same as always.
