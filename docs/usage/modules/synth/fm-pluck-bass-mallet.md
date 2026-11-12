# FM, plucked strings, electric bass and mallets

In **SYNTH > Instrument**, choose **FM Keys**, **Plucked Strings**,
**Electric Bass**, **Upright Bass** or **Bell and Mallet**. These are original built-in modelled
voices; no samples or content downloads are needed. Play the keyboard,
MIDI channel 5, or the SYNTH part. This is one shared instrument slot.

The sound menu beside Instrument applies one of its starting sounds (three, or five for Electric Bass):

- **FM Keys:** Warm Felt Keys, Velvet Tines, Clear Reed. Four operators in
  two harmonic pairs, with a stable fundamental and a decaying bright attack.
- **Plucked Strings:** Wood Pluck, Bright Wire, Muted String. A damped
  feedback string with a plucked excitation.
- **Electric Bass:** Round Finger, Tight Pick, Deep Mute, Slap Pop, Long
  Sustain. A modelled string and body voice. It uses the SYNTH strip; it does
  not add a BASS-strip mode.
- **Upright Bass:** Jazz Pizzicato, Dub Upright, Slap Upright. A duller,
  gut-string pluck with a woody body tone; the third knob, **Thump**, sets
  how hard the finger knocks at the start of each note. Also on the SYNTH
  strip.
- **Bell and Mallet:** Glass Bell, Wood Bars, Metal Chime. Decaying modal
  tones with variable material character, rather than recorded instruments.

## Controls

**Tone** shapes brightness. **Decay** sets natural ringing time (0.1-8 seconds).
The third knob is **Blend** for the two FM pairs, **Pick** for the string/bass
excitation character, **Thump** for the upright bass, or **Material** for the mallet's partial relationships.
**Release** sets the fade chosen on note-off (0.02-2 seconds). Natural decay
continues while a note or sustain pedal is held.

Changing the starting sound clears held notes and replaces its four controls.
Edits save with the project; switching sources and returning retains each
voice's last starting-sound choice and edited settings. The menu identifies
the starting sound last applied, not a promise that edited controls still
match its original values. These choices do not use Synth sound-preset/A-B
files, and the model knobs are not new DAW automation parameters.

## Mixer, MIDI and export

The shared SYNTH strip controls volume, pan, mute/solo, sends and processing.
Master pitch applies. Velocity, per-channel sustain and a +/-2-semitone pitch
wheel are supported; panic clears held voices. Synth MPE and Synth-only
editing controls do not apply to these sources.

The **SYNTH part's WAV export** renders an independent snapshot of the selected
voice and its edited controls. Save/reopen restores all model settings.
Plugin and Standalone use the same implementation.

Voices cover MIDI 21-108 at normal settings, with up to 32 voices. Extreme
transpositions/sample rates clamp synthesis frequencies for safety; this is
not an unlimited-range tuning or alias-free guarantee. A4 is 440 Hz.

The user accepted the revised FM audition after requesting a new version;
the other three audition files were preserved unchanged. Final host/UI
acceptance for the integrated v1.529.0 sources remains pending.
