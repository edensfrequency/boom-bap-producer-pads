[&larr; Back to Usage overview](../../../USAGE.md) | [All feature guides](../README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# DSP controls & output routing

**In one line:** the knobs that shape how the selected pad sounds, and how to send a pad to its own channel in your DAW.

## What this part of the plugin is for

"DSP" just means sound processing. Below the sample editor on the PADS tab
is a row of controls that always follow the selected pad. They include a
filter (make it darker or brighter), an envelope (how the sound fades in and
out), pitch and speed, and effects like reverse and lo-fi bitcrush. Every
knob on this Sound page can be automated in your DAW or controlled from a
MIDI knob. A second page, Mod, makes the sound move (a wobble on pitch,
filter, volume or pan; a pitch "thump" on each hit) and respond to how hard
you play.

## What's in this folder

| File | What you'll learn |
|---|---|
| [dsp-controls.md](dsp-controls.md) | Filter (Low-Pass, High-Pass, Band-Pass, Notch), envelope (A/D/S/R), Tune/Fine/Speed, Time-Stretch (change speed without changing pitch), Key Snap, Reverse, Bitcrush, Loop, Play To End, Normalize, the fader-style "Mixer Strips" view, the [Mod page](dsp-controls.md#the-mod-page) (LFO, pitch envelope, velocity response, ping-pong and crossfaded loops, and Voices: how many hits of a pad ring at once), and [output routing](dsp-controls.md#output-routing) (giving pads 1-16 their own outputs in your DAW) |

## Questions this answers

- *How do I speed a sample up without it going chipmunk?* Turn on Time-Stretch, then change Speed.
- *Why does my pad sound muffled?* Check the filter Cutoff; fully open is 20 kHz.
- *How do I process the kick on its own in my DAW?* Enable that pad's own output in your DAW's routing. See Output routing in the guide.
- *My sample is too quiet.* Use Normalize.
- *How do I add vibrato or a filter wobble?* On the Mod page, set the LFO to Pitch or Filter.
- *How do I make soft hits sound softer, not just quieter?* On the Mod page, turn up Velocity > Filter.
- *My loop clicks every time it goes round.* On the Mod page, turn up Loop > X-Fade.
- *My crash cymbal cuts itself off when I hit it again.* On the Mod page, set Voices to 2 or more.

## Related guides

- [MIDI Learn](../midi/README.md): control any of these knobs from hardware
- [MIXER tab](../mixer/README.md): the same volume/pan plus insert effects, for every pad side by side
- [Pad grid](../pads/README.md): insert effects are added from a pad's right-click menu
