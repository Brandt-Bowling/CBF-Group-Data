app.controller('DataCollectionController', ['$scope', function($scope) {
    $scope.clients = [
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''          
        },
        {
            name: ''
        }
    ];

    $scope.totals = [
        {nameID: 0},
        {peerInteraction: 0},
        {groupInstruction: 0},
        {groupWithDisc: 0},
        {answerQuestion: 0},
        {participateSong: 0}
    ];

    $scope.positiveInteraction = function(person, index, prop, total) {
        console.log('Positive interaction in', prop,'with', person.name, index);

        if(!person.hasOwnProperty(prop)) {
            person[prop] = 1;
        } else {
            person[prop]++;
        }
        $scope.totals[total]++;
        console.log('total=', $scope.totals[total]);
    }

    $scope.negativeInteraction = function(person, index, prop) {
        console.log('Missed interaction in', prop, 'with', person.name, index);

        if(!person.hasOwnProperty(prop)) {
            person[prop] = -1;
        } else {
            person[prop]--;
        }
        person.totals[prop]++;
        console.log('total=', person.totals[prop]);
    }

    $scope.collectData = true;

    $scope.showData = function() {
        collectData = false;
    };
}]);