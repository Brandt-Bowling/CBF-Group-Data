'use strict';

angular.module('SocialSkillsDC')
    .controller('headerCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
        // $scope.user = $stateParams.user || {userName: 'Brandt', isAuthenticated: false};

        // $scope.isAuthenticated = $scope.user.hasOwnProperty('isAuthenticated') ? $scope.user.isAuthenticated : true;

        $scope.user = {userName: 'Brandt'};
        $scope.isAuthenticated = true;

        $scope.signin = function() {
            $state.go('socialskillsdc.signin');
        };

        $scope.logout = function() {
            $state.go('socialskillsdc.logout', {user: $scope.user});
        };
    }])
;