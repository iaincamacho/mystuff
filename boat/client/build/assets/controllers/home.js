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
      $scope.hide = function() {
        $('.loginBg').hide();
        return false;
      };
      $scope.date = new Date();
      $scope.showNoResult = function() {
        $('.noResult').show();
        return $scope.showAdvanced();
      };
      $scope.showAdvanced = function() {
        $('.advancedsearch').show();
        return false;
      };
      $scope.activate = function(id) {
        $('#' + id).addClass('active');
        return false;
      };
      $('.watchselect').change(function(e) {
        return $('.engines').show();
      });
      $scope.upload = function(id) {
        $('.' + id).show();
        $('.' + id + '.button').hide();
        return false;
      };
      $scope.showregtypes = function() {
        $('.rightSide').addClass('active');
        return false;
      };
      hideSpinner = function() {
        $('.spinnerContainer').fadeOut();
        return $('.searchResults').fadeIn('slow');
      };
      return setTimeout(hideSpinner, 3000);
    }
  ];
});
