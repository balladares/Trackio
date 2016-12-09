// Home controller
app.controller('HomeController', ['$scope', function($scope) {
    // App info
     $scope.info = {
        title: 'Trackio',
        desc: 'Simple geolocation tracking write in JS'
    };
}])