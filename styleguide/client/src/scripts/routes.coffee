define [
  './controllers/home'
], (homeController) ->
  routes = ($routeProvider, $locationProvider, $httpProvider) ->
    $locationProvider.html5Mode(true)
    $routeProvider
      .when '/', {
        templateUrl: './templates/home.html'
        controller: 'homeController'
      }

  (app) ->
    app.config routes
    app.controller 'homeController', homeController
