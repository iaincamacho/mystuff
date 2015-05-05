define(['angular', 'underscore'], function(_) {
  return function(app) {
    return app.factory('boatRegistration', function($rootScope) {
      var registration;
      registration = {};
      return {
        set: function(data) {
          if (data == null) {
            data = {};
          }
          return _.extend(registration, data);
        },
        get: function(key) {
          if (key) {
            return registration[key];
          } else {
            return registration;
          }
        }
      };
    });
  };
});
