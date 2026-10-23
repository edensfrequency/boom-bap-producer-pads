[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>


# DSP controls & output routing

Below the sample editor on the PADS tab — the same per-pad chain, always
following whichever pad is selected. Every knob/toggle on the Sound page is
a real, host-automatable parameter and supports [MIDI Learn](../midi/midi-learn.md).
Scrolling over any knob nudges its value by a small, precise step.

![The pad's sound controls](../../../../assets/screen-shots/pad-controls.png)

```mermaid
flowchart LR
    T["Pad triggers"] --> F["Filter\n(type / Cutoff / Res)"] --> E["Envelope\n(A/D/S/R)"] --> P["Pitch\n(Tune / Fine / Speed)"] --> X["FX\n(Reverse, Bitcrush,\nTime-Stretch, Loop, ...)"] --> O["Pad output\n(-> Duck -> Insert FX -> Master\nor a bus, see the MIXER tab)"]
```

The buttons along the top of the panel pick what it shows: **Sound** (the
controls below), **Mod** (the [Mod page](#the-mod-page): LFO, pitch
envelope, velocity response, loop shaping and Voices) or **Grain** (the
[Grain page](#the-grain-page): granular mode). When a pad is in granular
mode its button reads **Grain \***, so you can tell from any page.

**Faders** (top of the panel) switches every knob on the Sound page to
a vertical fader instead — same controls, same values, same MIDI Learn
bindings, just a different shape (bottom-to-top strips instead of dials),
if that's a layout you find quicker to read or automate by ear. **Expand**
grows this panel by temporarily shrinking the sample editor above it, for
more room to work the strips precisely. Both are purely visual — nothing
about the sound or the underlying parameters changes.

- **Filter** — a type picker, Cutoff (20 Hz–20 kHz) and Res(onance)
  (0.1–10), reset fresh on every trigger. The types:
  - **Low-Pass** (the default) keeps the lows and removes the highs: turn
    Cutoff down to make a sound darker or more muffled.
  - **High-Pass** removes the lows: thin out a sample so it sits above
    the kick and bass.
  - **Band-Pass** keeps a band around Cutoff: the "telephone" or "radio"
    sound. Res makes the band narrower.
  - **Notch** removes a narrow band around Cutoff and keeps the rest.
  - **Low-Pass 24**, **High-Pass 24** and **Band-Pass 24** do the same as
    their plain versions, twice as steeply -- a cleaner cut.
  - **Comb** rings at Cutoff's note and its harmonics; Res sets how much.
  - **Ladder** is a warm 24 dB low-pass that sings when you turn Res up;
    **Diode** is its squelchier, 18 dB cousin. **Vowel** makes the sound
    talk: sweep Cutoff from bottom to top for "a", "e", "i", "o", "u";
    Res sharpens it. They're the SYNTH's own filters.

  Switching away from Low-Pass while Cutoff is fully open (20 kHz) moves
  Cutoff somewhere audible for you (200 Hz for High-Pass, 1 kHz for the
  others), since a fully open high-pass would be silent.
- **Hold** and **Curve** (in the envelope row) — Hold keeps the sound at
  full level for a while after the attack (up to 2 seconds) before the
  decay starts. Curve bends every stage of the envelope: 0 is straight
  lines (as it always was); turn it up and each stage moves fast, then
  settles -- snappy and punchy; turn it down and each starts slow.
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
  The menu beside Time-Stretch picks **how** it stretches:

  | Stretch mode | What it sounds like |
  |---|---|
  | **Clean** | Smooth joins -- the stretch tries not to be heard. |
  | **Tight** | Old samplers' stretch: short slices repeated or skipped, joined as they fall. A light warble; drums stay punchy. |
  | **Loose** | Longer slices: an audible stutter and wobble, good on chords and loops. |
  | **Buzz** | Very short slices: a robotic buzz on voices and sustained notes -- the classic jungle stretch. Push Speed further for more. |
  | **Tonal** | Long, smooth slices: held notes and chords stay steady. |
  | **Texture** | Tiny blurred grains: a soft smear for pads, drones and noise beds (not drums). |

  Tight, Loose and Buzz are the vintage modes; picking one turns
  Time-Stretch on. They leave
  the pitch where it was to within a few hertz (that small drift is the
  warble). Time-Stretch and its mode are kept with the project, the pad's
  bank and a saved kit.
  **Key Snap** (in the FX row) rounds Tune to notes that are actually in
  the project's key (KEYS > Key and Scale) -- or, with the scale on None,
  the pad's detected key -- instead of any raw semitone; the pad's detected
  key needs to have been detected first (see the BPM/Key readout in the [sample
  editor](../sample-editor/sample-editor.md)).
- **FX** — Reverse (plays the region backward), Bitcrush (Bits: 2–16,
  Rate Div: 1–32, a sample-rate-reduction/decimation effect for lo-fi
  grit -- see **Crush modes** below), Time-Stretch and Key Snap (see Pitch above), **Loop** (repeats
  the region instead of stopping — best used with a held MIDI note or the
  on-screen keyboard, since releasing the note is what stops it), and
  **Play To End** (ignores note-off, always plays the full region
  regardless of how short the trigger was).
- **Crush modes** -- the menu beside Bits and Rate Div. Old samplers
  sounded the way they did for more than their bit depth: each ran at its
  own sample rate, and some filtered the sound before sampling it (warm,
  dark) while others didn't (sharp highs folding down into strange
  ringing tones -- the "dirty" sound). Each mode is one of those
  converters, with its own rate, bits and filters:

  | Mode | What it does to the sound |
  |---|---|
  | **Raw** | The Bits and Rate Div knobs, as before. |
  | **Gritty 12-bit** | 26 kHz with no filter going in: highs fold down into grit. The classic dusty drum sound. |
  | **Warm 12-bit** | 40 kHz, filtered going in and out: round, a little dark, no harshness. |
  | **Crunchy 8-bit** | 22 kHz, fewer steps and folding highs: crunchy, buzzy. |
  | **Lo-fi 8-bit** | 11 kHz: dull and small, like an old radio or a games console. |
  | **Soft 16-bit** | 32 kHz: clean, with the top end gently rolled off. |

  Picking a mode turns Bitcrush on, and greys out Bits and Rate Div (the
  mode sets them). It works the same at any project sample rate, plays the
  same in Export WAV, goes with the pad when you swap two pads, and is a
  "Pad N Crush Mode" parameter your DAW can automate.

  **AA** (anti-alias, under the mode) overrides the converter's input
  filter: **auto** (as the mode has it), always **on** (smoother and
  darker, even on Gritty and Crunchy) or always **off** (the bright,
  ringing aliasing, even on Warm and Lo-fi).
- **Normalize** — scans the pad's current region and boosts it so its peak
  hits 0dBFS. **Reset** removes that boost. Non-destructive; recomputed
  automatically if you re-chop or re-trim.

## The Mod page

Press **Mod** at the top of the panel. These controls make a pad's sound
move and respond to how hard you play. Like everything else in this
panel they follow the selected pad, and they're saved with your project,
in bank kits and in presets. They're also copied by A/B compare and apply
to every batch-selected pad. Unlike the Sound page, they aren't DAW
parameters, so they can't be automated or MIDI-learned -- except the LFO's
**Depth** (see below). **Reset Mod** turns all of them back off for the pad
(the filter type and Voices stay).

- **LFO**: a slow wobble. Pick what it moves:
  - **Pitch** for vibrato. Low Depth is a gentle vibrato; high Depth is a
    siren, up to an octave either way.
  - **Filter** for a "wah" sweep, up to 4 octaves either way around
    Cutoff.
  - **Volume** for tremolo. Full Depth dips all the way to silence.
  - **Pan** to swing the sound left and right.

  **Shape** sets how it moves: Sine (smooth), Triangle, Square (on/off,
  softened so it doesn't click), Saw Down, or Random (a new level each
  cycle). **Rate** is in cycles per second. Turn on **Sync** to lock it
  to the tempo instead, from once a bar down to every 1/16 note. The LFO
  starts from the beginning on every hit, so a pad sounds the same each
  time you play it (Random included).

  **Depth can be automated in your DAW.** Each pad has a parameter called
  **Pad N LFO Depth** (Pad 1 LFO Depth, Pad 2 LFO Depth...): draw
  automation for it to open a filter sweep over a build-up, or bring in
  vibrato on the last bar. The Depth knob follows the automation while it
  plays. It's also saved with the pad everywhere the other Mod settings
  are.
- **Shape**: a movement you draw, as a second LFO, a step pattern or an
  envelope. Pick what it moves (**Pitch**, **Filter**, **Volume** or
  **Pan**), how far (minus turns it upside down), and press **Draw...**:
  click to add points, drag them, drag a line to bend it, or switch to
  steps; set its length (1/16 to 4 bars, in time with the song) and
  whether it **loops** or plays once from each hit and holds its end. A
  volume shape in eighths is an instant chop; a pitch shape that drops
  once is a tape stop.
- **Filter Envelope**: **Amount** moves the filter's cutoff at the moment
  of the hit (up to 4 octaves up, or down), and **Sweep** is how long it
  takes to come back to the Cutoff knob. Up with a short Sweep gives a
  pluck or a "pew"; up with a long one, a slow opening. It works with
  every filter type.
- **Pitch Envelope**: **Amount** bends the pitch at the moment of the hit
  (up to 24 semitones either way), and it glides back to the pad's own
  pitch over the **Glide** time. A positive Amount with a short Glide
  (50-150 ms) gives a kick or tom a punchy "thump"; a long Glide gives a
  tape-start or riser feel.
- **Velocity**: how the pad responds to how hard you hit it.
  **Filter** makes softer hits darker, up to 4 octaves of Cutoff at the
  softest. **Start** makes softer hits start later into the sound (up to
  50 ms), skipping some of the attack. Both do nothing on full-velocity
  hits.
- **Loop** (needs **Loop** turned on on the Sound page):
  **Ping-Pong** plays the loop forward, then backward, then forward
  again. **X-Fade** (up to 500 ms) smooths the loop point: the end of the
  loop fades into its start, so a loop chopped at an awkward spot doesn't
  click or thump each time round. X-Fade works on forward loops (not
  Reverse or Ping-Pong).
- **Voices**: how many hits of this pad can sound at once.
  - **1 - cut** (the default): a new hit stops the one before it, with a
    tiny fade so it doesn't click.
  - **2 to 8**: earlier hits keep ringing underneath the new one. Use this
    for long cymbals or 808s that shouldn't choke themselves, rolls that
    overlap, or playing chords on the KEYS tab from one pad. When a pad
    runs out of voices, its oldest hit fades out.

  Choke groups, Mono mode and the stop button still cut every voice. The
  pad shows as playing while any of its hits still sounds.
- **Width** and **Mono below** (beside Voices), **Phase** and **Offset**
  (in the Loop row, on the right):
  - **Width**: 0% mono, 100% as it is (double-click), 200% twice as wide.
  - **Mono below**: everything under this frequency is made mono, so the
    pad's low end stays centred (under 40 Hz is off).
  - **Phase**: flips the pad's polarity. Two layered kicks or snares can
    partly cancel each other and sound thin; if they do, flip one.
  - **Offset**: plays the pad's sound up to 10 ms later -- slide one
    layer until the two hit together and sound fullest. Unlike SEQ's
    Nudge, it moves the sound however the pad is played.
- **Release**: a pad that plays when you **let go** of a note on this
  one -- the thump of a piano key coming up, a string's release, a
  breath at the end of a vocal note. Load that sound on another pad and
  pick it here. The menu beside it says how it fades: the longer the note
  was held, the quieter the release (half as loud every 0.5, 1, 2 or 4
  seconds, or **No fade**), and it follows how hard the note was hit.
  - It plays when a note **ends**: notes from your DAW's piano roll or a
    MIDI controller, the on-screen keyboard, and SEQ steps given a
    **length** (the note is let go where the length runs out). A step with
    no length just plays its sample out, so there's no release. Export WAV
    plays the releases too.
  - With **key zones**, give each zone pad its own release, or just the
    zones you want.
- **Follow**: this pad's **Volume** or **Filter** moves with another
  sound's level -- another pad, the bass, the synth or a deck.
  - **Volume, +**: the pad only comes through while the other sound
    plays -- a gate. Put a long pad or a noise riser on it and follow the
    kick for a chopped, pumping texture.
  - **Volume, -**: the pad dips while the other sound plays -- a duck
    (like Duck on the MIXER, but from any one sound).
  - **Filter, +**: the filter opens as the other sound gets louder --
    hats that brighten with the bass. **-** closes it. Up to four octaves.
  - It reacts within a few milliseconds and isn't in **Export WAV** (an
    export renders each pad on its own, without the others to listen to).
- **Vary**: every hit comes out a little different, so a hat played on
  every 16th or a snare roll doesn't sound like a machine gun. Four thin
  sliders, each 0 (off) by default -- drag one, double-click to reset:
  - **st** -- random pitch, each hit up to this many semitones higher or
    lower. 0.1-0.3 is a live drummer; a whole semitone is a wobbly tape.
  - **% pan** -- each hit up to this far left or right of the pad's Pan.
  - **oct** -- the filter cutoff, each hit up to this many octaves higher
    or lower (hear it with the cutoff below fully open).
  - **ms** -- each hit starts up to this much later into the sound,
    softening or blurring the attack.

  It isn't truly random each time: the 1st hit of a pad after you press
  Play always gets the same change, the 2nd hit its own, and so on. So a
  beat sounds the same every time you play it from the start, and
  **Export WAV** sounds exactly like it. (A pad hit live while the beat
  plays counts as one of its hits too.) With **Layers**, the hit's change
  is shared by the layer that plays -- and in a blend by every layer, so
  they stay in tune with each other.

### Snapshots and macros

Beside **Store A** and the A/B button:

- **Snaps**: four sound snapshots for the pad. **Store this pad's sound**
  in 1-4, **Recall** it on the pad, or **Recall it on every pad that has
  one** -- a whole kit's sound at once. A snapshot is the pad's sound (not
  its sample). From your DAW: the **Sound Snapshot** parameter (Hold, 1-4;
  automate it in FL Studio) or MIDI program changes 0-3 recall one on every
  pad that has it. Snapshots are saved with the project.
- **Macros**: two knobs for the pad. **Moves...** under each picks what it
  turns -- any Sound control, or a Mod or Grain knob -- each from where it
  is now toward its far end. Right-click a knob to MIDI Learn it.

### The mod matrix, MIDI Learn and formants

- **Matrix...** (Mod page, on the Shape row): four slots, each a source --
  **LFO**, **Shape**, **Velocity**, **Random** (a new value each hit),
  **Key** (the note played), **Mod wheel**, **Pressure** -- moving the
  **Pitch** (12 semitones at 100%), **Filter** (4 octaves), **Volume** or
  **Pan** by its amount. They add to what the LFO and shape already do.
- **Right-click any Mod or Grain knob** for MIDI Learn. While a project
  macro is assigning, the right-click adds the knob to the macro instead.
  (In FL Studio, automate a macro to automate these.)
- **Formants** (Mod page): keeps the voice's character when the pad is
  pitched up or down -- no chipmunk. It makes the pad sound about 23 ms
  late while on, so use it for melodies and vocals rather than drums.

## The Grain page

Press **Grain** at the top of the panel and turn on **Granular**. Instead
of playing its sample from start to end, the pad now plays a *cloud* of
tiny overlapping pieces of it ("grains"), each a few milliseconds to half
a second long and faded in and out. Use it to turn a vocal, a chord or a
sustained note into a pad, a texture or a drone, or to freeze a single
moment of a sound and hold it.

Like the Mod page, these settings follow the selected pad, are saved with
your project, in bank kits and presets, and are copied by A/B compare and
batch selection. They aren't DAW parameters. **Reset Grain** puts the
knobs (and the shape) back to their defaults and leaves Granular on or
off.

**Shape** (beside the Granular switch) sets how each grain rises and
falls:

- **Smooth** (the default): fades in and out -- soft, blended clouds.
- **Flat**: full level between short fades, so each grain keeps more of
  the sample's own attack and body.
- **Sharp**: starts at once and dies away, like a plucked or struck note
  -- rhythmic, glitchy clouds, especially at low Density.
- **Swell**: the reverse: rises and stops -- a backwards, breathing
  texture.

The level stays about the same whichever shape you pick.

- **Cloud**
  - **Size**: how long each grain is (10-500 ms). Short grains sound
    buzzy and blurred; long grains sound more like the sample itself.
  - **Density**: how many grains start each second (1-100). Low is sparse
    and stuttery, high is a smooth wash. The level stays about the same
    as you turn it up.
  - **Position**: where in the sample the cloud starts, from 0% (the
    start) to 100% (the end). With Reverse on, it counts from the end.
  - **Scan**: how fast the cloud moves through the sample. **100%** moves
    at the sample's own speed, **50%** at half speed (a slow stretch),
    **0** *freezes* it on one moment, and below 0 moves backward.
    Double-click the knob to go back to 0. When the cloud reaches the end
    of the sample it carries on from the start.
- **Spread**
  - **Scan: free / 1 / 2 / 4 / 8 bars** (top row): free lets Scan set the
    speed; a number of bars makes the cloud cross the whole sample in
    exactly that many bars at the song's tempo, so a long texture lines up
    with your beat.
  - **Jitter**: scatters each grain's start a little around the cloud's
    position, so the cloud sounds less mechanical. High Jitter mixes
    moments from all over the sample.
  - **Pitch**: each grain plays up to this many semitones above or below
    the pad's pitch, at random. A few semitones gives a chorus-like
    shimmer; 12 gives a cloud of notes.
  - **Stereo**: how far grains spread left and right.

How long a granular hit lasts: as long as the pad would normally play
(its region at its pitch and speed), with the Sound page's envelope
shaping it. For a sound that keeps going for as long as you hold the note,
turn on **Loop** on the Sound page. The pad's Tune, Fine and Speed set the
grains' pitch, and its filter, envelope, LFO and FX all still apply. A
pitch LFO or the Pitch Envelope bends every sounding grain as it plays,
so vibrato and pitch drops work on a cloud the way they do on the plain
sample.
**Keys place** (beside Scan sync): play the pad from the keyboard (or MIDI
channel 2) and each note picks where the cloud sits -- an octave below C3 is
the start, an octave above the end -- instead of changing its pitch.
Granular mode also sounds the same in **Export WAV** and **Export Full
Song**. It replaces the loop shaping options (Ping-Pong and X-Fade) while
it's on.

## Output routing

Pads 1-16 each have their own dedicated stereo output pair, so you can
send an individual pad to its own channel in your DAW's mixer instead of
the shared master output — useful for processing the kick separately
from the rest of the kit, for example. This is off by default; enable it
from your DAW's own multi-output routing UI for this plugin instance
(exactly how varies by DAW — look for "add output" or similar on the
plugin's mixer channel). Once a pad's own output is enabled, that pad's
audio goes *only* to its own channel, not also into the main mix.

If a bank's [grid size](../pads/pad-grid-and-browser.md) is set larger
than 4x4, pads 17 and up always play through the main mix — dedicated
per-pad outputs are capped at 16 regardless of grid size, since a real
stereo output bus per pad adds up fast on the host side (tested up to a
noticeable routing-dialog slowdown well before 64).
