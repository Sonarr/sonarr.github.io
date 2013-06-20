"use strict";
require.config({

    paths: {
        'backbone'            : 'JsLibraries/backbone',
        'handlebars'          : 'JsLibraries/handlebars.runtime',
        'bootstrap'           : 'JsLibraries/bootstrap',
        'backbone.mutators'   : 'JsLibraries/backbone.mutators',
        'backbone.deepmodel'  : 'JsLibraries/backbone.deep.model',
        'backbone.pageable'   : 'JsLibraries/backbone.pageable',
        'backbone.modelbinder': 'JsLibraries/backbone.modelbinder',
        'backgrid'            : 'JsLibraries/backbone.backgrid',
        'backgrid.paginator'  : 'JsLibraries/backbone.backgrid.paginator',
        '$'                   : 'JsLibraries/jquery',
        'underscore'          : 'JsLibraries/underscore',
        'marionette'          : 'JsLibraries/backbone.marionette',
        'libs'                : 'JsLibraries/'
    },

    shim: {

        $: {
            exports: '$'
        },

        bootstrap: {
            deps: ['$']
        },

        'underscore': {
            deps   : ['$'],
            exports: '_'
        },

        backbone: {
            deps   : ['underscore', '$'],
            exports: 'Backbone'
        },

        'backbone.deepmodel': {
            deps: ['mixins/underscore.mixin.deepExtend']
        },

        marionette: {
            deps   : [
                'backbone',
                'mixins/backbone.marionette.templates',
                'mixins/AsNamedView'
            ],
            exports: 'Marionette',
            init   : function (Backbone, TemplateMixin, AsNamedView) {
                TemplateMixin.call(Marionette.TemplateCache);
                AsNamedView.call(Marionette.ItemView.prototype);
            }
        }
    }
});

define([
    'marionette',
    //'instrumentation/stringformat',
    //'instrumentation/errorhandler'
], function (Marionette) {

    require(['libs/backbone.mutators']);

    window.NzbDrone = new Marionette.Application();
    window.NzbDrone.Config = {};
    window.NzbDrone.Form = {};

    window.NzbDrone.Index = {};
    window.NzbDrone.Shared = {
        Footer: {}
    };

    window.NzbDrone.addInitializer(function () {

        console.log('Starting website');

    });

    NzbDrone.addRegions({
        mainRegion        : '#main-region',
        footerRegion      : '#footer-region'
    });

    window.NzbDrone.start();

    return NzbDrone;
});
