# Gundam Breaker 4 Gunpla Mixer

A lightweight build randomizer for Gundam Breaker 4 designed to generate custom Gunpla loadouts using parts and kits available in-game.

Gunpla Mixer was created as a small passion project for fans who enjoy experimenting with randomized builds, challenge runs, and unique customization combinations. The application uses a curated database of mobile suit parts to generate randomized configurations across multiple equipment categories while maintaining a simple and fast workflow.

## Purpose

Gunpla Mixer was created as a lightweight companion tool for players of Gundam Breaker 4 who enjoy experimenting with custom builds, challenge runs, and unconventional part combinations.

One of the core appeals of Gundam Breaker is the ability to freely customize mobile suits using parts collected throughout the game. Gunpla Mixer was designed to expand on that idea by introducing randomized generation, encouraging players to create builds they may not have otherwise considered.

The project can be used in several different ways:

* Generating random builds for challenge runs
* Creating inspiration for future Gunpla designs
* Encouraging experimentation with unfamiliar parts or kits
* Adding variety to gameplay sessions and livestreams
* Creating community challenges or randomized tournaments

The inclusion of export functionality allows generated builds to be archived, shared, or reused later, making the tool useful both casually and for organized community activities.

## Why This Project Was Made

Gunpla Mixer began as a personal side project created out of an interest in both Gunpla customization systems and retro terminal-style software aesthetics.

The original goal was simple: create a fast and easy way to randomize mobile suit parts without needing external spreadsheets, manual selection methods, or complicated setup. Over time, the project evolved into a more polished standalone utility with multiple interface variants and export support.

The project was also developed with livestream use in mind. The included batch launcher and lightweight workflow make it easy to integrate into streaming setups, including tools such as Stream Deck for quick execution during live sessions.

Although the application serves a relatively niche audience, it was built specifically for fans who enjoy customization-heavy gameplay systems and community-driven experimentation.


## Overview

The software randomly generates a complete build configuration by selecting parts from the following categories:

* Head
* Body
* Left Arm
* Right Arm
* Chest
* Backpack

Generated builds are displayed directly in the application and can be exported as both `.txt` and `.json` files for archival, sharing, or future use.

The project is written entirely in Python and includes a Windows `.bat` launcher for simplified execution. This was primarily added to improve accessibility for users who may encounter issues launching Python scripts directly, while also allowing the application to be easily integrated with tools such as Stream Deck profiles for livestream use.

---

## Installation

1. Install Python 3
2. Download the repository
3. Place the `.py` and `.bat` files in the same folder
4. Run:

```bash
GunplaMixer.bat
```

**OR** in Windows, double click the `GunplaMixer.bat` file and wait.

---

## Project Status

Gunpla Mixer is currently considered feature-complete. No major functionality updates are planned at this time, although future revisions remain possible depending on community interest and personal development goals.

A future HTML/web-based version of the project is currently planned.

As this is a niche community tool and personal side project, development updates may occur irregularly.

---

## Web Application

The browser-based version of Gunpla Mixer is available here:

[GunplaMixer Web App](https://gunplamixer.vercel.app/?utm_source=chatgpt.com)

---

# Versions

## GunplaMixer v1 (Classic)

The original release of Gunpla Mixer focused entirely on core functionality. The interface was intentionally minimal, prioritizing fast generation and ease of use without additional visual effects or interface styling.

---

## GunplaMixer v2 & v3

Versions 2 and 3 retained the same core functionality introduced in v1 while redesigning the presentation layer to resemble retro computer terminals and cinematic command-line systems.

These releases focused primarily on visual identity and atmosphere rather than introducing new features.

---

## GunplaMixer v4

Version 4 represents the most refined release of the project to date.

This release introduces export support for both `.txt` and `.json` generation files, along with structural improvements and a redesigned user experience. The standard edition continues the terminal-inspired visual presentation introduced in previous releases while refining the overall interface and workflow.

---

## GunplaMixer v4 (Classic)

GunplaMixer v4 (Classic) includes all functionality and export improvements introduced in the standard v4 release while removing the additional visual styling and interface effects.

This version is intended for users who prefer a cleaner and more minimal presentation.


