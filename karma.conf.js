// Karma configuration

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
        './node_modules/angular/angular.js',                             // angular
        './node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
        './node_modules/angular-mocks/angular-mocks.js',                 // loads our modules for tests
        './app/services/shoppingCart/shoppingCartService.js',                                 // our Users factory
        './app/app.js',   
        './app/services/shoppingCart/shoppingCartService.spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity
  })
}
