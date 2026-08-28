[&larr; Back to Usage overview](../USAGE.md)

# Saving your work

Sample assignments, patterns (including piano-roll pitch/length), all DSP
settings, MIDI Learn bindings, and the turntable's loaded sample all save
with your DAW project — reopening the project restores everything, as long
as the original sample files haven't moved or been deleted. Presets
(Save/Load in the toolbar) capture the exact same full state as a portable,
named file independent of any project — see [The
toolbar](toolbar-and-presets.md).

# Running as a standalone app

The installer's Standalone component (or a manual build's
`Boom Bap Producer Pads.exe`) is the same plugin, running on its own
without a DAW. On first launch, use its audio settings to pick an output
device (and a MIDI input if you want to play it from a controller).

There's no DAW transport to drive the step sequencer in standalone mode, so
a **Seq Play** toggle appears next to Roll — turn it on to make the
sequencer run, at a fixed 120 BPM. It has no effect when the plugin is
loaded inside a real DAW (the DAW's own transport is always in control
there); pads, Roll, the turntable, and the keyboard/piano-roll all trigger
normally in standalone mode regardless of this toggle.
