
var app = angular.module('SocialSkills', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled:true, requireBase: false});

    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: '../views/homeView.html'
        })
        .when('/datacollection', {
            controller: 'DataCollectionController',
            templateUrl: '../views/datacollection.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});


