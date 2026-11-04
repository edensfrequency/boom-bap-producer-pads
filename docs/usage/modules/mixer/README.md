[&larr; Back to Usage overview](../../../USAGE.md) | [All feature guides](../README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# MIXER tab: every sound side by side

**In one line:** a mixing desk with a channel for every pad, the bass, the synth, both decks and the loops, plus buses and the master output.

## What this part of the plugin is for

The MIXER tab lays out everything that makes sound as a row of vertical
channel strips, like a real mixing desk. Each strip has a volume fader, pan,
mute (M), solo (S) and a level meter. Pad strips also carry that pad's effects
slots, a send to a shared reverb, and "ducking" (other sounds briefly get
quieter when this one plays, the classic pumping effect). The **Master**
strip on the left controls the final output and its effects rack. Nothing
here is new sound; it's the same settings as the other tabs, laid out so you
can balance the whole beat at a glance.

## What's in this folder

| File | What you'll learn |
|---|---|
| [mixer-tab.md](mixer-tab.md) | The signal flow (source → insert effects → master rack → output), what every strip has, the extra pad-only controls (inserts, reverb send, ducking), the [Master strip](mixer-tab.md#master-strip), and the bass, synth, turntable and LOOPS strips |

## Questions this answers

- *Why is everything silent except one pad?* Something is soloed. The banner above the strips says so.
- *How do I add reverb to several pads without loading many reverbs?* Use each pad's reverb send.
- *How do I make the beat pump with the kick?* Mark the kick as a duck source (**D**), then give other pads a duck amount.
- *Where are the master effects?* Use the Master strip's **FX** button (also in the toolbar as **Master FX**).
- *How do I turn all the tape loops down at once?* The **LOOPS** strip, the last one on the right.

## Related guides

- [DSP controls](../dsp-controls/README.md): the per-pad sound shaping these strips sit on top of
- [Toolbar](../toolbar/README.md): Master FX and the safety Limiter
