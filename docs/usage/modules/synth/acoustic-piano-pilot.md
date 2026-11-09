# Room Upright acoustic piano

v1.525.0 offers the approved piano as **Room Upright** through
**SYNTH > Instrument > Samples**. It is optional local content, not included
in the installer or downloaded by the plugin.

The source is published under CC0-1.0. Keep its licence and recording credits
with the samples. The tested edition is pinned to
[this source revision](https://github.com/freepats/upright-piano-KW/tree/570f6c60ed2eff67accad3b85d5b452e57a3ad28),
with its [licence](https://github.com/freepats/upright-piano-KW/blob/570f6c60ed2eff67accad3b85d5b452e57a3ad28/LICENSE).

With the local content package installed, choose **Library... > Room Upright**.
The shared library lives in `%ProgramData%\Boom Bap Producer Pads\Instruments`.
Keep it in place: projects reference its preset and samples there.

You can still use **Load instrument...** for a supported external preset, keeping
its samples beside it. Existing pilot-project references remain unchanged.
Play the keyboard below, MIDI channel 5 or the SYNTH part. The SYNTH mixer
strip controls level, pan, mute/solo and sends. This edition has two velocity
layers across the full 88-key piano range and needs about 109.4 MiB of decoded
audio. It fits the player's existing memory limit without removing layers.

In this development workspace, the verified bank is under
`local-libraries/piano-pilot-2026-11-08/upstream/`. Its audition and measurements
are under the sibling `validation` folder. The local library is outside build
output so build cleanup does not remove it. Projects reference its absolute
path; keep the folder in place when reopening a project.

The user accepted the rendered audition as usable on 2026-11-08. Automated
checks cover all 88 keys at four velocities, long held notes and release.
That is not a claim that every note, loop or live keyboard interaction has
been individually auditioned, or that other library editions are compatible.

This is a recorded upright with its own room character. It is the first
acoustic voice. More instruments and release-installer content remain separate work.
