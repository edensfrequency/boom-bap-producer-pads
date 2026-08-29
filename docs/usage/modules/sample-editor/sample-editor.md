[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>


# Sample editor

Top-right panel of the PADS tab — shows the waveform of whichever pad is
currently selected.

- **Trim handles** (the two vertical orange bars) — drag to set the region
  the pad actually plays. Everything outside the region is dimmed.
- **Click inside the waveform** — drops a cyan cut-point marker.
- **Chop** — splits the current region at every cut-point marker you've
  placed, and assigns the resulting slices to this pad and the pads after
  it (capped at pad 16 — slices never wrap back around).
- **Clear Cuts** — removes any pending cut-point markers without chopping.
- **Slices** slider + **Auto-Slice** — divides the current region into N
  equal pieces automatically, same underlying chop as above, without
  needing to click cut-points by hand.
- **Transients** — an alternative to Auto-Slice: instead of N equal
  pieces, slices at the N *strongest detected hits* in the region (same N
  from the Slices slider). Better for a break or phrase where the real
  hits aren't evenly spaced; falls back to doing nothing if the region
  doesn't have that many clear transients, rather than guessing.
- **Quantize** toggle — when on, placing a cut point or dragging a trim
  handle snaps to the nearest beat-grid line (shown as faint vertical
  lines once a tempo is detected) instead of the exact pixel you clicked.
  With no detected tempo, it snaps to the nearest transient instead.
- **Trim Silence** — trims leading and trailing silence (below roughly
  -48dBFS) from the current region automatically. Only scans within the
  region you've already set, so running it again after a manual trim
  narrows further rather than re-scanning material you already cut away.
- **BPM / Key** readout — automatically detected when you load a sample
  (shows `--` for either if nothing could be estimated — a one-shot hit
  with no discernible tempo, for example). **Sync** sets this pad's Speed
  so its detected BPM matches your host's current tempo, one click.
- **Freq** toggle — switches the waveform from the plain gold colour to a
  tint by frequency content (bass-heavy = red, treble-heavy = blue), so
  you can spot where the low end and the brighter transients sit at a
  glance.
- **Zoom slider** — 0 (fully zoomed out) to fully zoomed in.
- **Ctrl+scroll** on the waveform — zooms in/out anchored to wherever your
  cursor is, like a code editor. Plain scroll (no ctrl) pans left/right
  once you're zoomed in.
