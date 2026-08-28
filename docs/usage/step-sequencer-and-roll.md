[&larr; Back to Usage overview](../USAGE.md)

# Step sequencer & Roll

## Step sequencer

SEQ tab. Always shows and edits the **currently selected pad's**
pattern — one bar of 4/4 sixteenth notes, beat-grouped in shaded blocks of 4.

- **Click a step** to toggle it on/off.
- **Scroll on a lit step** to adjust its velocity; **Shift+scroll** to
  adjust its trigger probability (shown as a % on the step once it's
  below 100 — a step at less than 100% has a chance of skipping each
  time round, for evolving/generative patterns).
- **Copy / Paste** — copy the selected pad's whole pattern (steps,
  pitch, length, velocity, probability) and paste it onto another pad.
- **Humanize** nudges the velocity of already-lit steps a little, for a
  less mechanical feel. **Randomize** regenerates which steps are on/off
  at roughly the same density as before — the two compose (Randomize
  first, then Humanize the result, or either alone). **Flip** generates
  a fresh pattern across every pad that's a slice of the same chop as
  the selected pad — a quick way to hear a chopped loop rearranged.
  Right-click a pad and choose **Favorite** to protect its pattern from
  both Randomize and Flip — a favorited pad (shown with a small gold
  star) keeps its pattern exactly while everything else changes around
  it, so you can lock in a part you like and keep regenerating the rest.
- **Export SFZ...** exports the current kit (every loaded pad's trimmed
  sample + volume/pan/ADSR/reverse) as an SFZ instrument you can load in
  any SFZ-compatible sampler outside this plugin.
- **Clear Pattern** wipes the selected pad's steps.
- **Swing** delays every second step slightly, for a less mechanical feel.
- **Volume** — persistent per-pad level, audible immediately even on a
  currently-playing pad (separate from the transient per-hit velocity).
- **Pad Quantize** (toolbar) — a *live-triggered* hit (real MIDI or a
  click) waits for the next beat instead of firing instantly; sequencer
  steps are unaffected, they're already on the grid. See [The
  toolbar](toolbar-and-presets.md).
- The sequencer follows your DAW's transport and tempo — press play in
  your DAW, not in the plugin. (Running the plugin standalone, without a
  DAW, is different — see [Saving your work & running
  standalone](saving-and-standalone.md).)

Each pad has its own independent pattern, so you build a full beat by
selecting each pad in turn and programming its part.

**Bank A / B / C / D** buttons switch between 4 complete kits — see [The
pad grid & sample browser](pad-grid-and-browser.md) for what a bank
switch carries with it.

## Roll / note-repeat

**Roll** toggle + rate dropdown (1/8, 1/16, 1/32), next to Clear Pattern.
Turn it on, then press and hold any loaded pad — it auto-retriggers at the
selected subdivision for as long as you hold it, free-running from your
DAW's current tempo. Release to stop. While Roll is on, dragging a pad
(the sample-export gesture on the [pad grid](pad-grid-and-browser.md)) is
disabled to avoid the two gestures colliding.
