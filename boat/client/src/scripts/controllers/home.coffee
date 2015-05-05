define ->
  [
    '$scope'
    'boatRegistration'
    ($scope, boatRegistration) ->
      $scope.boat = boatRegistration.get()

      $scope.$on '$routeChangeSuccess', ->
        angular.element('html, body').animate scrollTop: 0, 'fast'
      $scope.hide = ->
        $('.loginBg').hide()
        return false

      # Fake Model
      # $scope.searchResult = information.searchResult

      $scope.date = new Date();


      $scope.showNoResult = ->
        $('.noResult').show()
        $scope.showAdvanced()

      $scope.showAdvanced = ->
        $('.advancedsearch').show()
        return false

      $scope.activate =(id)->
        $('#' + id).addClass('active')
        return false

      $('.watchselect').change((e) ->
        $('.engines').show()
      )
      $scope.upload = (id) ->
        $('.' + id).show()
        $('.' + id + '.button').hide()
        return false

      $scope.showregtypes = ->
        $('.rightSide').addClass('active')
        return false

      hideSpinner =() ->
        $('.spinnerContainer').fadeOut()
        $('.searchResults').fadeIn('slow');

      setTimeout(hideSpinner, 3000)
  ]
