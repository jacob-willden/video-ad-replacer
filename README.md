# video-ad-replacer
Support content creators while replacing video advertisements with pleasant alternatives.

[Project Source Code on Codeberg](https://codeberg.org/jacobwillden/video-ad-replacer)

## Introduction
Many advertisements on video services like Youtube are inappropriate or center around highly sensitive topics. While one can normally click a link to "Stop seeing this ad" on Youtube, not all ads provide this option, including ads that can be demeaning or otherwise uncomfortable to the viewer. In response, many viewers have looked to ad-blockers, at the expense of being unable to financially support content creators or others. This extension is meant to act as a compromise, where video advertisements will play through, but the video is hidden and the audio is muted for the duration of each advertisement. In the future, I intend to have it include images, patterns, and so on in place of the video ads (still trying to figure out how, particularly for the user script version).

## Installation Instructions

### Chromium Browsers (for testing purposes)

1. Download the repository and extract the ZIP file

2. Go to the Extensions area of your browser and make sure "Developer mode" is on

3. Click the "Load unpacked" button

4. Inside the "video-ad-replacer" folder, either select the "video-ad-replacer-manifest-v3" folder or the "video-ad-replacer-manifest-v2" folder

### Firefox (for testing purposes)

1. Download the repository and extract the ZIP file

2. Enter "about:debugging" into the address bar and click "This Firefox"

3. Click "Load Temporary Add-on"

4. Inside the "video-ad-replacer" folder, select the "manifest.json" file inside either the "video-ad-replacer-manifest-v3" folder or the "video-ad-replacer-manifest-v2" folder

The folder you select will depend on your browser and browser version. If it supports manifest version 3, select the folder that ends in "manifest-v3". Otherwise, select the folder that ends in "manifest-v2".

For Firefox Testing: Since Firefox can only install unsigned extensions as temporary add-ons, you will need to reload the extension each time you restart the browser.

### Safari (for testing purposes)

Since Apple does not allow Safari extensions that use GPL-licensed code, I made the extension's functionality available as a user script instead.

1. Install a user script extension for Safari through the App Store, such
as Violentmonkey or Userscripts

2. Copy the [user script](https://codeberg.org/jacobwillden/video-ad-replacer/src/branch/main/video-ad-replacer.user.js)

3. Paste the script into the user script extension and save it