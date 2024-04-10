export const clientId = "1218429931877437461";
export const appID = 553850;
export const title = "HELLDIVERS™ 2";

const resources = {
    "cover": "https://raw.githubusercontent.com/angelolz/SteamRPC/helldivers2/profiles/Helldivers2/resources/game_icon.jpg",
    "icons": {
        "automatons": "https://raw.githubusercontent.com/angelolz/SteamRPC/helldivers2/profiles/Helldivers2/resources/automaton_icon.png",
        "terminids": "https://raw.githubusercontent.com/angelolz/SteamRPC/helldivers2/profiles/Helldivers2/resources/terminid_icon.png"
    }
};

let lastSteamRichPresence = null; // Variable for tracking the previous Steam Rich Presence status
let startTime = null; // Variable for saving the start time

export function translateSteamPresence(steamRichPresence) {
    let discordRichPresence = {};

    discordRichPresence.largeImageKey = resources.cover;
    discordRichPresence.details = steamRichPresence;

    // Check whether this is the first update or a change in the Steam Rich Presence status
    if (lastSteamRichPresence !== steamRichPresence) {
        startTime = Math.floor(Date.now() / 1000); // Update start time when the status changes
    }

    discordRichPresence.startTimestamp = startTime; // Set startTimestamp to the saved start time

    switch(steamRichPresence) {
        case "Tutorial Mission":
            discordRichPresence.details = "In a mission";
            discordRichPresence.state = "Tutorial";
            break;
        case "Fighting Terminids":
            discordRichPresence.details = "In a mission";
            discordRichPresence.state = "Fighting Terminids";
            discordRichPresence.smallImageKey = resources.icons.terminids;
            break;
        case "Fighting Automatons":
            discordRichPresence.details = "In a mission";
            discordRichPresence.state = "Fighting Automatons";
            discordRichPresence.smallImageKey = resources.icons.automatons;
            break;
    }

    lastSteamRichPresence = steamRichPresence; // Update the last Steam Rich Presence status

    return discordRichPresence;
}
