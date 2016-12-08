app.controller('HomeController', ['$scope', function($scope){
    $scope.info = {
        title: 'Trackio',
        desc: 'Simple geolocation tracking write em JS'
    }

    var track = io();

    $scope.track = () => {
        track.emit('position', 'teste');
    }
}]);