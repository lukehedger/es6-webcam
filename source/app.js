import "webrtc-adapter-test"; // polyfill for Chrome/Firefox MediaDevices API
import domready from 'domready';

import media from './util/media';
import isGetUserMediaSupported from './util/isGetUserMediaSupported';

const ALLOWANCE = 10;

export default class App {

  constructor() {

    domready( () => {

      this.onrender();

    });

  }

  onrender() {

    this.getMedia();

  }

  getMedia() {

    media(isGetUserMediaSupported());

  }

}

const app = new App;
