"use strict";
define(['app',
        'index/layout',
        'features/layout',
        'download/layout'
//    'shared/formathelpers',
//    'shared/templatehelpers',
    ],
    function (App, IndexLayout, FeaturesLayout, DownloadLayout) {
        var controller = Backbone.Marionette.Controller.extend({

            index     : function () {
                this._setTitle('NzbDrone');
                App.mainRegion.show(new IndexLayout());
            },

            features     : function () {
                this._setTitle('Features');
                App.mainRegion.show(new FeaturesLayout());
            },

            download     : function () {
                this._setTitle('Download');
                App.mainRegion.show(new DownloadLayout());
            },

            notFound  : function () {
                this._setTitle('Not Found');
                App.mainRegion.show(new NzbDrone.Shared.NotFoundView(this));
            },

            _setTitle : function (title) {
                if (title.toLocaleLowerCase() === 'nzbdrone') {
                    window.document.title = 'NzbDrone :: Internet PVR';
                }
                else {
                    window.document.title = title + ' - NzbDrone :: Internet PVR';
                }
            }
        });

        return new controller();
    });
