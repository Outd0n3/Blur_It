# BlurIT Chrome Extension

## Overview
BlurIT is a Chrome extension that allows users to blur videos, images, and thumbnails on any webpage within the currently active Chrome tab. The extension is conveniently toggled with an on/off switch through the Chrome toolbar icon, and blurring effects can be reversed at any time, restoring the original content.

## Features
- Toggle blur effect on/off with a single click
- Blur videos, images, and thumbnails across all websites
- No complicated settings page; simple and easy to use
- Fully functional in incognito mode

## Technologies
This extension leverages the following technologies:
- HTML
- CSS3
- JavaScript
- Node.js
- Express
- Canvas API
- Chrome Extensions API

## Files and Structure
The following files are implemented in the project:
- **/background.js**: Handles the state of the blur effect and injects the content script
- **/manifest.json**: Chrome extension manifest file
- **/popup.css**: Styles for the popup HTML
- **/popup.html**: Markup for the popup interface
- **/popup.js**: Logic for the popup interactions
- **/content.js**: Contains the main script to apply or remove the blur
- **/content.css**: Defines CSS for blur effect

## Icons
There are four versions for the extension's icon:
- **16x16**: icons/icon16.png
- **48x48**: icons/icon48.png
- **128x128**: icons/icon128.png

## Usage
To toggle the blur effect:
1. Click the BlurIT icon in the Chrome toolbar.
2. The popup will show a 'Toggle Blur' button to switch blurring on or off.
3. The web page will instantly reflect the changes accordingly.

## Developers
Developers can review and interact with the code found in the respective JS, HTML, and CSS files. The primary functionality resides in `background.js` and `content.js`. All styles are controlled through CSS files, and user interaction is handled in `popup.html` and `popup.js`.

## Contributions
Contributions are welcome. Please feel free to fork, open issues, and submit pull requests through the usual GitHub workflow.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.