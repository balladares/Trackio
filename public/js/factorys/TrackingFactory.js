app.factory('Tracking', ['socketFactory', (socketFactory) => {
    return socketFactory();
}]);