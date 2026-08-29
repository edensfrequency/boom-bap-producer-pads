[&larr; Back to Usage overview](../../../USAGE.md) | [INSTALL](../../../INSTALL.md) | [LICENSE](../../../LICENSE.md) | [CHANGELOG](../../../CHANGELOG.md)
<hr>

![banner-image.png](../../../../assets/banner-image.png)

<hr>


# ARRANGEMENT tab

Build a timeline out of your 4 kit banks (see [The pad grid & sample
browser](../pads/pad-grid-and-browser.md) for what a bank is) — sections you can
arrange into a song structure instead of switching banks by hand.

- **+ Add** — adds a new section (4 bars, same bank as the last section
  you added).
- **Double-click** a section, or right-click and choose **Rename...**,
  to give it a name (e.g. "Intro", "Chorus") — leave it blank to fall
  back to showing which bank it plays.
- **Drag a section's right edge** to resize it, in whole bars.
- **Drag a section** to reorder it within the timeline — a gold line
  shows where it'll land.
- **Right-click → Edit Next Action...** to choose what happens when a
  section finishes:
  - **Continue to Next** (default) — play the next section in order.
  - **Jump to Entry...** — jump to a specific other section instead. The
    section shows a curved arrow to its target, plus a small "-> N"
    label.
  - **Hold Forever** — repeat this section indefinitely. Shown with a
    small looping-arrow icon on the section itself.
- **Right-click → Delete** removes a section.
- Each section's block width is proportional to its length in bars, so
  longer sections are visibly wider.

**Arrangement Mode** (toolbar toggle, next to Mono) turns the timeline
on: while it's on, playback advances through your sections automatically
following each section's Next Action — a gold highlight shows which one
is currently playing — and the SEQ tab's A/B/C/D bank buttons are
disabled, since the timeline is what's driving bank switches now. Turn
it back off to return to switching banks by hand.
