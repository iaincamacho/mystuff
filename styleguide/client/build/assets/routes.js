define(['./controllers/home'], function(homeController) {
  var routes;
  routes = function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    return $routeProvider.when('/', {
      templateUrl: './templates/home.html',
      controller: 'homeController'
    });
  };
  return function(app) {
    app.config(routes);
    return app.controller('homeController', homeController);
  };
});
