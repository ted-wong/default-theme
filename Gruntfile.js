module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ts: {
      default: {
        options: {
          fast: 'never' // disable the grunt-ts fast feature
        },
        tsconfig: true
      }
    },
    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
        },
        processors: [
          require('autoprefixer')(), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      app: {
        src: 'app/css/app.css',
        dest: 'app/css/app.min.css',
      },
      gamedeveloper: {
        src: 'gamedeveloper/css/gameDeveloper.css',
        dest: 'gamedeveloper/css/gameDeveloper.min.css',
      },
      gameinvite: {
        src: 'gameinvite/css/index.css',
        dest: 'gameinvite/css/index.min.css',
      },
    },
    manifest: {
      generate: {
        options: {
          basePath: '.',
          cache: [
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js',
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-route.min.js',
            'js/everything.min.js',
            'css/app.min.css',
          ],
          network: ['*'],
          timestamp: true
        },
        dest: 'app/index.appcache',
        src: []
      }
    },
    'http-server': {
        'dev': {
            // the server root directory
            root: '.',
            port: 9000,
            host: "0.0.0.0",
            cache: 1,
            showDir : true,
            autoIndex: true,
            // server default file extension
            ext: "html",
            // run in parallel with other tasks
            runInBackground: true
        }
    },
    protractor: {
      options: {
        configFile: "protractor.conf.js", // Default config file
        keepAlive: false, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      all: {}
    },
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', [
      'ts',
      'postcss',
      'manifest',
      'http-server', 'protractor']);

};
