'use strict';

angular.module('SocialSkillsDC')
    .controller('sessionCtrl', ['$scope', function($scope){
        $scope.user = {
            username: 'Brandt Bowling'
        };
        $scope.currentLoc = 'In Session';

        $scope.class = [
            {name: 'kid1'},
            {name: 'kid2'},
            {name: 'kid3'},
            {name: 'kid4'},
            {name: 'kid5'},
            {name: 'kid6'},
        ];

        $scope.positiveInteraction = function(person, index, prop) {
            console.log('Positive interaction in', prop,'with',person.name, index);

            if (!person.hasOwnProperty(prop)) {
                person[prop] = 1;
            } else {
                person[prop]++;
            }

            $scope.class[index] = person;
            console.log('Person:', person);
        };

        $scope.missedInteraction = function(person, index, prop) {
            console.log('Missed interaction in',prop,'with',person.name, index);

            if (!person.hasOwnProperty(prop)) {
                person[prop] = -1;
            } else {
                person[prop]--;
            }

            $scope.class[index] = person;
            console.log('Person:', person);
        };

        $scope.collectData = true;

        $scope.showData = function() {
            $scope.collectData = false;
        };
    }])
;