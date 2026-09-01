# The History of VST Plugins: VST, VSTi, VST2, VSTi2, VST3, VSTi3 and CLAP

## Overview

**VST (Virtual Studio Technology)** is a plugin standard created by Steinberg that allows audio software—usually a DAW (Digital Audio Workstation)—to load third-party effects and instruments.

Over time, the ecosystem evolved from the original VST specification into several generations and related technologies:

- **VST** — the original Virtual Studio Technology standard
- **VSTi** — the instrument category commonly used for software synthesizers and samplers
- **VST2 / VST2.x** — the second major generation of VST
- **VSTi2** — commonly used to describe VST2-based instruments
- **VST3** — the modern Steinberg plugin architecture
- **VSTi3** — commonly used informally to describe a VST3 instrument
- **CLAP** — a newer, open plugin standard designed by u-he and Bitwig with modern DAW/plugin workflows in mind

> **Important terminology note:** VSTi, VSTi2 and VSTi3 are primarily labels used to distinguish *instrument plugins* from *audio-effect plugins*. They are not completely separate standards in the same sense as VST2 and VST3.

---

# 1. Before VST: The Plugin Problem

In the early days of computer-based music production, DAWs and audio applications generally had their own architectures for effects and instruments.

This created a problem:

> A developer could not easily create one plugin that worked across multiple audio applications.

The industry needed a common interface between:

**DAW → Plugin → Audio/MIDI**

A standardized plugin API would allow independent developers to create software instruments and effects that could be loaded into compatible hosts.

Steinberg, the German company behind Cubase, developed VST to address this problem.

---

# 2. VST — Virtual Studio Technology

## 1996: VST is introduced

Steinberg introduced **VST (Virtual Studio Technology)** in **1996**.

VST originally appeared with **Cubase 3.02** and was designed primarily around audio effects.

The basic concept was straightforward:

```text
DAW
 │
 ├── Audio input
 │
 ▼
VST Plugin
 │
 ├── Audio processing
 │
 ▼
DAW
```

A plugin could receive audio from the host, process it, and return the result.

This was revolutionary because developers could build effects independently of the DAW itself.

Examples of VST-style effects include:

- EQ
- Compressor
- Reverb
- Delay
- Distortion
- Chorus
- Flanger
- Phaser

## The importance of VST

VST helped establish the modern plugin ecosystem.

Instead of buying an entire new workstation to get a new effect, musicians could install an individual plugin.

This created a new software market around:

- plugin developers
- synthesizer developers
- sample-library companies
- effects companies
- independent developers
- DAW manufacturers

---

# 3. VSTi — Virtual Studio Technology Instrument

## What does the "i" mean?

**VSTi** means **VST Instrument**.

It refers to a VST plugin designed to generate audio rather than merely process incoming audio.

A traditional VST effect might work like:

```text
Audio
  │
  ▼
VST Effect
  │
  ▼
Processed Audio
```

A VST instrument works more like:

```text
MIDI / Host Events
        │
        ▼
    VST Instrument
        │
        ▼
      Audio
```

This made VST suitable for:

- synthesizers
- samplers
- drum machines
- virtual pianos
- virtual organs
- orchestral instruments
- bass instruments
- modular synthesizers

## Why VSTi became important

VSTi helped turn the computer into a complete virtual studio.

Instead of needing separate hardware for every instrument, producers could run multiple software instruments inside their DAW.

For example:

```text
DAW
 │
 ├── Drum VSTi
 ├── Piano VSTi
 ├── Bass VSTi
 ├── Synth VSTi
 └── Strings VSTi
```

The term **VSTi** became widely used even though the underlying technology remained part of the broader VST ecosystem.

---

# 4. VST2

## Late 1990s / early 2000s

Steinberg subsequently developed **VST2**, introducing significant improvements over the original VST specification.

VST2 became one of the most important plugin standards in music-production history.

It supported capabilities such as:

- MIDI input
- MIDI output
- automation
- parameter management
- improved plugin communication
- more sophisticated instrument functionality
- multiple audio inputs and outputs
- plugin identification and configuration

The VST2 architecture became extremely widespread.

For many years, when someone said:

> "VST plugin"

they often meant a VST2 plugin.

---

# 5. VSTi2

**VSTi2** is generally a descriptive term for a **VST2-based instrument plugin**.

It is useful to understand the terminology this way:

| Term | Meaning |
|---|---|
| VST | Original/general VST technology |
| VSTi | VST instrument |
| VST2 | Second-generation VST architecture |
| VSTi2 | VST2 instrument |

A VSTi2 plugin could receive MIDI events and generate audio.

For example:

```text
MIDI Keyboard
      │
      ▼
     DAW
      │
      ▼
   VSTi2
      │
      ▼
    Audio
```

The distinction between VST2 effects and VST2 instruments became particularly important as virtual instruments became a major part of music production.

---

# 6. The VST2 Era

VST2 became dominant across the music-production industry.

It was supported by a huge range of applications and hardware/software ecosystems.

Notable DAWs that supported VST technology included:

- Cubase
- Nuendo
- FL Studio
- Ableton Live
- REAPER
- Studio One
- Cakewalk
- Tracktion and related hosts
- many smaller audio applications

The ecosystem also produced thousands of commercial and freeware plugins.

## The VST plugin folder

On Windows, VST2 plugins traditionally became associated with a `.dll` file.

A typical installation could look like:

```text
C:\VSTPlugins    Compressor.dll
    Reverb.dll
    Synth.dll
```

On macOS, VST2 plugins traditionally used the `.vst` bundle format.

This simple deployment model contributed to VST2's popularity.

---

# 7. Limitations of VST2

Despite its success, VST2 had architectural limitations.

As DAWs became more sophisticated, developers wanted better support for:

- dynamic I/O
- better parameter handling
- more precise automation
- efficient CPU usage
- side-chain routing
- event processing
- multiple instruments
- modern plugin workflows
- improved plugin state management

Steinberg therefore developed a new generation.

---

# 8. VST3

## 2008: VST3 is released

Steinberg introduced **VST3 in 2008**.

VST3 was not simply a minor revision of VST2.

It represented a significant redesign of the plugin architecture.

One of its major goals was to make plugin communication more flexible and efficient.

---

# 9. Major VST3 Improvements

## 9.1 Dynamic I/O

VST3 allows plugins to expose and manage inputs and outputs more flexibly.

This is particularly useful for plugins supporting:

- stereo
- mono
- surround
- multi-output instruments
- sidechains
- complex routing

---

## 9.2 Parameter-based processing

VST3 introduced a more structured approach to parameter communication.

Rather than treating automation simply as a stream of generic control changes, hosts can communicate parameter changes with more detailed timing information.

This can improve automation accuracy.

---

## 9.3 Better CPU efficiency

One of the best-known VST3 concepts is the ability for a plugin to avoid processing when it does not need to.

For example:

```text
No audio
   │
   ▼
Plugin can become inactive
   │
   ▼
CPU usage reduced
```

This can be particularly useful when a project contains many plugins.

---

## 9.4 Sidechains

VST3 provides standardized mechanisms for additional audio inputs.

This makes workflows such as:

```text
Kick ──────────────┐
                   ▼
              Compressor
                   ▲
Bass ──────────────┘
```

easier for hosts to implement.

---

## 9.5 Improved MIDI/event handling

VST3 has a more generalized event model.

This allows hosts and plugins to communicate things such as:

- MIDI events
- note events
- note expression
- controller events
- timing information

This became increasingly important for modern virtual instruments.

---

# 10. VSTi3

**VSTi3** is generally used to mean a **VST3 instrument**.

Again, the terminology is mostly descriptive rather than representing a completely separate plugin standard.

Conceptually:

```text
VST3 Effect
    │
    └── Processes audio

VSTi3
    │
    └── Generates audio from MIDI/events
```

Examples include:

- synthesizers
- samplers
- drum instruments
- piano instruments
- orchestral instruments

A VST3 instrument may expose multiple outputs:

```text
VST3 Instrument
 │
 ├── Main
 ├── Kick
 ├── Snare
 ├── Percussion
 └── FX
```

This is particularly useful for drum and multi-instrument plugins.

---

# 11. VST2 vs VST3

| Feature | VST2 | VST3 |
|---|---|---|
| Architecture | Older generation | Newer architecture |
| MIDI | Supported | Supported through event system |
| Dynamic I/O | More limited | Stronger support |
| Sidechain | Host/plugin-dependent implementations | Standardized architecture |
| Parameter handling | Older model | More structured |
| Automation | Supported | Improved timing/parameter model |
| CPU optimization | More limited | Better idle/bypass behavior |
| Multi-output instruments | Supported | Strong support |
| Modern note/event workflows | Limited | More advanced |
| Current development direction | Legacy | Steinberg's current VST generation |

---

# 12. VST2's Discontinuation

One of the biggest events in the history of VST was Steinberg's decision to discontinue licensing the VST2 SDK.

Steinberg stopped distributing the VST2 SDK to new developers and moved its ecosystem toward VST3.

This created a long transition period.

For years, many DAWs supported both:

```text
VST2
VST3
```

Developers often shipped both versions of their plugins.

Eventually, more hosts began removing VST2 support.

---

# 13. Why VST2 Still Matters

Even though VST2 is considered legacy, it remains historically important.

Many older projects contain VST2 plugins.

This creates compatibility concerns.

A project created in 2012 might contain:

```text
Synth VST2
EQ VST2
Compressor VST2
Reverb VST2
```

If a modern DAW removes VST2 support, opening the old project can become more complicated.

For this reason, professional studios sometimes maintain older DAW/plugin environments for archival compatibility.

---

# 14. VST3 Plugin File Formats

VST3 plugins use a different packaging approach from traditional VST2 plugins.

On Windows, a VST3 plugin is commonly distributed as a `.vst3` bundle/package.

Typical locations include:

```text
C:\Program Files\Common Files\VST3```

On macOS:

```text
/Library/Audio/Plug-Ins/VST3/
```

The exact installation location can vary by operating system and installer.

---

# 15. The Emergence of CLAP

## What is CLAP?

**CLAP** stands for **CLever Audio Plug-in API**.

CLAP is a newer audio plugin standard created by **u-he and Bitwig**.

It was publicly introduced in **2022**.

CLAP was designed to address some limitations and historical constraints of older plugin standards while providing a modern API for both plugin developers and DAW developers.

The philosophy behind CLAP is strongly focused on:

- modern plugin architectures
- extensibility
- efficient processing
- precise timing
- modulation
- automation
- expressive note handling
- better host/plugin communication
- openness

---

# 16. Why CLAP Was Created

VST3 is powerful, but its ecosystem is controlled by Steinberg.

CLAP takes a different approach.

It is designed as an open specification rather than a proprietary vendor-controlled format.

This gives DAW and plugin developers more freedom to evolve the ecosystem.

The broad idea is:

```text
Traditional ecosystem:

DAW
 │
 ▼
Vendor-controlled API
 │
 ▼
Plugin


CLAP philosophy:

DAW
 │
 ▼
Open plugin API
 │
 ▼
Plugin
```

---

# 17. CLAP's Major Features

## 17.1 Open specification

CLAP is designed to be openly developed and implemented.

This makes it attractive to developers who want an alternative to proprietary plugin SDK ecosystems.

---

## 17.2 Thread-safe design

CLAP places considerable emphasis on clear separation of responsibilities between real-time audio processing and other operations.

This is important because audio threads have strict timing requirements.

A plugin must avoid operations that could cause unpredictable delays during real-time processing.

---

## 17.3 Per-note expression

CLAP has strong support for note-level expression.

This can be important for modern expressive controllers and workflows.

Instead of thinking only in terms of:

```text
Track → MIDI channel → Instrument
```

a host can work with:

```text
Note 1 → pitch/expression
Note 2 → pitch/expression
Note 3 → pitch/expression
```

This makes sophisticated polyphonic expression workflows easier to represent.

---

# 18. CLAP and Modulation

One of CLAP's major goals is improving host/plugin interaction around modulation.

Traditional automation often looks like:

```text
Automation lane
      │
      ▼
Plugin parameter
```

Modern production can require much more:

```text
LFO ──────────────┐
Envelope ─────────┤
MIDI controller ──┤
Automation ───────┤
                  ▼
             Plugin parameter
```

CLAP provides mechanisms intended to allow hosts and plugins to work together more flexibly in this area.

---

# 19. CLAP and Multiple Plugin Types

CLAP does not use a separate "VSTi-style" standard for instruments.

Instead, CLAP plugins advertise their capabilities/categories.

A plugin can be:

- an instrument
- an audio effect
- a MIDI effect
- a synthesizer
- a sampler
- a utility
- a multi-function processor

So the distinction is conceptually:

```text
VST ecosystem

VST2
 ├── Effect
 └── VSTi

VST3
 ├── Effect
 └── VSTi3


CLAP

CLAP
 ├── Instrument
 ├── Effect
 ├── MIDI processor
 └── Other plugin categories
```

---

# 20. CLAP vs VST3

| Feature | VST3 | CLAP |
|---|---|---|
| Introduced | 2008 | 2022 |
| Organization | Steinberg | Open specification developed by multiple ecosystem participants |
| Primary goal | Modernize VST architecture | Modern, extensible plugin architecture |
| Open specification | No | Yes |
| Dynamic I/O | Yes | Yes |
| Automation | Advanced | Advanced |
| Note expression | Yes | Strong native support |
| Modulation | Supported | Strong emphasis |
| Extensibility | Yes | Strong emphasis |
| Real-time design | Yes | Strong emphasis |
| Current ecosystem size | Very large | Smaller but growing |
| Legacy compatibility | VST ecosystem | New format |

---

# 21. VST, VSTi, VST2, VSTi2, VST3 and VSTi3 — The Simple Relationship

The easiest way to understand the terminology is:

```text
                         VST
                          │
             ┌────────────┴────────────┐
             │                         │
          Effects                  Instruments
             │                         │
           VST                     VSTi
             │                         │
          VST2.x                  VSTi2
             │
          VST3
             │
          VSTi3
```

More accurately:

```text
VST = the technology family

VST2 = second-generation VST architecture
VSTi2 = VST2 instrument

VST3 = newer VST architecture
VSTi3 = VST3 instrument
```

And alongside it:

```text
CLAP
 │
 ├── Instruments
 ├── Effects
 ├── MIDI processors
 └── Other plugin types
```

---

# 22. Common Plugin Formats Today

Modern DAWs may support several plugin standards simultaneously.

A typical Windows system might contain:

```text
C:\Program Files\Common Files\VST3    Synth.vst3
    Reverb.vst3

C:\VSTPlugins    LegacySynth.dll
    LegacyReverb.dll
```

And a modern DAW might scan:

```text
VST2
VST3
CLAP
```

depending on its capabilities.

Other plugin standards also exist, including:

- **Audio Units (AU/AUv2/AUv3)** — Apple's plugin ecosystem
- **AAX** — Avid Pro Tools
- **LV2** — an open Linux-oriented plugin standard
- **Standalone formats** — applications that run independently rather than as DAW plugins

---

# 23. VST vs AU vs AAX vs CLAP

The plugin ecosystem is not limited to VST.

| Format | Main ecosystem |
|---|---|
| VST2 | Cross-platform legacy ecosystem |
| VST3 | Steinberg / broad cross-platform DAW ecosystem |
| AU | Apple platforms |
| AAX | Pro Tools |
| LV2 | Linux/open-source ecosystem |
| CLAP | New open cross-platform ecosystem |

A developer may therefore release the same instrument in several formats:

```text
MySynth
 │
 ├── VST3
 ├── CLAP
 ├── AU
 └── AAX
```

The underlying synthesizer engine can be largely the same while the plugin wrapper/interface differs for each format.

---

# 24. Why Plugin Formats Matter to Developers

If you are building a synthesizer or audio effect, the format determines how your code communicates with the DAW.

Conceptually:

```text
                 DSP ENGINE
                     │
          ┌──────────┼──────────┐
          │          │          │
        VST3        CLAP        AU
          │          │          │
          └──────────┼──────────┘
                     │
                    DAW
```

The **DSP engine** contains your actual audio processing.

The plugin format acts as an interface between that engine and the host.

This is why frameworks such as JUCE and iPlug2 are popular: they can abstract much of the format-specific implementation.

---

# 25. Plugin Format vs Plugin Type

A common source of confusion is treating these concepts as identical.

They are not.

### Format

Describes the plugin API/standard.

Examples:

- VST2
- VST3
- CLAP
- AU
- AAX

### Type

Describes what the plugin does.

Examples:

- instrument
- synthesizer
- sampler
- compressor
- EQ
- reverb
- MIDI processor

Therefore:

```text
VST3 synthesizer
```

means:

```text
Format = VST3
Type = Instrument
```

Likewise:

```text
CLAP synthesizer
```

means:

```text
Format = CLAP
Type = Instrument
```

---

# 26. A Historical Timeline

```text
1996
 │
 └── Steinberg introduces VST
       │
       ▼
Late 1990s
 │
 └── VST evolves and VST instruments become important
       │
       ▼
VST2 era
 │
 ├── MIDI support
 ├── automation
 ├── virtual instruments
 └── enormous plugin ecosystem
       │
       ▼
2008
 │
 └── VST3 introduced
       │
       ├── dynamic I/O
       ├── improved parameter model
       ├── event handling
       └── improved processing efficiency
       │
       ▼
2010s
 │
 └── VST2 + VST3 coexist
       │
       ▼
Late 2010s / 2020s
 │
 └── VST2 becomes legacy
       │
       ▼
2022
 │
 └── CLAP introduced
       │
       ├── open specification
       ├── modern extensibility
       ├── note expression
       ├── modulation
       └── modern real-time architecture
       │
       ▼
2020s
 │
 └── VST3 remains dominant
       │
       └── CLAP establishes itself as a growing alternative
```

---

# 27. The Big Picture

The evolution can be summarized as:

```text
VST
 │
 │  Standardized DAW ↔ plugin communication
 ▼
VSTi
 │
 │  Software instruments become part of the ecosystem
 ▼
VST2
 │
 │  Mature plugin platform
 │
 ├── VST effects
 └── VSTi2 instruments
 ▼
VST3
 │
 │  Modernized architecture
 │
 ├── VST3 effects
 └── VSTi3 instruments
 ▼
CLAP
 │
 │  New open architecture
 │
 ├── Instruments
 ├── Effects
 ├── MIDI processors
 └── extensible modern workflows
```

---

# 28. Which Format Should Developers Use?

For a **new commercial plugin in 2026**, a sensible strategy is generally:

### VST3

Support VST3 because it has broad DAW adoption and is an established modern format.

### CLAP

Consider CLAP if your target users include DAWs and workflows that support it. CLAP is particularly interesting for developers who value an open, extensible plugin ecosystem and modern modulation/note workflows.

### AU

Support AU when targeting Apple users and DAWs that depend on Apple's Audio Unit ecosystem.

### AAX

Support AAX if Pro Tools compatibility is important.

A modern product might therefore ship:

```text
MySynth
├── VST3
├── CLAP
├── AU
└── AAX
```

The decision ultimately depends on target DAWs, operating systems, development resources and distribution strategy.

---

# 29. Key Takeaways

1. **VST** was created by Steinberg and helped establish the modern DAW plugin ecosystem.
2. **VSTi** means a VST instrument.
3. **VST2** was a major evolution of the original VST technology and became hugely popular.
4. **VSTi2** generally means a VST2-based instrument.
5. **VST3** is Steinberg's newer plugin architecture, introduced in 2008.
6. **VSTi3** generally means a VST3 instrument.
7. **VST2 is now a legacy technology**, while VST3 is the modern Steinberg format.
8. **CLAP** is a newer, open plugin API introduced in 2022.
9. VSTi/VSTi2/VSTi3 describe **instrument plugins**, rather than entirely independent plugin standards.
10. A plugin's **format** and its **function** are separate concepts.
11. VST3 remains extremely important because of its broad DAW support.
12. CLAP provides an increasingly important open alternative focused on modern host/plugin interaction.

---

# 30. One-Sentence Summary

**VST created the modern DAW plugin ecosystem, VST2 made it ubiquitous, VST3 modernized the architecture, VSTi became the shorthand for software instruments, and CLAP represents a newer open approach to plugin-host communication.**

