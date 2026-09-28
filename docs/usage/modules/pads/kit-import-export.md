[&larr; Back to Usage overview](../../../USAGE.md) | [PADS guides](README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>


# Kit import & export

The **Kit...** button on the PADS tab (just left of the grid size, under
the pads) moves a whole bank's kit in and out of the plugin: take your
kit into FL Studio, another sampler or a DAW, or bring a kit made
elsewhere in, with each sound on its own pad.

Everything works on the **bank you're looking at** (A, B, C or D).

## Export kit

Every loaded pad goes out exactly as it plays: trimmed to its region,
reversed if Reverse is on, at its Normalize level. Pad 1 is always MIDI
note 36, pad 2 is 37, and so on.

| Choose | You get | Load it in |
|---|---|---|
| **SoundFont (.sf2)** | One file with every pad on its own key | DirectWave, FL Studio's Fruity SoundFont Player, Kontakt, most samplers |
| **SFZ** | `Kit.sfz` plus one WAV per pad, in a new folder | Any SFZ player (sforzando, TX16Wx, Sitala...) |
| **DecentSampler preset** | A `.dspreset` and a `Samples` folder, in a new folder | DecentSampler (free) |
| **Sliced WAV with markers** | Every pad back to back in one WAV, with a slice marker at the start of each | FL Studio's Slicex or Fruity Slicer - each pad becomes a slice |
| **FL Studio pack** | A folder with all of it: `One-shots` (a WAV per pad, ready for FPC), the SoundFont, the sliced WAV, the bank's pattern as MIDI, and a short how-to | FL Studio |

What carries over: volume, pan, tuning (Tune, Fine and Speed), the
envelope (attack, decay, sustain, release), choke groups, and Loop. The
SFZ export also keeps Reverse, Loop and **Play To End** as settings.

**Layers** (a pad's right-click **Layers** groups) carry over too: the
group's sounds all go on the first pad's key. SFZ and DecentSampler keep
velocity layers, round robin and random. SoundFonts can only split by
velocity, so a round-robin or random group goes out as each pad on its own
key.
Filter, bitcrush and insert effects stay in this plugin - these formats
have nothing to hold them.

Exports never overwrite: a folder that already exists gets a number,
like `Boom Bap Kit A (SFZ) (2)`. The message afterwards has a **Show in
Explorer** button.

### Why not FPC, DirectWave or Kontakt files directly?

Those programs save their own kits in private formats that aren't
published (Kontakt's are encrypted), so no other program can write them
reliably. But every one of them **opens** the formats above: FPC takes
the one-shot WAVs, DirectWave and Kontakt load the SoundFont, Slicex
loads the sliced WAV.

## Import kit

Import **replaces the pads of the bank you're looking at**: the bank is
cleared, each pad is reset to its default settings, and the kit's sounds
go on. **Undo** puts the previous kit back, settings and all.

| Choose | What happens |
|---|---|
| **SoundFont (.sf2)** | Every sound in the SoundFont's first preset gets a pad. The sounds are saved as WAV files in `Documents\Boom Bap Producer Pads\Imported Kits` (pads always play from a file). |
| **SFZ** | Every region gets a pad, with its volume, pan, tuning, envelope, choke group, reverse and loop. |
| **DecentSampler preset** | Every sample gets a pad, with the same settings, and the group's name as the pad's name. |
| **WAV with slice markers** | Each slice becomes a pad playing that part of the file - a WAV saved by FL Studio's Edison, one exported from here, or any WAV with markers. |
| **Folder of samples** | Every audio file in the folder, in name order (`2 Snare` before `10 Clap`). Subfolders aren't included. |

Where each sound lands:

- A sound mapped to **one key** goes on that key's pad (key 36 = pad 1).
  That's how drum kits line up with the right pads.
- Sounds that cover **a range of keys** (a multisampled piano or strings)
  fill the empty pads from the lowest range to the highest.
- If there are more sounds than pads, the rest are skipped and the
  message says how many. Pick a bigger **Grid Size** (up to 8x8) and
  import again.

Good to know:

- A SoundFont with several presets (a whole General MIDI set) imports
  only the first one.
- **Velocity layers and round robin come in as Layers.** Samples that
  share a key in the kit each get a pad, and the pad on that key plays them
  as a group: by velocity, in turn, or at random, as the kit says (see
  [Layers](pad-grid-and-browser.md)). Samples that share a key but play
  *together* in the source (a stack) just get their own pads.
- SoundFonts have no "play to the end" setting, so a Play To End pad
  exported to SF2 comes back with a release as long as the sound, which
  plays the same way.
- Some commercial libraries encrypt their samples. Those can't be read,
  and the message names a missing sample so you can tell.
