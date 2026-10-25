[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# Playing from a MIDI keyboard or your DAW

Plug in a MIDI keyboard or pad controller, or play the plugin from your
DAW's piano roll, and it plays like any other instrument. The keys you hold
light up on the plugin's own keyboard, and the pads flash when they're hit.

## MIDI in: what your notes play

**MIDI in**, at the right above the plugin's keyboard (on every tab), picks
what your notes play:

| MIDI in | What happens |
|---|---|
| **Everything** | Each part listens on its own channel, as before: channel 1 the pads (from note 36), 4 the bass, 5 the synth. Use it when your DAW sends each part on its own channel. |
| **Pads** | Every note, on any channel, plays a pad. The keys go round the bank: pad 1, 2, 3... then pad 1 again, so every key does something. |
| **Synth** | Every note plays the SYNTH tab's instrument, with pitch bend, the mod wheel and sustain. |
| **Bass** | Every note plays the BASS tab's sound. |
| **Decks** | The 16 keys from C3 are hot cues: the first 8 deck 1's cues 1-8, the next 8 deck 2's. A cue not set yet is set where the deck is. |
| **Discover** | Any key plays the sound last auditioned in DISCOVER (or the sound browser). |

It's saved with your project, so a song in your DAW keeps its choice.

## In the Standalone

A keyboard or pad controller is switched on by itself the first time it's
plugged in -- no settings to dig through. To switch one off, use
**Controller** in the toolbar; it stays off after that.

## In FL Studio, Ableton Live and other DAWs

Put the plugin on a track and arm it (or select it) as you would any
instrument: your keyboard's notes reach it through the DAW. Set **MIDI in**
to the part you want to play -- **Synth** for the synth, **Bass** for the
bass -- and record into the DAW's piano roll as usual.

## Good to know

- Knobs and faders linked with **MIDI Learn**, and a DJ controller taught
  with **Controller**, keep working in every MIDI in setting.
- A pad set to its own MIDI channel (the pad's settings) answers only there
  with **Everything**; **Pads** sends every note on channel 1.

## Related guides

- [MIDI Learn](midi-learn.md): link knobs on your controller to the plugin's
- [Using a DJ controller](dj-controller.md)
