(function () {
'use strict';

angular
    .module('SocialSkills', ['auth0.lock', 'angular-jwt', 'ngMaterial', 'md.data.table', 'ui.router'])
    .config(function($provide, lockProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtOptionsProvider, $mdThemingProvider) {

        //initialize sign-in widget and customize thumbnail && text
        lockProvider.init({
            clientID: 'FiopVAA30FavmLNDk1z7mIInVHo7stfa',
            domain: 'brandt-bowling-imaginings.auth0.com',
            options: {
                theme: {
                    logo: '../assets/cbf-logo.jpg',
                    primaryColor: '#724E9E'
                },
                languageDictionary: {
                    title: 'Creating Brighter Futures'
                }
            }
        });
        //configure jwt
        jwtOptionsProvider.config({
            tokenGetter: function() {
                return localStorage.getItem('id_token');
            },
           // whiteListedDomains: ['localhost'],
            unauthenticatedRedirectPath: '/home'
        });
        //set colors for material design theme
        $mdThemingProvider.theme('default')
            .primaryPalette('purple')
            .accentPalette('yellow');

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/homeView.html',
                controller: 'homeController',
            })
            .state('datacollection', {
                url: '/datacollection',
                templateUrl: '../views/datacollection.html',
                controller: 'DataCollectionController',
                data: {
                    requiresLogin : true
                }})
            .state('results', {
                url: '/results',
                templateUrl: '../views/results.html',
                controller: 'resultsController',
                data: {
                    requiresLogin: true
                }
            });
        //push the jwt onto the array of http interceptors
        $httpProvider.interceptors.push('jwtInterceptor');
    });
})();