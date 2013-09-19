module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
                         pkg: grunt.file.readJSON('package.json'),

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

                         watch: {
                             options: {
                                 nospawn: false
                             },

                             less: {
                                 files: ['**/*.less'],
                                 tasks: ['less']
                             }
                            
                         }
                     });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
};
