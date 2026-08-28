[&larr; Back to Usage overview](../USAGE.md)

# DSP controls & output routing

Below the sample editor on the PADS tab — the same per-pad chain, always
following whichever pad is selected. Every knob/toggle is a real,
host-automatable parameter and supports [MIDI Learn](midi-learn.md).
Scrolling over any knob nudges its value by a small, precise step.

**Mixer Strips** (top of the panel) switches every knob in this section to
a vertical fader instead — same controls, same values, same MIDI Learn
bindings, just a different shape (bottom-to-top strips instead of dials),
if that's a layout you find quicker to read or automate by ear. **Expand**
grows this panel by temporarily shrinking the sample editor above it, for
more room to work the strips precisely. Both are purely visual — nothing
about the sound or the underlying parameters changes.

- **Filter** — Cutoff (20 Hz–20 kHz) and Res(onance) (0.1–10). A resonant
  low-pass filter, reset fresh on every trigger.
- **Envelope** — Attack, Decay, Sustain, Release (0–5 seconds, Sustain is a
  0–1 level). This is position-based, not held-note-based: since pads are
  one-shot, Attack/Decay ramp in from the start of the region and Release
  ramps out over the last R seconds *before* the region's natural end.
- **Pitch** — Tune (±24 semitones), Fine (±100 cents), Speed (0.5x–2.0x).
  By default Speed is a simple resample-based stretch, so it changes
  pitch too — turn on **Time-Stretch** (in the FX row) to decouple them:
  Speed then changes duration only, while Tune/Fine keep controlling
  pitch on their own. Time-Stretch runs in the background and takes a
  moment to catch up after you change Speed or first turn it on —
  playback keeps working normally with the old behavior in the meantime.
  **Key Snap** (in the FX row) rounds Tune to notes that are actually in
  the pad's detected key instead of any raw semitone — needs a key to
  have been detected first (see the BPM/Key readout in the [sample
  editor](sample-editor.md)).
- **FX** — Reverse (plays the region backward), Bitcrush (Bits: 2–16,
  Rate Div: 1–32, a sample-rate-reduction/decimation effect for lo-fi
  grit), Time-Stretch and Key Snap (see Pitch above), **Loop** (repeats
  the region instead of stopping — best used with a held MIDI note or the
  on-screen keyboard, since releasing the note is what stops it), and
  **Play To End** (ignores note-off, always plays the full region
  regardless of how short the trigger was).
- **Normalize** — scans the pad's current region and boosts it so its peak
  hits 0dBFS. **Reset** removes that boost. Non-destructive; recomputed
  automatically if you re-chop or re-trim.

## Output routing

Each pad also has its own dedicated stereo output pair, so you can send
an individual pad to its own channel in your DAW's mixer instead of the
shared master output — useful for processing the kick separately from
the rest of the kit, for example. This is off by default; enable it from
your DAW's own multi-output routing UI for this plugin instance (exactly
how varies by DAW — look for "add output" or similar on the plugin's
mixer channel). Once a pad's own output is enabled, that pad's audio
goes *only* to its own channel, not also into the main mix.
