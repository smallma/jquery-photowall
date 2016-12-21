module.exports = function(grunt, type) {
  //require('grunt-config-merge')(grunt);
  require('load-grunt-tasks')(grunt);

  var pkg = {};
  var pageNames = [
    'features',
    'battery',
    'pixelmaster',
    'beauty',
    'performance',
    'zenui'
  ];

  grunt.initConfig({
    config: {},
    env: {
      development: {
        NODE_ENV: 'development'
      },
      production: {
        NODE_ENV: 'production'
      }
    },

    watch: {
      js: {
        files: 'resources/js/**/*',
        tasks: ['browserify']
      }
    },

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: [ require('babelify'), require('envify') ],
        watch: true
      },
      client: {
        expand: true,
        cwd: 'resources/js',
        src: '*.js',
        dest: 'dist/js/'
      }
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            '*.html',
            'dist/js/*.js',
            'dist/css/*.css'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './',
            index: 'index.html'
          }
        }
      }
    }
  });


  grunt.registerTask('default', ['browserSync', 'browserify', 'watch']);

};