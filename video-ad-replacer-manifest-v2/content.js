/*
    @source: https://github.com/jacob-willden/video-ad-replacer/
    @source: https://github.com/rdp/sensible-cinema/
    @source: https://greasyfork.org/en/scripts/498197-auto-skip-youtube-ads

    @licstart  The following is the entire license notice for the
    code in this page.

    This file is part of the Video Ad Replacer Extension Project.

    Video Ad Replacer Extension Project Copyright (C) 2021 Jacob Willden
    (Released under the GNU General Public License (GNU GPL) Version 3.0 or later)

    Sensible Cinema (Play It My Way) Source Code Copyright (C) 2016, 2017, 2018 Roger Pack
    (Released under the Lesser General Public License (LGPL))

    Auto Skip YouTube Ads User Script Copyright (C) 2024 tientq64 (Tran Quang Tien)
    (Released under the MIT License (Expat Variation))

    Some of the code below is modified from the "edited_generic_player.js"
    source code file in the "chrome_extension" folder in the
    "html5_javascript" folder from the Sensible Cinema (Play It My Way)
    repository (source link above), and it is explicitly labled as so.

    Some code below is modified from the Auto Skip Youtube Ads JavaScript
    file linked above, and is explicitly labeled as so.

    Afformentioned source code derived and modified by Jacob Willden
    Inital Date of Derivation/Modification: November 5, 2021
    Latest Date of Derivation/Modification: July 5, 2024

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

'use strict';

var extensionActivated = true;

var myVideo = document.querySelector('video');
var setForAdvertisement = false;

chrome.runtime.onMessage.addListener(
    function(request) {
        if(request.message === "toggleAdReplacer") {
            chrome.storage.local.get(['adReplacerOn'], function(result) {
                extensionActivated = result.adReplacerOn;
            });
        }
    }
);

/* Function derived and modified from Auto Skip YouTube Ads,
which is under the MIT License (Expat Varation):

Copyright (c) 2024 tientq64

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
function skipIfPossible() {
    const skipButton = document.querySelector(`
        .ytp-skip-ad-button,
        .ytp-ad-skip-button,
        .ytp-ad-skip-button-modern
    `);
    if(skipButton) {
        skipButton.click();
    }
}

// Function derived and modified from "edited_generic_player.js" from Sensible Cinema (checkStatus)
function checkForAdvertisement() {
    var adIndicator = document.querySelector('.ytp-ad-player-overlay, .ytp-ad-button-icon');
    if((adIndicator) && (extensionActivated)) { // Ad is playing and extension is active
        if(setForAdvertisement === false) {
            //console.log('ad just started');
            setForAdvertisement = true;
            myVideo.muted = true;
            myVideo.style.opacity = 0;
        }
        else {
            skipIfPossible();
        }
    }
    else { // Ad is over now or the extension was deactivated
        if(setForAdvertisement === true) {
            //console.log('ad just ended');
            setForAdvertisement = false;
            myVideo.muted = false;
            myVideo.style.opacity = '';
        }
    }
}

setInterval(checkForAdvertisement, 10); // Keep interval going in case there's another ad

// Check if copyright-claimed and if so, add dialog element to notify users?

// Figure out how to include images, patterns, etc, in both the extension and the user script
// Add promise error handling?