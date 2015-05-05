define ->
  [
    '$scope'
    'boatRegistration'
    ($scope, boatRegistration) ->
      $scope.boat = boatRegistration.get()

      $scope.$on '$routeChangeSuccess', ->
        angular.element('html, body').animate scrollTop: 0, 'fast'

      hideSpinner =() ->
        $('.spinnerContainer').fadeOut()
        $('.searchResults').fadeIn('slow');

      setTimeout(hideSpinner, 3000)
  ]
