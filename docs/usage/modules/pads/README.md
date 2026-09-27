[&larr; Back to Usage overview](../../../USAGE.md) | [All feature guides](../README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# PADS tab: the pad grid & sample browser

**In one line:** this is where your sounds go onto pads, and where you play them.

## What this part of the plugin is for

The PADS tab is home base. On the left is a browser for your own sample
folders. In the middle is the pad grid: each pad holds one sound (a kick, a
snare, a vocal chop) and plays it when you click it or hit it on a MIDI
controller. There are 16 pads to start with, and each of the 4 banks
(A, B, C, D) is its own complete kit that can grow to as many as 64 pads.

## What's in this folder

| File | What you'll learn |
|---|---|
| [pad-grid-and-browser.md](pad-grid-and-browser.md) | Getting samples onto pads (browser, drag-and-drop, double-click), playing and stopping pads, the right-click menu (rename, colour, choke groups, insert effects, Key Shift, Favorite), switching banks, and changing the grid size |
| [kit-import-export.md](kit-import-export.md) | The **Kit...** button: export a bank to SoundFont, SFZ, DecentSampler, a sliced WAV or a whole FL Studio pack, and import kits from those formats or a folder |

## Questions this answers

- *How do I get my own sounds in?* Point the browser at your sample folder, or drag files straight onto a pad. See [Sample browser](pad-grid-and-browser.md#sample-browser).
- *Why is pad 1 at the bottom left?* It matches how most hardware pad controllers are numbered, and you can switch it. See [The pad grid](pad-grid-and-browser.md#the-pad-grid).
- *I need more than 16 pads.* Use another bank, or pick a bigger grid (up to 8x8) for the current one.
- *Can I get a sound back out into my DAW?* Yes: drag a loaded pad out of the plugin.
- *Can I use my kit in FL Studio (FPC, DirectWave, Slicex) or Kontakt?* Yes: **Kit... > Export kit > FL Studio pack** (or SoundFont for DirectWave and Kontakt). See [Kit import & export](kit-import-export.md).
- *Can I load a SoundFont or SFZ kit here?* Yes: **Kit... > Import kit**. Each sound gets its own pad, and Undo brings your old kit back.

## Related guides

- [Sample editor](../sample-editor/README.md): trim or chop the sound on the selected pad
- [DSP controls](../dsp-controls/README.md): shape the selected pad's sound
- [Step sequencer](../step-sequencer/README.md): program a pattern for each pad
- [Turntable → Deck Chop](../turntable/README.md): chop a whole record onto pads while it plays
