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
                                            'css/theme.less'
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
                        },

                        connect: {
                            server: {
                                options: {
                                    port: 9001,
                                    keepalive: true
                                }
                            }
                        }
                    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch', 'connect']);
};
