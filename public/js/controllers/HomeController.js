app.controller('HomeController', ['$scope', 'Tracking', ($scope, Tracking) => {
    $scope.info = {
        title: 'Trackio',
        desc: 'Simple geolocation tracking write em JS'
    }
     $scope.trackers = [];
     
    $scope.track = () => {
        Tracking.emit('position', 'teste');
    }

       Tracking.on('position', (data) => {
           $scope.trackers.push(data);

           $scope.$apply();
       });
   
}]);