'use strict';

angular.module('SocialSkillsDC')
    .controller('signinCtrl', ['$scope', '$state', 'localConfig', function($scope, $state, localConfig){
        var user = {};
        var allUsers = [];

        $scope.user = {};



        $scope.signIn = function() {
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].username === $scope.user.username && allUsers[i].test_password === $scope.user.password) {
                    $scope.user['isAuthenticated'] = true;
                    $state.go('socialskillsdc.user.profile', {user: user});
                    break;
                } else {
                    $scope.errorMsg = 'Signin credentials are incorrect!';
                }
            }
        };
        $scope.currentLoc = 'In Home';
    }])
;