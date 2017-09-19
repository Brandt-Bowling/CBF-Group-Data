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
                console.log("Successfully retrieved results from API endpoint");                
            })

            $scope.seeData = true;
        }

        $scope.seeData = false;

        $scope.targets = ['Name ID', 'Peer Interaction', 'Follow Group Instructions', 'Follow Instructions With Discrim',
        'Answer Question', 'Particiapte In Song', 'Participate Without Behavior', 'Tolerate Prompt', 'Attend For 50%'];
    }]);
