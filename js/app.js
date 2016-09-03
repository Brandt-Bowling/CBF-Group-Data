'use strict';

angular.module('SocialSkillsDC', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $compileProvider) {
        $urlRouterProvider.otherwise('/');

        // $compileProvider.debugInfoEnabled(false);
        // $compileProvider.commentDirectivesEnabled(false);
        // $compileProvider.cssClassDirectivesEnabled(false);

        $stateProvider
            .state('socialskillsdc', {
                url: '',
                templateUrl: 'js/app/header/header.html',
                controller: 'headerCtrl',
                abstract:true
            })
            .state('socialskillsdc.home', {
                url: '/',
                templateUrl: 'js/app/home/home.html',
                controller: 'homeCtrl'
            })
            .state('socialskillsdc.user', {
                url: '/user',
                templateUrl: 'js/app/user/profile.html',
                controller: 'profileCtrl',
                params: {user:{}}
            })
            .state('socialskillsdc.signin', {
                // Will eventually be moved to server side code
                url: '/signin',
                templateUrl: 'js/app/user/signin.html',
                controller: 'signinCtrl',
                params: {user:{}}
            })
            .state('socialskillsdc.logout', {
                // Will eventually be moved to server side code
                url: '/logout',
                templateUrl: 'js/app/user/logout.html',
                controller: 'logoutCtrl',
                params: {user:{}}
            })
            .state('socialskillsdc.groupsession', {
                url: '/groupsession',
                templateUrl: 'js/app/group/session.html',
                controller: 'sessionCtrl'
            })
        ;
    })
;