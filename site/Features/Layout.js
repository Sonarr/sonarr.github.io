"use strict";
define([
    'app'
],
    function (App)
    {
        return Backbone.Marionette.Layout.extend({
            template: 'Features/LayoutTemplate',

            regions: {
                series : '#x-series',
                toolbar: '#x-toolbar'
            }
        });
    });
