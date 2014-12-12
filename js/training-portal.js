angular.module('training-portal', [
    'ngRoute'
]).config(function ($routeProvider) {
    $routeProvider.when('/second', {
        templateUrl: 'pages/second.html'
    }).when('/hello', {
        templateUrl: 'pages/hello.html'
    }).otherwise({
        redirectTo: '/hello'
    });
}).controller('main', function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});