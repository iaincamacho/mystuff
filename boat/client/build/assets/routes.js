define(['./controllers/home'], function(homeController) {
  var routes;
  routes = function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    return $routeProvider.when('/', {
      templateUrl: './templates/home.html',
      controller: 'homeController'
    }).when('/dashboard', {
      templateUrl: './templates/dashboard.html',
      controller: 'homeController'
    }).when('/results', {
      templateUrl: './templates/searchresults.html',
      controller: 'homeController'
    }).when('/profile', {
      templateUrl: './templates/profile.html',
      controller: 'homeController'
    }).when('/boatregistration', {
      templateUrl: './templates/boat.html',
      controller: 'homeController'
    }).when('/documents', {
      templateUrl: './templates/documents.html',
      controller: 'homeController'
    }).when('/fee', {
      templateUrl: './templates/fee.html',
      controller: 'homeController'
    }).when('/receipt', {
      templateUrl: './templates/receipt.html',
      controller: 'homeController'
    }).when('/owners', {
      templateUrl: './templates/owner.html',
      controller: 'homeController'
    }).when('/owners', {
      templateUrl: './templates/owner.html',
      controller: 'homeController'
    });
  };
  return function(app) {
    app.config(routes);
    return app.controller('homeController', homeController);
  };
});
