/*
    @source: https://github.com/jacob-willden/video-ad-replacer/
    @source: https://github.com/rdp/sensible-cinema/

    @licstart  The following is the entire license notice for the
    code in this page.

    This file is part of the Video Ad Replacer Extension Project.

    Video Ad Replacer Extension Project Copyright (C) 2021 Jacob Willden
    (Released under the GNU General Public License (GNU GPL) Version 3.0 or later)

    Sensible Cinema (Play It My Way) Source Code Copyright (C) 2016, 2017, 2018 Roger Pack 
    (Released under the Lesser General Public License (LGPL))

    Some of the code below is modified from the "edited_generic_player.js"
    source code file in the "chrome_extension" folder in the 
    "html5_javascript" folder from the Sensible Cinema (Play It My Way) 
    repository (source link above), and it is explicitly labled as so.

    Afformentioned source code derived and modified by Jacob Willden
    Date of Derivation/Modification: November 5, 2021

    The Video Ad Replacer Extension Project is free software: 
    you can redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The project is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    the code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.

    You should have recieved a copy of the GNU General Public License
    along with this project. Otherwise, see: https://www.gnu.org/licenses/

    @licend  The above is the entire license notice for the 
    code in this page.
*/

var extensionActivated = true;

var myVideo = document.querySelector('video');
var setForAdvertisement = false;

chrome.runtime.onMessage.addListener(
    function(request) {
        if(request.message === "toggleAdReplacer") {
            extensionActivated = request.extensionActivated;
        }
    }
);

// Function derived and modified from "edited_generic_player.js" from Sensible Cinema (checkStatus)
function checkForAdvertisement() {
    var adIndicator = document.querySelector('.ytp-ad-player-overlay');
    if((adIndicator) && (extensionActivated)) { // Ad is playing and extension is active
        if(setForAdvertisement === false) {
            console.log('ad just started');
            setForAdvertisement = true;
            myVideo.muted = true;
            myVideo.style.opacity = 0;
        }
    }
    else { // Ad is over now or the extension was deactivated
        if(setForAdvertisement === true) {
            console.log('ad just ended');
            setForAdvertisement = false;
            myVideo.muted = false;
            myVideo.style.opacity = '';
        }
    }
}

setInterval(checkForAdvertisement, 10); // Keep interval going in case there's another ad

// Check if needs storage to keep extension from turning on when not wanted?