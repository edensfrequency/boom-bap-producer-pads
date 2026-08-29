[&larr; Back to Usage overview](../USAGE.md)

# The toolbar

- **PRESET** dropdown — pick a saved preset to load it immediately.
- **Preset name** field + **Save** — type a name and click Save to store the
  current full kit as a preset: every pad's sample, all its DSP settings
  (filter, envelope, pitch, bitcrush, mute/solo, choke group, color, rename),
  all 4 banks (samples and patterns together, see [Step
  sequencer](step-sequencer-and-roll.md)), swing, and the turntable's own
  settings. Saving over an existing name overwrites it.
- **Delete** — removes whichever preset is currently selected in the dropdown.
- **Undo / Redo** — steps back (and forward) through Chop, Clear Pattern,
  Clear Pad, and Trim Silence — up to 20 levels. Ctrl+Z / Ctrl+Y
  (Ctrl+Shift+Z also works for Redo) work from any tab.
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
- **Master FX** — opens a small popup with 3 effect slots applied to
  your final mix, regardless of which tab is showing. Pick an effect
  type per slot. Reverb, Delay, and Saturation slots also show real
  knobs (Size/Damping/Mix, Time/Feedback/Mix, or Drive) — adjustable,
  automatable, and MIDI-learnable like any other knob in the plugin.
- **Smaller / Mid / Full Screen** (top banner, near the logo) — one-click
  window sizing. Full Screen fits your actual display, whatever size that
  is. The window is also still freely resizable by dragging any edge or
  corner, and always keeps its proportions while you do.
- **Meter** (far right) — live stereo output level. Turns red when clipping.
- **PADS / STEMS / TURNTABLE / KEYS / DISCOVER** — switch tabs. The active
  tab is highlighted in orange.

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
