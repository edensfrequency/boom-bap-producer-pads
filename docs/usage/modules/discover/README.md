[&larr; Back to Usage overview](../../../USAGE.md) | [All feature guides](../README.md) | [INSTALL](../../../INSTALL.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>

# DISCOVER tab: digging for new material

**In one line:** a crate for finding sounds in your own folders (audio and video) and in YouTube videos you've tagged, plus a converter that turns audio and video files into WAV, AIFF, FLAC or OGG.

## What this part of the plugin is for

"Digging" is how producers find things to sample. This tab gives you two
crates and a converter. **Local Files** is a shuffle-and-listen browser over
your own audio and video files: point it at a folder and new files show up
automatically, and anything you like, including the soundtrack of a video,
can go straight onto a pad or the turntable deck. **YouTube Crate** lets you
watch YouTube videos inside the plugin, tag them (genre, key, BPM, year...),
filter your collection, and get "up next" suggestions that fit what you're
listening to. **Convert** turns a whole folder of audio files or videos into
WAV, AIFF, FLAC or OGG in the background. **Nothing is ever downloaded**:
only files already on your computer are played or converted, and YouTube
videos are only embedded, the way any website shows them.

## What's in this folder

| File | What you'll learn |
|---|---|
| [discover-tab.md](discover-tab.md) | [Local Files](discover-tab.md#local-files) (watch folder, add files, search, shuffle, preview, Load to Pad, Send to Deck, using videos), [YouTube Crate](discover-tab.md#youtube-crate) (watch by URL, search via a proxy, tagging, filters, Up Next, favourites) and [Convert](discover-tab.md#convert) (batch audio/video to WAV, AIFF, FLAC or OGG) |

## Questions this answers

- *Can it download audio from YouTube?* No, by design. It only embeds the video.
- *Why does YouTube search need a "proxy"?* Searching needs a Google key, and a key inside an installed program could be stolen. A small relay service keeps it safe. Watching by pasting a link works without one.
- *How do I get a sound from my downloads onto a pad?* Set that folder as the Watch Folder, pick the file, and use **Load to Pad**.
- *Can I sample a video?* Yes. A video's soundtrack loads onto a pad or the deck like any audio file (Load to Pad, Send to Empty Pad, Send to Deck), as long as Windows can play it.
- *How do I turn a folder of videos into WAV files?* **Convert** tab: Add Folder, pick WAV, press Convert. **Watch Output Folder** then shows the results in Local Files.

## Related guides

- [Pad grid](../pads/README.md): where Load to Pad puts the sound
- [Turntable → Deck Chop](../turntable/README.md): chop a whole record you found
