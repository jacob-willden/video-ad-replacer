/*
    @source: https://github.com/jacob-willden/video-ad-replacer/

    @licstart  The following is the entire license notice for the
    code in this page.

    This file is part of the Video Ad Replacer Extension Project.

    Video Ad Replacer Extension Project Copyright (C) 2021 Jacob Willden
    (Released under the GNU General Public License (GNU GPL) Version 3.0 or later)

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

function handleUpdated(tabId, changeInfo) {
	if (changeInfo.url) {
    	//console.log("URL changed to " + changeInfo.url);
		chrome.scripting.executeScript({file: "/content.js"});
    }
}

chrome.tabs.onUpdated.addListener(handleUpdated);

var extensionActivated = true;
chrome.action.setBadgeText({text: "On"});

chrome.action.onClicked.addListener(function() {
    extensionActivated = !extensionActivated;
    chrome.storage.local.set({adReplacerOn: extensionActivated});
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "toggleAdReplacer"});
    });
    if(extensionActivated) {
        chrome.action.setBadgeText({text: "On"});
    }
    else {
        chrome.action.setBadgeText({text: "Off"});
    }
    //console.log("extensionActivated: " + extensionActivated);
});

// Add promise error handling?