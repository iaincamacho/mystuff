define(function() {
  return [
    '$scope', 'boatRegistration', function($scope, boatRegistration) {
      var hideSpinner;
      $scope.boat = boatRegistration.get();
      $scope.$on('$routeChangeSuccess', function() {
        return angular.element('html, body').animate({
          scrollTop: 0
        }, 'fast');
      });
      hideSpinner = function() {
        $('.spinnerContainer').fadeOut();
        return $('.searchResults').fadeIn('slow');
      };
      return setTimeout(hideSpinner, 3000);
    }
  ];
});
