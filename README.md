# Vonage Video API Web Components x Personal Live Stream Platform

This demo was created with [Stackblitz's Static Starter App](https://stackblitz.com/fork/web-platform) to create a barebones applications to focus on integrating the Web Components into a personal live stream platform.

Deployed application:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/Vonage-Community/workshop-video_api-personal_live_stream_platform/tree/main/)

> Note: There is a devDependency in the project that is only necessary to run the demo on StackBlitz. If you download the code, you should be able to just open the index.html file in a browser to see it working.

## The Parts

Host: The person doing the live stream
- `<video-publisher>` : Initializes a publisher and publishes to the session. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/video-publisher)
- `<video-subscribers>` : Subscribes and displays other streams in the session. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/video-subscribers)
- `<screen-share>` : Adds ability to allow user to share their screen. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/screen-share)
- `<live-chat>` : Allows for real-time chat. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/live-chat)
- `<live-poll-control>` : Allows for creation and management of a poll. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/live-poll-control)


Viewer: The person watching the live stream
- `<video-subscriber>` : Subscribes and displays an individual stream in the session. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/video-subscriber)
- `<live-chat>` : Allows for real-time chat. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/live-chat)
- `<live-poll>` : Allows for real-time poll voting. [more info](https://github.com/Vonage-Community/web_components-video_api-javascript/tree/main/live-poll)
