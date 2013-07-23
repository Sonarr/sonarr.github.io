module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
                         pkg: grunt.file.readJSON('package.json'),

                         curl: {
                             'UI/JsLibraries/backbone.js': 'http://documentcloud.github.io/backbone/backbone.js',
                             'UI/JsLibraries/backbone.marionette.js': 'http://marionettejs.com/downloads/backbone.marionette.js',
                             'UI/JsLibraries/backbone.mutators.js': 'http://raw.github.com/asciidisco/Backbone.Mutators/master/backbone.mutators.js',

                             'UI/JsLibraries/handlebars.runtime.js': 'http://raw.github.com/wycats/handlebars.js/master/dist/handlebars.runtime.js',
                             'UI/JsLibraries/handlebars.helpers.js': 'http://raw.github.com/danharper/Handlebars-Helpers/master/helpers.js',

                             'UI/JsLibraries/jquery.js': 'http://code.jquery.com/jquery.js',
                             'UI/JsLibraries/jquery.backstretch.js': 'http://raw.github.com/srobbin/jquery-backstretch/master/jquery.backstretch.js',

                             'UI/JsLibraries/require.js': 'http://raw.github.com/jrburke/requirejs/master/require.js',
                             'UI/JsLibraries/lodash.underscore.js': 'http://raw.github.com/bestiejs/lodash/master/dist/lodash.underscore.js'
                         },

                         /*               clean: {
                          folder: "site/"
                          },*/

                         less: {


                             options: {
                                 dumpLineNumbers: 'false',
                                 compress: false,
                                 yuicompress: false,
                                 ieCompat: false
                             },

                             general: {
                                 files: [
                                     {
                                         expand: true,
                                         src: [
                                             'site/content/bootstrap/bootstrap.less',
                                             'site/content/site.less'
                                         ],
                                         dest: '',
                                         ext: '.css'
                                     }
                                 ]
                             }

                         },

                         handlebars: {
                             options: {
                                 namespace: "T",
                                 partialRegex: /Partial.html/,
                                 wrapped: true,
                                 amd: true,
                                 processName: function (fileName) {
                                     return fileName
                                         .replace('UI/', '')
                                         .replace('.html', '')
                                         .toLowerCase();
                                 }
                             },
                             files: {
                                 src: ['site/**/*Template.html', 'site/**/*Partial.html'],
                                 dest: 'templates.js'
                             }
                         },
                         watch: {
                             options: {
                                 nospawn: false
                             },

                             less: {
                                 files: ['**/*.less'],
                                 tasks: ['less']
                             },
                             handlebars: {
                                 files: '<%= handlebars.files.src %>',
                                 tasks: ['handlebars']
                             }
                         }
                     });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-curl');
    // Default task(s).

    grunt.registerTask('package', ['less', 'handlebars']);
    grunt.registerTask('default', ['package', 'watch']);
    grunt.registerTask('update', ['curl']);
};
