define(function() {
  return function($scope) {
    $scope.$on('$routeChangeSuccess', function() {
      return angular.element('html, body').animate({
        scrollTop: 0
      }, 'fast');
    });
    return $scope.activate = function() {
      $('#theone').addClass('activated');
      return $('.types').addClass('dimmed');
    };
  };
});
