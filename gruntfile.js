module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      sass: {
        files: 'app/scss/*.scss',
        tasks: ['sass'],
      },
    },

    sass: {
      dev: {
        files: {
          'app/css/styles.css' : 'app/scss/styles.scss'
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};