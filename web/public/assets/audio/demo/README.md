# Web demo kit

These 16 files are what the playable pad grid on the website loads. Drop your
own one-shots in here using **exactly these filenames** and the site picks them
up with no code change — the names are the contract.

Anything missing just means that pad stays silent; the rest of the kit still
works, so you can replace them a few at a time.

## The 16 files

Laid out the way they sit on the grid, pad 1 bottom-left like hardware.

| Row | Key | Pad | Filename | What it wants to be |
|-----|-----|-----|----------|---------------------|
| Top | `1` | 13 | `perc-2.wav` | Tambourine, conga, cowbell, vinyl crackle hit |
| Top | `2` | 14 | `perc-3.wav` | A different colour to perc-1 and perc-2 |
| Top | `3` | 15 | `crash.wav` | Section marker. The one long sample, ~1s |
| Top | `4` | 16 | `shaker.wav` | Steady 8ths/16ths texture. Short and dry |
| 2 | `Q` | 9 | `tom-low.wav` | Fills |
| 2 | `W` | 10 | `tom-mid.wav` | Fills |
| 2 | `E` | 11 | `tom-high.wav` | Fills |
| 2 | `R` | 12 | `perc-1.wav` | Your most-used percussion colour |
| 3 | `A` | 5 | `hat-closed.wav` | Tight, bright, under 80ms |
| 3 | `S` | 6 | `hat-open.wav` | Same hat, longer decay |
| 3 | `D` | 7 | `clap.wav` | Layers with the snare, or replaces it |
| 3 | `F` | 8 | `rim.wav` | Sidestick. Ghost notes and fills live here |
| Bottom | `Z` | 1 | `kick-1.wav` | **The main kick.** Short, punchy, body in the 80-120Hz range |
| Bottom | `X` | 2 | `kick-2.wav` | Softer or shorter, for doubles and pickups |
| Bottom | `C` | 3 | `snare-1.wav` | **The centrepiece.** Crack plus a short room tail |
| Bottom | `V` | 4 | `snare-2.wav` | Ghost-note snare. Quieter and duller than snare-1 |

## What makes these read as boom bap

The two that decide whether the kit lands are `kick-1` and `snare-1`. Everything
else is support.

- **Kick:** midrange body, not sub. A trap-style 808 with a long low tail is the
  wrong instrument here - it buries the snare and kills the pocket. Short decay,
  punch around 80-120Hz, and it should sound like it came off a record rather
  than out of an oscillator.
- **Snare:** this is the sound people judge the whole kit by. It needs the crack
  around 2-4kHz and a little room behind it. A bone-dry, perfectly clean snare
  reads as modern pop, not boom bap. The tail is doing as much work as the hit.
- **Grit over polish:** a bit of saturation, vinyl noise, or the character of a
  low-bit-rate sampler is the point, not a defect to be cleaned up. Drums that
  are too clean and too loud sound like a different decade.
- **Leave the tails.** Don't gate the room off the snare or the ring off the
  rim. That decay is most of the feel.

**`hat-closed` and `hat-open` are a choke pair.** Hitting the closed hat cuts
the open hat off, the way a real hi-hat channel behaves. They should sound like
the same physical hat, or the choke reads as a glitch rather than a technique.

## Format

Match these and the page stays fast:

- **WAV**, 44.1 kHz, 16-bit, **mono**. Mono halves the download and these are
  drums — nobody misses the stereo image on a kick.
- **Trim the head.** No leading silence. Any gap before the transient becomes
  audible latency between the click and the sound, and it is the single most
  common reason a web pad grid feels sluggish.
- **Normalise to about -1 dBFS.** The pads apply their own velocity curve on
  top, so start them loud and let the velocity do the work.
- **Keep them short.** Everything under ~500 ms except `crash.wav`, which can
  run to about a second.

## Size budget

The whole kit downloads when the pads scroll into view, so it is real page
weight. The current placeholder kit is **393 KB for all 16**. Try to stay under
**1.5 MB total**. If you go much past that, convert to a compressed format and
tell me — the loader needs a one-line change to match.

## Before you ship these

These go onto a **public website**, not just into the plugin. They need to be
your own recordings, or something you hold a licence to redistribute. A sample
you are allowed to *use in a beat* is not necessarily one you are allowed to
*hand out sixteen at a time*.

## Check them before shipping

From the repo root:

    .\Tools\CheckWebDemoKit.ps1

It verifies all 16 are present, flags wrong sample rates or stereo files,
warns about leading silence and total size, and prints the peak level of each
so you can spot anything quiet or empty.
