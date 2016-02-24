exports.config = {
  specs: [
    'tests/e2e_tests.js',
  ],
  allScriptsTimeout: 11000,
  // TODO: test offline mode and Safari.
  // Firefox is a waste of time: I never found any errors in FF: {'browserName': 'firefox'},
  // In Safari, I always get this failure:
  //Failed: Detected a page unload event; script execution does not work across page loads. (WARNING: The server did not provide any stacktrace information)
  // Probably similar to this issue: https://github.com/angular/protractor/issues/85
  //{'browserName': 'safari'},
  capabilities: {
    'browserName': 'chrome',
    // See: https://sites.google.com/a/chromium.org/chromedriver/mobile-emulation
    'chromeOptions': { "mobileEmulation": { "deviceName": "Apple iPhone 4" } },
    //"loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "WARNING"},
  },
  directConnect: true,
  baseUrl: 'http://localhost:9000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};
