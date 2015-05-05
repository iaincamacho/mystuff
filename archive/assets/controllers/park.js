define(function() {
  return function($scope) {
    return $scope.$on('$routeChangeSuccess', function() {
      return angular.element('html, body').animate({
        scrollTop: 0
      }, 'fast');
    });
  };
});
