angular.module('chatBox',['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: './login.html',
        }).when('/home', {
            templateUrl: './home.html'
        }).otherwise({ redirectTo: '/login' });
}]);;