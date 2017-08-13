angular
    .module('SocialSkills')
    .controller('resultsController', ['$scope', '$http', function ($scope, $http) {

        $scope.getData = function () {
            var date = new Date().toDateString();
            $http({
                method: 'GET',
                url: '/api/results/?date=' + date,
            }).then(function (response) {
                $scope.clients = response.data;
                console.log(response);
            })
        }
    }]);
