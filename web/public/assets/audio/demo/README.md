# Web demo kit

These 16 files are what the playable pad grid on the website loads. Drop your
own one-shots in here using **exactly these filenames** and the site picks them
up with no code change — the names are the contract.

Anything missing just means that pad stays silent; the rest of the kit still
works, so you can replace them a few at a time.

## The 16 files

Laid out the way they sit on the grid, pad 1 bottom-left like hardware.

| Row | Key | Pad | Filename | What it should be |
|-----|-----|-----|----------|-------------------|
| Top | `1` | 13 | `perc-2.wav` | Percussion hit |
| Top | `2` | 14 | `perc-3.wav` | Percussion hit, different from perc-2 |
| Top | `3` | 15 | `crash.wav` | Crash — the one long sample |
| Top | `4` | 16 | `shaker.wav` | Shaker / tambourine |
| 2 | `Q` | 9 | `tom-low.wav` | Low tom |
| 2 | `W` | 10 | `tom-mid.wav` | Mid tom |
| 2 | `E` | 11 | `tom-high.wav` | High tom |
| 2 | `R` | 12 | `perc-1.wav` | Percussion hit |
| 3 | `A` | 5 | `hat-closed.wav` | Closed hat |
| 3 | `S` | 6 | `hat-open.wav` | Open hat |
| 3 | `D` | 7 | `clap.wav` | Clap |
| 3 | `F` | 8 | `rim.wav` | Rimshot / sidestick |
| Bottom | `Z` | 1 | `kick-1.wav` | Main kick |
| Bottom | `X` | 2 | `kick-2.wav` | Second kick, softer or shorter |
| Bottom | `C` | 3 | `snare-1.wav` | Main snare |
| Bottom | `V` | 4 | `snare-2.wav` | Second snare, or a ghost-note snare |

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
