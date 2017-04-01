(function() {

    'use strict';

angular
    .module('SocialSkills')
    .controller('homeController', homeController);

    function homeController($scope, $mdDialog) {

//     $scope.showPrompt = function(ev) {
//     // Appending dialog to document.body to cover sidenav in docs app
//     var confirm = $mdDialog.prompt()
//       .title('Which type of group would you like to take data for?')
//       .ariaLabel('Group Selection')
//       .targetEvent(ev)
//       .ok('More Social Group')
//       .cancel('Less Social Group');

//     $mdDialog.show(confirm).then(function(result) {
//       $scope.status = 'You decided to name your dog ' + result + '.';
//     }, function() {
//       $scope.status = 'You didn\'t name your dog.';
//     });
//   };
            



    //     var vm = this;

    //     vm.getMessage = getMessage;
    //     vm.getSecretMessage = getSecretMessage;
    //     vm.message;

    //     function getMessage() {
    //         $http.get('http://localhost:3001/api/public', {
    //             skipAuthorization: true
    //         }).then(function(response) {
    //             vm.message = response.data.message;
    //         });
    //     }

    //     function getSecretMessage() {
    //         $http.get('http://localhost:3001/api/private').then(function(response) {
    //             vm.message = response.data.message;
    //         });
    //     }
    }
})();