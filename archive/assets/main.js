require(['jquery', 'angular', 'routes', 'text!/templates/app.html', 'ngRoute', 'ngAnimate'], function($, angular, routes, template) {
  return $(function() {
    var app;
    $('body').html(template);
    app = angular.module('app', ['ngRoute', 'ngAnimate']);
    routes(app);
    return angular.bootstrap(document, ['app']);
  });
});
