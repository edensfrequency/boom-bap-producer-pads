[&larr; Back to Usage overview](../USAGE.md)

# BASS tab

One dedicated bass voice, separate from the 16-pad grid — its own
sample, its own envelope, and its own 16-step pattern. A bass line no
longer has to live on a pad and compete for a grid slot.

- **Load...** (or drag a file onto the tab) — loads a sample onto the
  bass voice. Detected BPM/key show next to the file name once it's
  analyzed.
- **Volume / Pan** — output level and stereo position.
- **Cutoff / Res** — a low-pass filter, same shape as a pad's own
  filter.
- **Attack / Decay / Sustain / Release** — the voice's envelope.
- **Tune / Fine** — coarse (semitones) and fine (cents) pitch offset.
- **Glide** — how long a slide takes, in milliseconds. 0 = no slide
  (notes snap to pitch instantly). This is what the per-step **Glide**
  toggle (below) actually uses.
- **Loop** — hold the sample and repeat it for as long as a step's
  length allows, instead of playing once and stopping.

**The 16-step lane** works like the main step sequencer: click a step to
turn it on (it plays immediately so you can hear it), scroll over a lit
step to adjust its velocity, Shift+scroll to adjust its pitch. The row
of small **G** buttons underneath each step is the per-step **Glide**
flag — turn it on and that step slides smoothly into its note from
whatever the voice was playing before, instead of retriggering the
envelope. A gold outline shows which step is currently playing while the
transport runs.

This is an early cut: reordering/resizing steps by dragging is coming in
a follow-up update.
