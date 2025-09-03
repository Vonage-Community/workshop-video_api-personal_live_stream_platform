const videoPublisherEl = document.querySelector('video-publisher');
const audioToggle = document.querySelector('#audio-toggle');
const videoToggle = document.querySelector('#video-toggle');

const videoSubscribersEl = document.querySelector('video-subscribers');

const screenShareEl = document.querySelector('screen-share');

const liveChatEl = document.querySelector('live-chat');

const livePollEl = document.querySelector('live-poll');

const livePollControlEl = document.querySelector('live-poll-control');

const videoSubscriberContainer = document.querySelector(
  '#video-subscriber-container'
);

const videoSubscriberContainerCamera = document.querySelector('#camera');

const videoSubscriberContainerCustom = document.querySelector('#custom');

const videoSubscriberContainerScreen = document.querySelector('#screen');

let serverURL;
let applicationId = 'YOUR_APPLICATION_ID';
let sessionId = 'YOUR_SESSION_ID';
let token = 'YOUR_TOKEN';

function initializeSession() {
  const session = OT.initSession(applicationId, sessionId);
  console.log('session: ', session);
  // Set session and token (and optionally properties) for Web Components
  if (videoPublisherEl) {
    videoPublisherEl.session = session;
    videoPublisherEl.token = token;
    videoPublisherEl.properties = {
      fitMode: 'cover',
      height: '100%',
      resolution: '1920x1080',
      videoContentHint: 'detail',
      width: '100%',
    };

    audioToggle.addEventListener('click', () => {
      console.log('audioToggle!');
      videoPublisherEl.toggleAudio();
    });

    videoToggle.addEventListener('click', () => {
      console.log('videoToggle!');
      videoPublisherEl.toggleVideo();
    });
  }

  if (videoSubscribersEl) {
    videoSubscribersEl.session = session;
    videoSubscribersEl.token = token;
  }

  if (videoSubscriberContainer) {
    console.log('videoSubscriberContainer!');
    session.on('streamCreated', function (event) {
      console.log('streamCreated!', event.stream.videoType);
      const videoSubscriberEl = document.createElement('video-subscriber');
      videoSubscriberEl.setAttribute('id', `${event.stream.streamId}`);
      videoSubscriberEl.properties = { width: '100%', height: '100%' };
      // videoSubscriberEl.properties = { width: '100%', height: '100%' };
      videoSubscriberEl.session = session;
      videoSubscriberEl.stream = event.stream;
      if (event.stream.videoType === 'camera') {
        videoSubscriberContainerCamera.appendChild(videoSubscriberEl);
      } else if (event.stream.videoType === 'screen') {
        videoSubscriberContainerScreen.appendChild(videoSubscriberEl);
      }
    });
  }

  if (screenShareEl) {
    screenShareEl.session = session;
    screenShareEl.token = token;
  }

  if (liveChatEl) {
    liveChatEl.session = session;
    liveChatEl.token = token;
    if (videoPublisherEl) {
      liveChatEl.username = 'host';
    } else {
      liveChatEl.username = 'viewer';
    }
  }

  if (livePollEl) {
    livePollEl.session = session;
    livePollEl.token = token;
    livePollEl.addEventListener('poll-status', (event) => {
      const pollStatus = event.detail.status;
      if (pollStatus === 'started') {
        livePollEl.style.display = 'inline';
      }
      if (pollStatus === 'closed') {
        livePollEl.style.display = 'none';
      }
    });
  }

  if (livePollControlEl) {
    livePollControlEl.session = session;
    livePollControlEl.token = token;
  }
}

if (serverURL) {
  const fetchCredentials = async () => {
    try {
      const response = await fetch(serverURL + '/session');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const credentials = await response.json();
      applicationId = credentials.applicationId;
      sessionId = credentials.sessionId;
      token = credentials.token;
      initializeSession();
    } catch (err) {
      console.error('Error getting credentials: ', err.message);
    }
  };
  fetchCredentials();
} else {
  initializeSession();
}
