[&larr; Back to Usage overview](../../../USAGE.md) | [All feature guides](../README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# Sample editor

**In one line:** see a pad's sound as a waveform, and decide exactly which part of it plays.

## What this part of the plugin is for

The sample editor sits at the top right of the PADS tab and always shows
whichever pad you've selected. Use it to cut a long sample down to the bit
you want (trimming), or to slice it into several pieces that land on
several pads at once (chopping). It can do the slicing for you: into equal
parts, or at the strongest hits it can find. It also shows the sample's
tempo (BPM) and musical key when it can detect them.

## What's in this folder

| File | What you'll learn |
|---|---|
| [sample-editor.md](sample-editor.md) | Trim handles, placing cut points, Chop, [Slice](sample-editor.md#slice) (Equal, Transients, Beat grid, Find chops, Random, and slices to MIDI), snapping to the beat grid, Trim Silence, the BPM/Key readout and Sync, the frequency-colour view, and zooming |

## Questions this answers

- *How do I use just part of a sample?* Drag the two orange trim handles.
- *How do I turn a drum break into separate hits?* Pick **Transients** in the Slice row and press **Slice** (or place cut points yourself and press Chop). The pieces fill this pad and the pads after it.
- *How do I get the best bits out of a loop?* **Find chops**: it picks strong phrase starts on the beat and makes a chop from each.
- *Can I get the loop back as a pattern?* Yes: **MIDI** saves the slices as a MIDI file that replays them in order.
- *My sample has silence at the start.* Use Trim Silence.
- *How do I match a loop to my song's tempo?* Use Sync next to the BPM readout.

## Related guides

- [Pad grid](../pads/README.md): where the chopped pieces end up
- [Turntable → Deck Chop](../turntable/README.md): chopping a whole record live, by ear, while it plays
- [DSP controls](../dsp-controls/README.md): Normalize, Time-Stretch and pitch for the trimmed sound
