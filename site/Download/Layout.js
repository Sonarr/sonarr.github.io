"use strict";
define([
    'app'
],
    function (App)
    {
        return Backbone.Marionette.Layout.extend({
            template: 'Download/LayoutTemplate',

            regions: {
                series : '#x-series',
                toolbar: '#x-toolbar'
            }
        });
    });
