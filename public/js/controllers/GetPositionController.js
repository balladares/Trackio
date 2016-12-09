app.controller('GetPositionController', ['$scope', '$geolocation', 'Tracking', function ($scope, $geolocation, Tracking) {
    // Storage all tracks
    $scope.trackers = [];

    // Track user position
    $scope.track = () => {
        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function (position) {
            // Storage current user geo position
            $scope.myPosition = {Lat: position.coords.latitude, Lng: position.coords.longitude};

            // Emit signal 'position' to server
            Tracking.emit('position', JSON.stringify(cloneAsObject(position)));
        });

    }

    // Watch if server response something in 'position' web socket
    Tracking.on('position', (data) => {

        // Push geo position to history of tracks
        $scope.trackers.push({ Lat: data.coords.latitude, Lng: data.coords.longitude });

        $scope.$apply();
    });

    // Helper function to transform object returned from getCurrentPosition() 
    var cloneAsObject = (obj) => {
        if (obj === null || !(obj instanceof Object)) {
            return obj;
        }
        var temp = (obj instanceof Array) ? [] : {};

        for (var key in obj) {
            temp[key] = cloneAsObject(obj[key]);
        }
        return temp;
    }
}]);