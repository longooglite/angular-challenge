var app = angular.module("ngChallenge",[]);
app.controller("FibCtrl", function($scope){
    $scope.curfib = 1;
    $scope.afib = 0;
    $scope.bfib = 1;
    $scope.sequence = [1];
    var steps = 1;
    $scope.recurseFib = function(){
        steps++;
        $scope.curfib = recFib(steps);
        $scope.bfib = recFib(steps - 1);
        $scope.afib = recFib(steps - 2);
        $scope.sequence.push($scope.curfib);
    };
    $scope.iterateFib = function(){
        steps++;
        var bits = itFib(steps);
        $scope.curfib = bits[2];
        $scope.bfib = bits[1];
        $scope.afib = bits[0];
        $scope.sequence.push($scope.curfib);
    };
    $scope.updateFib = function(){
        console.count("update");
        steps++;
        $scope.afib = $scope.bfib;
        $scope.bfib = $scope.curfib;
        $scope.curfib += $scope.afib;
        $scope.sequence.push($scope.curfib);
    };
    function recFib(n)
    {
        console.count("recurse");
        if(n < 2) return 1;
        if(n === 2) return 2;
        return recFib(n - 1) + recFib(n - 2);
    }
    function itFib(n){
        if(n < 2) return 1;
        var a = 0, b = 1, c = a + b;
        for(var i = 0; i < n - 1; i++)
        {
            console.count("iterate");
            a = b;
            b = c;
            c += a;
        }
        return [a, b, c];
    }
});