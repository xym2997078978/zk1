app.controller('dataController', function ($scope, $interval) {
    $scope.date = new Date();
    $interval(function () {
        $scope.date = new Date();
    }, 1000);
});