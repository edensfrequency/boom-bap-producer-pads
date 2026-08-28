[&larr; Back to Usage overview](../USAGE.md)

# The pad grid & sample browser

This is the main PADS view: sample browser on the left, the 4x4 pad grid in
the middle, and the waveform/DSP column on the right, with the step
sequencer and performance controls along the bottom.

## Sample browser

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

## The pad grid

16 pads. By default they're laid out bottom-left to top-right (pad 1
bottom-left, pad 16 top-right), matching how many hardware pad
controllers number their physical pads — so the pad you see selected is
the pad you actually hit. Click **Hardware Layout** in the toolbar to
switch back to plain top-left-to-bottom-right reading order.
Either way, the underlying MIDI note mapping is unchanged (notes 36–51
always trigger pads 1–16 in the same order) — this only affects which
grid cell each pad's box is drawn in.

Each pad plays one sample, one-shot (it always plays from the
start of its region; triggering it again while it's still playing cuts the
previous hit and restarts — different pads never cut each other off,
unless **Mono** mode is on — see [The toolbar](toolbar-and-presets.md)).

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
- **Right-click any pad** — Load Sample… / Clear / Rename…, plus Choke
  Group, Color, and **Insert FX** submenus. Insert FX adds Chorus,
  Flanger, Phaser, Transient Designer, Harmonic Exciter, or Stereo
  Doubler to that pad's sound ("None" is the default — sounds exactly
  like it always did).
- **Key Shift Pad** (right-click menu, on a loaded pad) — spreads that
  pad's sample across your other empty pads, each one a semitone higher
  than the last. Turns one chop into a playable chromatic instrument
  across the grid, without needing the KEYS tab.
- **Favorite** (right-click menu) — protects this pad's step pattern from
  Randomize and Flip the Sample (see [Step
  sequencer](step-sequencer-and-roll.md)) — shown with a small gold star.
- Supported file types: `.wav`, `.aif`/`.aiff`, `.flac`, `.ogg`, `.mp3`.

Pads also respond to MIDI: notes 36–51 (C1 upward) trigger pads 1–16 with
real velocity sensitivity from your MIDI controller/keyboard. Clicking a pad
in the UI always triggers at a fixed velocity.

**Bank A / B / C / D** buttons (in the step sequencer row) switch between 4
complete kits — 4 banks x 16 pads = 64 addressable pad slots in total.
Switching banks swaps *everything*: every pad's sample, every DSP setting,
and every pattern, all together, so each bank is a genuinely separate kit
rather than just an alternate pattern for the same 16 samples. A bank
switch is bar-quantized — it takes effect at the start of the next bar,
not the instant you click, so it never chops a pattern off mid-phrase.
