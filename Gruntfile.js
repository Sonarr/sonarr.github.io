module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        curl: {
            'src/JsLibraries/backbone.js'                     : 'http://documentcloud.github.io/backbone/backbone.js',
            'src/JsLibraries/backbone.marionette.js'          : 'http://marionettejs.com/downloads/backbone.marionette.js',
            'src/JsLibraries/backbone.modelbinder.js'         : 'http://raw.github.com/theironcook/Backbone.ModelBinder/master/Backbone.ModelBinder.js',
            'src/JsLibraries/backbone.mutators.js'            : 'http://raw.github.com/asciidisco/Backbone.Mutators/master/backbone.mutators.js',
            'src/JsLibraries/backbone.shortcuts.js'           : 'http://raw.github.com/bry4n/backbone-shortcuts/master/backbone.shortcuts.js',
            'src/JsLibraries/backbone.relational.js'          : 'http://raw.github.com/PaulUithol/Backbone-relational/0.8.5/backbone-relational.js',
            'src/JsLibraries/backbone.associations.js'        : 'http://raw.github.com/dhruvaray/backbone-associations/master/backbone-associations.js',

            'src/JsLibraries/backbone.pageable.js'            : 'http://raw.github.com/wyuenho/backbone-pageable/master/lib/backbone-pageable.js',
            'src/JsLibraries/backbone.backgrid.js'            : 'http://raw.github.com/wyuenho/backgrid/master/lib/backgrid.js',
            'src/JsLibraries/backbone.backgrid.paginator.js'  : 'http://raw.github.com/wyuenho/backgrid/master/lib/extensions/paginator/backgrid-paginator.js',
            'src/JsLibraries/backbone.backgrid.filter.js'     : 'http://raw.github.com/wyuenho/backgrid/master/lib/extensions/filter/backgrid-filter.js',

            'src/JsLibraries/handlebars.runtime.js'           : 'http://raw.github.com/wycats/handlebars.JsLibraries/master/dist/handlebars.runtime.js',

            'src/JsLibraries/jquery.js'                       : 'http://code.jquery.com/jquery.js',
            'src/JsLibraries/jquery.backstretch.js'           : 'http://raw.github.com/srobbin/jquery-backstretch/master/jquery.backstretch.js',
            'src/JsLibraries/jquery.signalR.js'               : 'https://raw.github.com/SignalR/SignalR/master/samples/Microsoft.AspNet.SignalR.Hosting.AspNet.Samples/Scripts/jquery.signalR.js',


            'src/JsLibraries/require.js'                      : 'http://raw.github.com/jrburke/requirejs/master/require.js',
            'src/JsLibraries/sugar.js'                        : 'http://raw.github.com/andrewplummer/Sugar/master/release/sugar-full.development.js',
            'src/JsLibraries/underscore.js'                   : 'http://underscorejs.org/underscore.js',
            'src/JsLibraries/lunr.js'                         : 'http://raw.github.com/olivernn/lunr.JsLibraries/master/lunr.js',
         
            'src/JsLibraries/messenger.js'                    : 'http://raw.github.com/HubSpot/messenger/master/build/JsLibraries/messenger.js',
            'src/Content/Messenger/messenger.css'             : 'http://raw.github.com/HubSpot/messenger/master/build/css/messenger.css',
            'src/Content/Messenger/messenger.future.css'      : 'http://raw.github.com/HubSpot/messenger/master/build/css/messenger-theme-future.css',
            
            'src/Content/bootstrap.toggle-switch.css'         : 'http://raw.github.com/ghinda/css-toggle-switch/gh-pages/toggle-switch.css',
        
            'src/Content/FontAwesome/fontawesome.otf'         : 'http://github.com/FortAwesome/Font-Awesome/blob/master/build/assets/font-awesome/font/FontAwesome.otf?raw=true',
            'src/Content/FontAwesome/fontawesome-webfont.eot' : 'http://github.com/FortAwesome/Font-Awesome/blob/master/build/assets/font-awesome/font/fontawesome-webfont.eot?raw=true',
            'src/Content/FontAwesome/fontawesome-webfont.svg' : 'http://github.com/FortAwesome/Font-Awesome/blob/master/build/assets/font-awesome/font/fontawesome-webfont.svg?raw=true',
            'src/Content/FontAwesome/fontawesome-webfont.ttf' : 'http://github.com/FortAwesome/Font-Awesome/blob/master/build/assets/font-awesome/font/fontawesome-webfont.ttf?raw=true',
            'src/Content/FontAwesome/fontawesome-webfont.woff': 'http://github.com/FortAwesome/Font-Awesome/blob/master/build/assets/font-awesome/font/fontawesome-webfont.woff?raw=true',
            
            'src/Content/FontAwesome/bootstrap.less'          : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/bootstrap.less',
            'src/Content/FontAwesome/core.less'               : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/core.less',
            'src/Content/FontAwesome/extras.less'             : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/extras.less',
            'src/Content/FontAwesome/font-awesome-ie7.less'   : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/font-awesome-ie7.less',
            'src/Content/FontAwesome/font-awesome.less'       : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/font-awesome.less',
            'src/Content/FontAwesome/icons.less'              : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/icons.less',
            'src/Content/FontAwesome/mixins.less'             : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/mixins.less',
            'src/Content/FontAwesome/path.less'               : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/path.less',
            'src/Content/FontAwesome/variables.less'          : 'http://raw.github.com/FortAwesome/Font-Awesome/master/build/assets/font-awesome/less/variables.less'
        },

        clean: {
            folder: "site/"
        },

        handlebars: {
            options: {
                namespace   : "T",
                partialRegex: /Partial.hbs/,
                wrapped     : true,
                amd         : true,
                processName: function (fileName) {
                    return fileName
                        .replace('src/', '')
                        .replace('.hbs', '')
                        .toLowerCase();
                }
            },
            files  : {
                src : ['src/**/*emplate.hbs','src/**/*Partial.hbs'],
                dest: 'site/templates.js'
            }
        },

        copy: {
            scripts: {
                src   : '**/*.js',
                dest  : 'site/',
                cwd   : 'src',
                expand: true
            },
            styles : {
                src   : '**/*.css',
                dest  : 'site/',
                cwd   : 'src/',
                expand: true
            },
            images : {
                src   : '**/*.png',
                dest  : 'site/',
                cwd   : 'src/',
                expand: true
            },
            jpg : {
                src   : '**/*.jpg',
                dest  : 'site/',
                cwd   : 'src/',
                expand: true
            },
            fonts  : {
                src   : 'content/font/*.*',
                dest  : 'site/',
                cwd   : 'src/',
                expand: true
            }
        },

        watch: {
            handlebars : {
                files: '<%= handlebars.files.src %>',
                tasks: ['handlebars']
            },
            copyScripts: {
                files: 'src/<%= copy.scripts.src %>',
                tasks: ['copy:scripts']
            },
            copyStyles : {
                files: 'src/<%= copy.styles.src %>',
                tasks: ['copy:styles']
            },
            copyImages : {
                files: 'src/<%= copy.images.src %>',
                tasks: ['copy:images']
            },
            copyJpg : {
                files: 'src/<%= copy.jpg.src %>',
                tasks: ['copy:jpg']
            },
            copyFonts  : {
                files: 'src/<%= copy.fonts.src %>',
                tasks: ['copy:fonts']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-clean');
    // Default task(s).
    grunt.registerTask('package', ['clean', 'copy', 'handlebars']);
    grunt.registerTask('default', ['package', 'watch']); 
    grunt.registerTask('update', ['curl']);

};
