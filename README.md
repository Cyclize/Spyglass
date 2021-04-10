# Spyglass
🔍 Minecraft bot that detects messages containing profanity words

## Usage
1. Join `luckynetwork.net` with your desired bot name.
2. Register the account (Remember the password, you'll need it).
3. Clone this GitHub repository or download it as a ZIP and extract it.
4. Configure the `config.json` with the bot name you joined with, the password you registered with, the gamemode you'd like to monitor, and a discord wewbhook URL.
5. Open a terminal like Command Prompt.
6. Go to the directory containing `index.js`.
7. Run `node index.js` and wait.
8. Now the bot should join the gamemode, and you should be able to see the website on https://localhost:6000
9. (Optional) If you want to allow anyone to access the site, I suggest using cloudflared.

## Note
You almost CANNOT run this bot on any hosting provider. It should only be run from your personal computer. This is caused due to Lucky Network's Anti VPN flagging hosting providers as VPNs and blocking the bot from being able to join.
