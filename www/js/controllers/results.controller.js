angular
    .module('SocialSkills')
    .controller('ShowResultsController', ['$scope', '$http', function ($scope, $http) {

        $scope.getData = function () {
            var date = new Date.now();
            $http({
                method: 'GET',
                url: '/api/results/?date=' + date,
            }).then(function (response) {
                console.log(response);
            })
        }
    }]);
