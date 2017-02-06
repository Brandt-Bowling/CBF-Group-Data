(function() {

    'use strict';

angular
    .module('SocialSkills')
    .controller('homeController', homeController);

    function homeController($http, authService) {
        var vm = this;

        vm.getMessage = getMessage;
        vm.getSecretMessage = getSecretMessage;
        vm.message;

        function getMessage() {
            $http.get('http://localhost:3001/api/public', {
                skipAuthorization: true
            }).then(function(response) {
                vm.message = response.data.message;
            });
        }

        function getSecretMessage() {
            $http.get('http://localhost:3001/api/private').then(function(response) {
                vm.message = response.data.message;
            });
        }
    }
})();