define(['./information'], function(information) {
  return function($scope) {
    $scope.$on('$routeChangeSuccess', function() {
      return angular.element('html, body').animate({
        scrollTop: 0
      }, 'fast');
    });
    $scope.timeLow = information.timeLow;
    $scope.timeHigh = information.timeHigh;
    $scope.selected = information.selected;
    $scope.cost = information.cost;
    $scope.fee = information.fee;
    $scope.discount = information.discount;
    $scope.total = information.total;
    $scope.name = information.name;
    $scope.request = information.request;
    $('.watchname').change(function(e) {
      return information.name = $('.watchname').val();
    });
    $('.watchrequest').change(function(e) {
      return information.request = $('.watchrequest').val();
    });
    return $scope.timeslot = function(e, tl, th) {
      if (information.timeLow < tl) {
        information.timeLow = tl;
      } else if (information.timeLow == null) {
        information.timeLow = tl;
      }
      if (information.timeHigh < th) {
        information.timeHigh = th;
      } else if (information.timeHigh == null) {
        information.timeHigh = th;
      }
      information.selected = information.selected + 1;
      if (information.selected > 0) {
        information.fee = 10;
        $scope.fee = information.fee;
        information.discount = information.selected * 20;
        $scope.discount = information.discount;
      }
      information.cost = information.selected * 70;
      $scope.cost = information.cost;
      information.total = information.cost + information.fee - information.discount;
      $scope.total = information.total;
      $('#' + e).addClass('selected');
      $('#timedisplay').html(': ' + information.timeLow + 'pm to ' + information.timeHigh + 'pm');
      return false;
    };
  };
});
