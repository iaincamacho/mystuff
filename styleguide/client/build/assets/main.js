require(['jquery', 'angular', 'routes', 'factories/boat_registration', 'text!/templates/app.html', 'ngRoute', 'ngAnimate'], function($, angular, routes, boatRegistration, template) {
  return $(function() {
    var app;
    $('body').html(template);
    app = angular.module('app', ['ngRoute', 'ngAnimate']);
    boatRegistration(app);
    routes(app);
    return angular.bootstrap(document, ['app']);
  });
});
