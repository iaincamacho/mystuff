require [
  'jquery'
  'angular'
  'routes'
  'factories/boat_registration'
  'text!/templates/app.html'
  'ngRoute'
  'ngAnimate'
], ($, angular, routes, boatRegistration, template) ->
  $ ->
    $('body').html template
    app = angular.module 'app', ['ngRoute', 'ngAnimate']
    boatRegistration app
    routes app

    angular.bootstrap document, ['app']
