define [
  'angular'
  'underscore'
], (_) ->
  (app) ->
    app.factory 'boatRegistration', ($rootScope) ->
      registration = {}

      # setInterval (-> console.log registration), 500

      set: (data = {}) ->
        _.extend registration, data
      get: (key) ->
        if key then registration[key] else registration
