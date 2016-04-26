// iPhone6Plus and Nexus5 should have a pixelRatio of 3, but that doesn't work in chrome at the moment,
// so I set it to 2.
var supportedDevices = {
  iPhone4 : {
    dirName: "iPhone4-3.5inch-640x960",
    deviceMetrics: { width: 320 , height: 480, pixelRatio: 2},
  },
  iPhone5: {
    dirName: "iPhone5-4inch-640x1136",
    deviceMetrics: { width: 320 , height: 568, pixelRatio: 2},
  },
  iPhone6: {
    dirName: "iPhone6-4.7inch-750x1334",
    deviceMetrics: { width: 375 , height: 667, pixelRatio: 2},
  },
  iPhone6Plus: {
    dirName: "iPhone6Plus-5.5inch-1242x2208",
    deviceMetrics: { width: 414 , height: 736, pixelRatio: 2, desiredPixelRatio: 3}, // pixelRatio should be 3
  },
  // I do portrait mode for the big tablets.
  iPad: {
    dirName: "iPad-1024x768",
    deviceMetrics: { width: 1024 , height: 768, pixelRatio: 1},
  },
  iPadPro: {
    dirName: "iPadPro-2732x2048",
    deviceMetrics: { width: 1366 , height: 1024, pixelRatio: 2},
  },
  Nexus5: {
    dirName: "Nexus5-[360x640]x3",
    deviceMetrics: { width: 360 , height: 640, pixelRatio: 2, desiredPixelRatio: 3}, // pixelRatio should be 3
  },
  Nexus7: {
    dirName: "Nexus7-[600x960]x2",
    deviceMetrics: { width: 600 , height: 960, pixelRatio: 2},
  },
};

exports.config = {
  specs: [
    'tests/e2e_tests.js',
  ],
  allScriptsTimeout: 11000,
  params: {
    supportedDevices: supportedDevices,
  },
  // Arguments passed to the command
  // TODO: test offline mode and Safari.
  // Firefox is a waste of time: I never found any errors in FF: {'browserName': 'firefox'},
  // In Safari, I always get this failure:
  //Failed: Detected a page unload event; script execution does not work across page loads. (WARNING: The server did not provide any stacktrace information)
  // Probably similar to this issue: https://github.com/angular/protractor/issues/85
  //{'browserName': 'safari'},
  getMultiCapabilities: function() {
    // Using lodash to select the keys in `capabilities` corresponding 
    // to the browsers param.
    return [{
      'browserName': 'chrome',
      // See: https://sites.google.com/a/chromium.org/chromedriver/mobile-emulation
      'chromeOptions': {
        mobileEmulation: {deviceMetrics: supportedDevices[this.params.deviceName].deviceMetrics},
        //args: ['--start-maximized'],
      },
      //"loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "WARNING"},
    }];
  },
  directConnect: true,
  baseUrl: 'http://localhost:9000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};
