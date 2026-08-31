[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>


# TURNTABLE tab

![The TURNTABLE tab](../../../../assets/screen-shots/03-turntable-tab.png)

One dedicated deck, separate from the 16 pads — its own sample slot, not
tied to pad selection. The platter sits on the left at a much larger
size than other tabs' controls; everything else lives in a scrollable
strip on the right.

- **Full Screen** (or press **E**) — hides everything but the platter
  and a small Play/Cue strip, for an uncluttered view while performing.
  Press **Escape**, or click the button again, to return.

- **Load...** or **drag an audio file** onto the panel to load a sample
  onto the deck.
- **Click-drag the platter** to scratch: dragging clockwise plays forward,
  counter-clockwise reverses, and the pitch follows how fast you drag.
  Release to resume normal playback from wherever the scratch left off.
- **Play / Pause** — normal playback at the current pitch.
- **Cue** — stops and jumps back to the start.
- **Pitch** fader — 0.5x–2.0x playback speed when not scratching.
- **Volume** fader — deck output level.
- **EQ / Filter / Reverb** — Low/Mid/High EQ (±24dB), a Filter knob
  (sweeps low-pass to high-pass through a neutral centre), and a Reverb
  send, all real host-automatable parameters.
- **Loop** — repeats a beat-length region from wherever playback
  currently is (needs a detected BPM, see the BPM/Key readout).
- **Stutter** — hold-to-engage rapid retrigger of a short slice, rate
  selectable (1/4 to 1/32).
- **Scratch Patterns** — Baby/Scribble/Chirp/Transform presets replay a
  canned scratch gesture; **Record** captures your own platter moves as a
  named custom pattern to replay later.
- **Vinyl Sim** — Wow/Flutter, Vinyl Noise, and Saturation knobs (0–100%,
  no effect at 0) plus a **Motor Ramp** toggle (spins up to speed from a
  stop instead of starting instantly). All off by default.

The platter also responds to an external MIDI jog-wheel controller, not
just mouse drag: Note On/Off at note 20 touches/releases the platter, and
CC 20 carries relative jog motion (the standard sign-magnitude relative-
encoder convention most DJ jog wheels already speak) — both on MIDI
channel 1. Useful if you're driving this from a hardware controller or a
DAW MIDI script rather than the mouse.

## 2 Decks

Toggle **2 Decks** (top of the tab) to bring in a second, fully
independent deck — its own sample slot, platter, EQ/Filter/Reverb,
Vinyl Sim, scratch patterns, and MIDI Learn mappings, running alongside
the first. Everything documented above applies identically to both;
they don't share state or interact with each other beyond both being
audible at once.

```mermaid
flowchart LR
    A["1 deck\n(default)"] -- "toggle 2 Decks ON" --> B["2 decks\nside-by-side layout"]
    B -- "toggle 2 Decks OFF" --> A
    B -. "Full Screen (E) disabled\nwhile 2 Decks is on" .-> B
```

- With 2 Decks on, the platters split **left/right** instead of one
  platter filling the space — each half is a complete, independent deck.
- **Full Screen is unavailable while 2 Decks is on** (there'd be two
  platters competing for the same full-screen space) — turn 2 Decks off
  first if you want the single-deck Full Screen view.
- Turning 2 Decks off doesn't unload or reset deck 2 — it's just hidden;
  turn it back on and deck 2 is exactly where you left it.
- Deck 2's sample, settings, and MIDI Learn mappings are saved with your
  project/preset the same as deck 1's.
