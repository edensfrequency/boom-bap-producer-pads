
![banner-image.png](../assets/banner-image.png)

<hr>

# Install

Windows only for now (macOS/Logic support is a later phase).

## Requirements

- A VST3 host: Reason, FL Studio, or Ableton Live confirmed working. Others
  that support VST3 should work too but haven't been tested yet. **Not**
  required for the standalone app below — it runs entirely on its own.

## As a VST3 plugin (inside a DAW)

1. Get `Boom Bap Producer Pads.vst3` — download the latest
   `Boom Bap Producer Pads.vst3.zip` from the project's Releases page and
   unzip it, or build it yourself from source (see
   `internal-docs/developer-docs/BUILD.md` if you have the source repo).
2. Copy the whole `Boom Bap Producer Pads.vst3` folder into your system's
   VST3 folder: `C:\Program Files\Common Files\VST3\`.
3. Rescan plugins in your DAW:
   - **FL Studio**: Options → Manage Plugins → Find/rescan plugins. Look for
     "Boom Bap Producer Pads" under Generators (it's an instrument).
   - **Ableton Live**: Preferences → Plug-Ins → make sure VST3 is enabled,
     then rescan (or refresh the browser's Plug-Ins list).
   - **Reason**: Preferences → Advanced/VST → enable VST3 plugins and
     rescan, then add it as an instrument device.
4. If you already had a previous version loaded in an open project, remove
   and re-add the plugin instance (or restart the DAW) — some hosts keep the
   old binary mapped in memory even after a rescan.

## As a standalone app (no DAW needed)

Download `Boom Bap Producer Pads-Standalone.zip` from the Releases page
(or build the project yourself, which also produces
`Boom Bap Producer Pads.exe`) and run the `.exe` directly — no install
step, no host to configure. On first launch, open its
audio settings to pick an output device (and a MIDI input device if you
want to play it from a controller). See
[USAGE.md](USAGE.md#running-as-a-standalone-app) for the one behavioural
difference from running inside a DAW (the step sequencer needs its own
"Seq Play" toggle, since there's no host transport to follow).

## Troubleshooting

- **Plugin doesn't appear after rescanning**: confirm the folder is really
  at `C:\Program Files\Common Files\VST3\Boom Bap Producer Pads.vst3\` and
  not nested inside itself (e.g.
  `...\Boom Bap Producer Pads.vst3\Boom Bap Producer Pads.vst3\...`) — some
  file managers/scripts can nest a folder copy if the destination already
  exists. Delete the whole thing and copy fresh if in doubt.
- **Old version still showing**: the plugin binary can be locked by a
  running DAW that already has it loaded. Close the DAW (or remove that
  plugin instance) before replacing the file, then reopen.
- **Standalone app has no sound**: open its audio settings (usually a small
  icon/menu in the window) and confirm the right output device is selected
  — it doesn't inherit any system default automatically the first time.
