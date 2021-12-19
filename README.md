# video-ad-replacer
Support content creators while replacing video advertisements with pleasant alternatives.

## Introduction
Many advertisements on video services like Youtube are inappropriate or center around highly sensitive topics. While one can normally click a link to "Stop seeing this ad" on Youtube, not all ads provide this option, including ads that can be demeaning or otherwise uncomfortable to the viewer. In response, many viewers have looked to ad-blockers, at the expense of being unable to financially support content creators or others. This extension is meant to act as a compromise, where video advertisements will play through, but the video is hidden and the audio is muted for the duration of each advertisement.

## Source Code
The source code is freely available to copy and build on, released under the GNU General Public License (GNU GPL). It is linked below, along with the source code for Play It My Way (Sensible Cinema), which this project is built on:

Project Source Code Link: https://github.com/jacob-willden/video-ad-replacer/

Play It My Way Source Code Link: https://github.com/rdp/sensible-cinema/

## Installation Instructions

### Chromium Browsers (for testing purposes)

1. Download the repository and extract the ZIP file

2. Go to the Extensions area of your browser and make sure "Developer mode" is on

3. Click the "Load unpacked" button

4. Select the "video-ad-replacer" folder

### Firefox (for testing purposes)

1. Download the repository and extract the ZIP file

2. Enter "about:debugging" into the address bar and click "This Firefox"

3. Click "Load Temporary Add-on"

4. Select the "manifest.json" file inside the "video-ad-replacer" folder

(For Firefox Testing: Since Firefox can only install unsigned extensions as temporary add-ons, you will need to reload the extension each time you restart the browser.)

### Safari (for testing purposes)

Since Apple does not allow Safari extensions that use GPL-licensed code, I made the extension's functionality available as a user script instead.

1. Install a user script extension for Safari through the App Store, such as Tampermonkey or Userscripts

2. Copy the user script, available here: https://gist.github.com/jacob-willden/c0483aaf56ad48965ac2c9d0a1c350c4

3. Paste the script into the user script extension and save it
