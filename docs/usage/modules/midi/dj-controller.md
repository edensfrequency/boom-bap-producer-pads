[&larr; Back to Usage overview](../../../USAGE.md) | [MIDI guides](README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# Using a DJ controller

**In one line:** teach the plugin your DJ controller once, and its jog
wheels, buttons, faders and pads play the two decks and the pads.

Most DJ controllers only work out of the box inside the DJ app they came
with. The **Controller** button in the toolbar (next to **MIDI Map**) opens
a window where you teach the plugin your controller yourself: it asks you
to move each control, works out what that control sends, and remembers it.
You can save the result as a named controller and it's there next time,
in the Standalone and in your DAW.

## Before you start: get the controller's MIDI to the plugin

- **Close your DJ app first.** On Windows only one program at a time can
  use a MIDI device. While VirtualDJ (or any other DJ app) is open, the
  plugin never hears the controller.
- **Standalone:** open **Options > Audio/MIDI Settings** and tick your
  controller under the MIDI inputs.
- **In a DAW:** send the controller's MIDI to the track the plugin is on.
  The plugin only hears the MIDI its track gets.

## Teaching it your controller

1. Press **Controller** in the toolbar. The window lists every control the
   plugin can drive: for each deck the **jog wheel**, **jog touch**,
   **Play**, **Cue**, **Sync**, **pitch fader**, **volume fader**,
   **EQ high / mid / low** and **filter**; then the **Crossfader**; then
   **Pads 1-16**.
2. Press **Learn all**. The window tells you which control to move next:
   - **buttons** (Play, Cue, Sync, pads): press it once;
   - **faders and knobs**: move it from one end to the other;
   - **jog wheels**: turn it back and forth for a couple of seconds,
     turning the top of the platter;
   - **jog touch**: touch the top of the platter, then let go.
3. When it has what it needs it says **Got it**, shows what it heard, and
   moves on by itself. A control your controller doesn't have? Press
   **Skip**. Want to stop part way? Press **Stop**. What you've learned so
   far already works.
4. Press **Save** to keep it. Give it a name first if you like (it starts
   as "My controller").

To teach or re-teach one control, select it and press **Learn** (or
double-click it). **Clear** forgets the selected control.

While the window is listening, the controller only teaches: nothing plays.
As soon as it stops listening, everything you've taught it works.
The window can stay open while you try it out: the decks and pads still
respond to your mouse and to the controller.

### Measure a jog turn

After the jog wheel is learned, press **Measure a jog turn**, put a finger
on a mark on Deck 1's platter, turn it exactly one full turn clockwise
and press **Done**. From then on one turn of your jog wheel moves the
record the same as one turn of a real 33 rpm record (1.8 seconds of
audio). Without this, the plugin uses a fixed step per tick. That still
works, but the record may move faster or slower than your hand.

## What each control does

| Control | What it does |
|---|---|
| Jog wheel | Scratches the deck. With **jog touch** learned, only a touched platter scratches, and turning the edge of the wheel does nothing. Without jog touch, turning the wheel grabs the record, and it's let go a moment after you stop turning. |
| Jog touch | Grabs the record while your hand is on the platter, and lets it go when you lift off, like holding a real one. |
| Play | Starts or stops the deck. |
| Cue | Stops the deck and jumps back to the start. |
| Sync | Matches the deck's pitch to the project tempo (the same as the deck's own Sync). |
| Pitch, Volume, EQ high/mid/low, Filter | Move the deck's own controls. |
| Crossfader | Moves the crossfader between the two decks. |
| Pads 1-16 | Play the pads exactly as a pad controller would. Velocity-sensitive pads play soft and loud, and Live Pad Quantize, Tap Pads and recording into the pattern all apply. |

The on-screen controls follow your hardware, and your DAW can record the
fader and knob moves as automation.

## Good to know

- **Two decks that send the same numbers.** Many controllers send the same
  message for both decks and only change the MIDI channel. That's fine: the
  plugin tells them apart by channel.
- **Jog wheels count in different ways.** The plugin works out which way
  your jog wheel counts while you teach it, so you don't have to know.
- **Extra-smooth faders.** Some controllers send a fader in two halves for
  finer steps (14-bit). The plugin spots this and uses both.
- **Everything else still works.** Anything the controller sends that
  you haven't taught it goes on to the plugin as usual: pad notes,
  MIDI Learn links, and the older fixed jog input (note 20 and CC 20) all
  keep working.
- **Several controllers.** Save each under its own name and pick one from
  the **Saved controllers** list. Picking one makes it live. The plugin
  remembers which one you used last.
- **Where they're kept:** `%APPDATA%\Boom Bap Producer Pads\Controllers\`,
  one `.bbcontroller` file each. Copy the file to another computer to take
  your controller setup with you.

## If something doesn't work

- **"Nothing came through from the controller."** The controller's MIDI
  isn't reaching the plugin. Close your DJ app, then check the MIDI input
  (Standalone: **Options > Audio/MIDI Settings**; DAW: the track's MIDI
  input).
- **A jog wheel learned as a fader** (the record jumps instead of
  following your hand): select it, press **Learn** and turn the wheel back
  and forth, both ways, not in one long sweep.
- **The record moves too fast or too slow under your hand:** use
  **Measure a jog turn**.
- **A button does two things:** it was probably taught to two controls.
  Teaching it again to the one you want takes it off the other.

## Related guides

- [MIDI Learn](midi-learn.md): link any single knob to hardware
- [Turntable](../turntable/turntable-tab.md): the decks themselves, scratching and the crossfader
- [Pad grid](../pads/README.md): what the pads do
