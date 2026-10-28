![image](https://github.com/SuppliedOrange/VALORANT-Instalocker/assets/70258998/000c238b-c72e-4682-abc6-90fca7d2cbda)

# VALORANT Instalocker
A VALORANT instalocker with a clean GUI. The agent list is current through Hush (patch 13.09).

![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/Nanda070/VALORANT-Instalocker/total?style=flat-square&label=Total%20Downloads&color=brown)
![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads/Nanda070/VALORANT-Instalocker/latest/total?style=flat-square&label=Latest%20release&color=brown)

## Features

- Select an agent and it locks as soon as the pre-game screen exists
- Talks to the VALORANT API through [valclient](https://github.com/colinhartigan/valclient.py), separate from the game client
- Stop waiting, or switch agents, while a lock is in progress
- Stops sending requests when an error is found
- Refreshes every 3 seconds to limit API use

## Installation

[Link]: https://github.com/Nanda070/VALORANT-Instalocker/releases/latest 'Latest Release'
[Button Icon]: https://img.shields.io/badge/Releases-EF2D5E?style=for-the-badge&logoColor=white&logo=DocuSign
[![Button Icon]][Link]

Download `VALORANT.Instalocker.exe` from the latest release and run it.

Windows may block the unsigned file. Click **More info**, then **Run anyway**.

[Google Chrome](https://www.google.com/chrome/) is recommended. Without it, the app opens in the default browser.

## How to use

- Start VALORANT, then start this app.
- Pick an agent on the left. Locking starts on its own.
- Run with `--debug` to write `valorant_instalocker.log` if something fails.

## Can I get banned?

Using the VALORANT API this way is against Riot's Terms of Service. This app does not click the game window, read game memory, or change game files. That does not make it allowed, and a penalty is still possible.

## Building

The desktop app is Electron. The window opens at 853×476.

- `npm install`
- Run: `npm start`
- Installer: `npm run build` writes `VALORANT-Instalocker-Setup-<version>.exe` to `./dist`
- Publish that setup to GitHub Releases with `npm run publish`. The installed app checks those releases and asks before downloading an update.

Python still runs the same UI with `python main.py` after `python -m pip install -r requirements.txt`.

Right-click an agent and choose Favorite. Up to 3 favorites stay above the other agents, disappear from the main list, and are saved on this PC.

## Adding agents

Add the name and UUID in both `./main.py` and `./web/json/agents.json`. The on-screen order follows `agents.json`.

- Banner: `./web/assets/images/agent-banners/<name>.png` (lowercase)
- Preview: `./web/assets/images/agent-previews/<name>-preview.gif` (lowercase)

The banner is cropped with:

```css
.agent-thumb {
  max-width: 40vw;
  height: 7vw;
  object-fit: cover;
  object-position: 0vw -6vw;
  position: absolute;
  z-index: -1;
  aspect-ratio: 20 / 3;
  transform: skewY(5deg);
  transition: transform 0.2s;
}
```

## Support / Feedback

- Discord: [Nandak070](https://discord.com/users/1219803151180370021)

## History

- **2023** — [SuppliedOrange](https://github.com/SuppliedOrange) releases VALORANT Instalocker, based on [valorant-agent-yoinker](https://github.com/deadly/valorant-agent-yoinker) and [valclient](https://github.com/colinhartigan/valclient.py). Black-background banners by [ExCharny](https://www.deviantart.com/excharny). Clove banner by [slynxoxo](https://twitter.com/slynxoxo/status/1771862541850861971). Previews from the [VALORANT Giphy page](https://giphy.com/playvalorant). munibug gif by [@walfieee](https://twitter.com/walfieee). Icon by [u/Odeuo](https://www.reddit.com/user/Odeuo/).
- **2024–2025** — Iso, Clove, Vyse, Tejo, and Waylay are added as they release.
- **May 2026** — [p0oru](https://github.com/p0oru) moves the app onto a maintained valclient fork. SuppliedOrange ships v1.5 with Miks and Veto. Some later banners and previews are from unknown sources.
- **October 2026** — [Nanda070](https://github.com/Nanda070) adds Hush, favorite agents, an Electron installer, and update checks against GitHub Releases.

## Legal

This project is not affiliated with Riot Games.
If you are a Riot representative and want this repository taken down, contact [Nandak070](https://discord.com/users/1219803151180370021) from an official account.
