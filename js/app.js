
var app = angular.module('SocialSkills', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/index', {
            controller: 'homeController.js',
            templateUrl: 'views/homeView.html'
        })
        .when('/datacollection', {
            controller: 'dcController',
            templateUrl: 'views/datacollection.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});


