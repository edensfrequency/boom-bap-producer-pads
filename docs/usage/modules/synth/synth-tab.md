[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# SYNTH tab

A synthesiser, played like an instrument. The tab is an **instrument slot**:
the **Instrument** menu at the top holds the Synth now, and more instruments
will join it there.

## Playing it

- **The keyboard at the bottom** plays the synth while the SYNTH tab is
  open (its Mode switches to **Synth**, and back when you leave the tab).
  You can also pick **Synth** in that Mode menu on any tab.
- **MIDI channel 5** plays it from your DAW, a controller or a MIDI
  keyboard: notes, pitch bend, the mod wheel and the sustain pedal. Nothing
  else in the plugin listens to channel 5.
- **Voices playing** (top) shows how many notes are sounding.

## Presets

Pick one from the **Preset** menu, or step through with **<** and **>**:
Init, then A to Z: 808, Acid, Arp Bells, Bell, Brass, Choir Pad, Chord Stab, Distorted 808, Dusty Rhodes, Fat Bass, G-Funk Whine, Lo-Fi Keys, Music Box, Organ, Pluck, Pluck Bass, Reese, Saw Lead, Soft Pad, Soul Stab, Square Lead, String Machine, Strings, Sub Bass, Sweep Pad, Warm Keys, Wavetable Sweep, Whistle Lead, Wobble Bass.
**Save...** keeps your sound as a preset file (in Documents / Boom Bap
Producer Pads / Synth Presets) and it joins the menu under the built-in
ones; **Load...** opens one from anywhere. You can also drop a `.bbsynth`
file on the tab. Your project saves the synth's whole sound either way.

Double-click any knob to put it back to where Init has it.

## The sections

- **OSC 1, OSC 2, OSC 3**: each has a **Wave** (Sine, Triangle, Saw, Pulse,
  Noise, Wavetable), a **Level** (0 = off), **Octave**, **Semi** and
  **Fine** (cents). **Shape** is the pulse width for Pulse and the position
  in the table for Wavetable.
- **Wavetables**: with Wave set to Wavetable, the built-in table sweeps
  sine to triangle to saw to square as you turn Shape. Click **Table...**
  (or drop an audio file on the oscillator) to make one from any sound: its
  first few seconds are cut into single cycles, and Shape moves through
  them. Try a vocal, a drum loop or a chord -- each gives its own colour.
- **STACK**: **Voices** stacks up to 7 copies of each oscillator,
  **Detune** spreads their pitch (cents) and **Width** spreads them across
  left and right -- for thick leads and wide pads. **Sub** adds a sine an
  octave under OSC 1. **FM 2>1** lets OSC 2 bend OSC 1's wave for bells and
  metallic tones.
- **FILTER**: **Type** (low-pass 12 or 24 dB, high-pass 12 or 24, band,
  notch), **Cutoff**, **Reso**, **Drive** (grit before the filter), **Key**
  (higher notes open the filter more) and **Env** (how far the filter
  envelope moves the cutoff, up or down).
- **FILTER ENV, AMP ENV, MOD ENV**: attack, decay, sustain, release. The
  amp envelope shapes the volume, the filter envelope the cutoff, and the
  mod envelope whatever the mod matrix sends it to.
- **LFO 1, LFO 2**: a **Shape** (sine, triangle, saw, square, random) at a
  **Rate**; **Restart** starts it from the top on every note.
- **MOD MATRIX**: four rows of *source*, *where it goes* and *how much*
  (drag left for the other way). Sources: the LFOs, the mod envelope,
  velocity, the mod wheel, a random value per note, the key. Destinations:
  pitch, each oscillator's level and shape, cutoff, resonance, FM, volume,
  pan. Example: LFO 1 to Pitch at a small amount is vibrato; Mod Env to
  Pitch with a short decay is an 808's punch.
- **PLAY**: **Mode** Poly (chords), Mono (one note, restarts the
  envelopes) or Legato (one note, glides without restarting); **Glide**
  time; **Bend** range in semitones; **Velocity** (how much playing harder
  makes it louder); **Voices** (the most notes at once).
- **ARP** (the arpeggiator): switch it **On** and held notes play one at a
  time, in time with the song -- **Mode** Up, Down, Up-Down, Random or As
  played; **Rate** 1/4 to 1/32 or triplets; **Octaves** 1-4 (the pattern
  climbs through them); **Gate** (short and plucky to smooth). When the
  song is stopped it keeps time at the tempo.
- **CHORD**: every note you play becomes a chord -- Major, Minor, 7th,
  Minor 7th, Major 7th, Sus2, Sus4, Power, Octave. With the ARP on too,
  the chord's notes are what it arpeggiates.
- **INSERT 1-3**: effects in order, the same ones the pads have (chorus,
  flanger, phaser, reverb, delay, saturation and more) with their own knobs
  and a **Mix**.
- **OUTPUT**: **Volume** and **Pan** (the same as the synth's mixer strip).

## In the mixer

The MIXER tab has a **Synth** strip after the Bass: volume, pan, mute,
solo and its meter.
