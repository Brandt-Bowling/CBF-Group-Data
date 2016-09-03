'use strict';

angular.module('SocialSkillsDC')
    .controller('profileCtrl', ['$scope', function($scope){
        $scope.user = {
            username: 'Brandt Bowling'
        };
        $scope.currentLoc = 'In Home';
    }])
;