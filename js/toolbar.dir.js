(function() {

    'use strict';

    angular
        .module('SocialSkills')
        .directive('toolbar', toolbar);

        function toolbar() {
            return {
                templateUrl: '../views/toolbar.html',
                controller: toolbarController,
                controllerAs: 'toolbar'
            }
        }

        toolbarController.$inject = ['authService'];

        function toolbarController(authService) {
            var vm = this;

            vm.authService = authService;
        }
})();