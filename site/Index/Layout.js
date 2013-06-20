"use strict";
define([
    'app',
    'jquery.carouFredSel'
],
    function (App)
    {
        return Backbone.Marionette.Layout.extend({
            template: 'Index/LayoutTemplate',

            regions: {
                series : '#x-series',
                toolbar: '#x-toolbar'
            }
        });
    });
