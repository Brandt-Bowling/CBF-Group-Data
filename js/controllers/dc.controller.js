angular
    .module('SocialSkills')
    .controller('DataCollectionController', ['$scope', '$http', function($scope, $http) {

    $scope.clients = [
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''},
        {name: ''}
    ];

    $scope.positiveInteraction = function(person, index, prop) {
        console.log('Positive interaction in', prop,'with', person.name, index);

        var propTotal = prop + 'Total';

        if(!person.hasOwnProperty(prop)) {
            person[prop] = 1;
            person[propTotal] = 1;
        } else {
            person[prop]++;
            person[propTotal]++;
        }
        console.log('total in', prop, '=', person[propTotal]);
    }

    $scope.negativeInteraction = function(person, index, prop) {
        console.log('Missed interaction in', prop, 'with', person.name, index);

        var propTotal = prop + 'Total';

        if(!person.hasOwnProperty(prop)) {
            person[prop] = 0;
            person[propTotal] = 1;
        } else {
            person[propTotal]++;
        }
        console.log('total in', prop, '=', person[propTotal]);
    }

    $scope.collectData = true;

    $scope.showData = function() {
        $scope.collectData = false;
    };

    $scope.hideData = function() {
        $scope.collectData = true;
    }
}]);