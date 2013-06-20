"use strict";
require(['app', 'Controller', 'RouteBinder', 'Shared/Footer/View'], function (App, Controller, RouteBinder, FooterView) {

    NzbDrone.Router = Backbone.Marionette.AppRouter.extend({

        controller: Controller,
        appRoutes : {
            ''                           : 'index',
            'index'                      : 'index',
            'features'                   : 'features',
            'download'                   : 'download',
            ':whatever'                  : 'notFound'
        }
    });

    NzbDrone.addInitializer(function () {

        NzbDrone.Router = new NzbDrone.Router();
        Backbone.history.start({ pushState: true });

        RouteBinder.bind();
        NzbDrone.footerRegion.show(new FooterView());
    });
});

