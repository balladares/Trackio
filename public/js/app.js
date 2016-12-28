// Angular module
var app = angular.module('trackio', ['btford.socket-io', 'ngGeolocation', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '../partials/options.html'
            })
            .when('/get-location',{
                templateUrl: '../partials/get-location.html',
                controller: 'GetPositionController'
            })
            .when('/view-location',{
                templateUrl: '../partials/view-get-location.html',
                controller: 'GetPositionController'
            })
    });