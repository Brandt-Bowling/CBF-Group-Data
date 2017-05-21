angular
    .module('SocialSkills')
    .controller('DataCollectionController', ['$scope', '$http', function ($scope, $http) {

        $scope.clients = [];

        $scope.addClient = function () {
            $scope.clients.push({ name: '' });
        }

        $scope.dataTarget = [];

        $scope.addTarget = function () {
            $scope.dataTarget.push({name: ''});
        }

        $scope.targets = ['Name ID', 'Peer Interaction', 'Follow Group Instructions', 'Follow Instructions With Discrim',
            'Answer Question', 'Particiapte In Song', 'Participate Without Behavior', 'Tolerate Prompt'];
        $scope.selectedTarget;
        $scope.getSelectedTarget = function() {
            if(this.selectedTarget !== undefined) {
                return this.selectedTarget;
            } else {
                return 'Select a Target';
            }
        }

        $scope.positiveInteraction = function (person, index, prop) {
            console.log('Positive interaction in', prop, 'with', person.name, index);

            var propTotal = prop + 'Total';

            if (!person.hasOwnProperty(prop)) {
                person[prop] = 1;
                person[propTotal] = 1;
            } else {
                person[prop]++;
                person[propTotal]++;
            }
            console.log('total in', prop, '=', person[propTotal], person);
        }

        $scope.negativeInteraction = function (person, index, prop) {
            console.log('Missed interaction in', prop, 'with', person.name, index);

            var propTotal = prop + 'Total';

            if (!person.hasOwnProperty(prop)) {
                person[prop] = 0;
                person[propTotal] = 1;
            } else {
                person[propTotal]++;
            }
            console.log('total in', prop, '=', person[propTotal]);
        }

        $scope.collectData = true;

        $scope.showData = function () {
            $scope.collectData = false;
        };

        $scope.hideData = function () {
            $scope.collectData = true;
        };

        $scope.postData = function () {
            console.log($scope.clients);
            $http({
                method: 'POST',
                url: '/api/results',
                data: angular.toJson($scope.clients)
            }).then(function (response) {
                console.log(response);
            })
        };
    }]);