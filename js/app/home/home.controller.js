'use strict';

angular.module('SocialSkillsDC')
    .controller('homeCtrl', ['$scope', function($scope){
        $scope.user = {
            username: 'Brandt Bowling'
        };
        $scope.currentLoc = 'In Home';

        

    }])
;