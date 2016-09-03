'use strict';

angular.module('SocialSkillsDC')
    .controller('logoutCtrl', ['$scope', function($scope){
        $scope.user = {
            username: 'Brandt Bowling'
        };
        $scope.currentLoc = 'In Home';
    }])
;