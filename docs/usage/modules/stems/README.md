[&larr; Back to Usage overview](../../../USAGE.md) | [All feature guides](../README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# STEMS tab: splitting a sound into parts

**In one line:** split a pad's sound into its low, mid and high ranges, or its sustained and percussive parts.

## What this part of the plugin is for

"Stems" are the separate parts of a sound. This tab splits a pad's sample in
two ways. The first is by pitch range: the bass end, the middle, and the top.
The second is into its *harmonic* part (sustained, tonal notes) and its
*percussive* part (hits and clicks). It's classic filtering, **not** AI: it
can't pull a clean vocal out of a finished song, but it's great for taking
apart a single sound. Every piece can be dragged into your DAW, exported to a
folder, or sent to an empty pad.

## What's in this folder

| File | What you'll learn |
|---|---|
| [stems-tab.md](stems-tab.md) | Split and Split All (Low/Mid/High), Split H/P (Harmonic/Percussive), dragging the result chips into your DAW, Export, "Send to next empty pad", WAV vs AIFF, and [pre-mix levels & live preview](stems-tab.md#pre-mix-levels--live-preview) |

## Questions this answers

- *Can this isolate the vocal from a song?* No. It splits by frequency and character, not by instrument.
- *How do I get just the bass of a sample onto its own pad?* Split, then right-click the **Low** chip and choose "Send to next empty pad".
- *Where do the files go?* Into a `Stems` folder next to the original sample, or wherever you choose with Export.
- *Can I balance the parts before exporting?* Yes: set each stem's level (solo or mute some, too) and press Play to listen.

## Related guides

- [Pad grid](../pads/README.md): where split parts can be sent
- [MIXER tab](../mixer/README.md): for balancing whole pads rather than parts of one
