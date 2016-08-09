'use strict';

angular.module('SocialSkillsDC', ['ui.router'])
    // .config(function($stateProvider, $urlRouterProvider) {
    //     $urlRouterProvider.otherwise('/');

    //     $stateProvider
    //         .state('socialskillsdc', {
    //             url: '',
    //             abstract:true
    //         })
    //         .state('socialskillsdc.home', {
    //             url: '/',
    //             templateUrl: 'home/home.html',
    //             controller: 'home/home.controller.js'
    //         })
    //         .state('socialskillsdc.groupsession', {
    //             url: '/groupsession',
    //             templateUrl: 'group/session.html',
    //             controller: 'group/session.controller.js'
    //         })
    //     ;
    // })
    .controller('mainCtrl', ['$scope', function($scope){
        var toggle;
        var messageOne = "Testing";
        var messageTwo = "Hello, World!";
        var messageThree = "Hello, ";

        $scope.message = messageOne;

        $scope.hello = function() {
            $scope.message = toggle ? messageOne : messageTwo;
            toggle = !toggle;
        };

        $scope.changeName = function() {
            $scope.message = $scope.name ? messageThree + $scope.name : messageThree+'Brandt';
        };

    }])
;