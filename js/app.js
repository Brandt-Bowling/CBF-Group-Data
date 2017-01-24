var app = angular.module('SocialSkills', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: '../views/homeView.html'
        })
        .when('/datacollection', {
            controller: 'DataCollectionController',
            templateUrl: '../views/datacollection.html'
        })
        // .when('/registration', {
        //     controller: 'registrationController',
        //     templateUrl: '../views/registration.html'
        // })
        .otherwise({
            redirectTo: '/'
        });
});