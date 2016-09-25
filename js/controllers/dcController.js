app.controller('DataCollectionController', ['$scope', function($scope) {
    $scope.clients = [
        {
            name: '',
        },
        {
            name: '',
        },
        {
            name: '',
        },
        {
            name: '',           
        },
        {
            name: '',
        }
    ];

    $scope.positiveInteraction = function(person, index, prop) {
        console.log('Positive interaction in', prop,'with', person.name, index);

        if(!person.hasOwnProperty(prop)) {
            person[prop] = 1;
        } else {
            person[prop]++;
        }
    }

    $scope.negativeInteraction = function(person, index, prop) {
        console.log('Missed interaction in', prop, 'with', person.name, index);

        if(!person.hasOwnProperty(prop)) {
            person[prop] = -1;
        } else {
            person[prop]--;
        }
    }

    $scope.collectData = true;

    $scope.showData = function() {
        collectData = false;
    };


}]);