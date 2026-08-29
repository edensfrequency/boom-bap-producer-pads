[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>


# KEYS tab

![The KEYS tab — piano roll](../../../../assets/screen-shots/04-keys-tab.png)

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
  view of it. Anything you place here also shows as "on" in the plain
  [step sequencer](../step-sequencer/step-sequencer-and-roll.md), and vice versa.
- **Export MIDI...** — saves the selected pad's pattern as a standard
  `.mid` file, so you can drag it into your DAW's own piano roll/playlist.
- **Import MIDI...** (button, or just drag a `.mid` file onto the panel) —
  loads a `.mid` file's notes onto the selected pad's pattern, replacing
  whatever was there. Reads the file's own tempo resolution, so patterns
  exported from other software should import correctly too.
