module.exports = function(grunt){
  grunt.initConfig({
    // "babel": {
    //   options: {
    //     sourceMap: true
    //   },
    //   dist: {
    //     files: {
    //       "magic_the_gathering/static/js/es6/*.es6": "src/app.js"
    //     }
    //   }
    // },
    browserify: {
      dev: {
        src: ['magic_the_gathering/static/js/*.js'],
        dest: 'magic_the_gathering/static/js/build/script.js',
        options: {
          watch: true,
        }
      },
    },
    watch: {
      options:{
        livereload: true,
      },
      html:{
        files: ['magic_the_gathering/templates/index.html','magic_the_gathering/templates/**/*.html'],
        
      },
      js:{
        files: ['magic_the_gathering/static/js/build/*.js'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify','watch']);
};