var app = angular.module("ngChallenge",[]);
app.controller("FibCtrl", function($scope){
    //fibonacci (current = n). fibonacci (b = n - 1), fibonacci (a = n - 2)
    $scope.curfib = 1;
    $scope.afib = 0;
    $scope.bfib = 1;
    //everything starts off with step 1 (b = 1, a = 0) already in place
    //including the sequence and number of steps
    $scope.sequence = [1];
    var steps = 1;

    $scope.recurseFib = function(){
        //iterate the steps so that any of the methods can be used at any time
        steps++;
        //update the scope variables to take advantage of two way data binding
        $scope.curfib = recFib(steps);
        $scope.bfib = recFib(steps - 1);
        $scope.afib = recFib(steps - 2);
        $scope.sequence.push($scope.curfib);
    };
    $scope.iterateFib = function(){
        //iterate the steps so that any of the methods can be used at any time
        steps++;
        var bits = itFib(steps);
        //update the scope variables to take advantage of two way data binding
        $scope.curfib = bits[2];
        $scope.bfib = bits[1];
        $scope.afib = bits[0];
        $scope.sequence.push($scope.curfib);
    };
    $scope.updateFib = function(){
        console.count("update");
        //iterate the steps so that any of the methods can be used at any time
        steps++;
        //update the scope variables to take advantage of two way data binding
        //this one also uses the scope variables to bypass actually calculating.
        //it can only move one step at a time, but does it very quickly.
        $scope.afib = $scope.bfib;
        $scope.bfib = $scope.curfib;
        $scope.curfib += $scope.afib;
        $scope.sequence.push($scope.curfib);
    };
    function recFib(n)
    {
        //recursively call the function until solid footing is reached.
        //it turns out the recursion gets called a lot
        console.count("recurse");
        if(n < 2) return 1;
        if(n === 2) return 2;
        // and add the results together
        return recFib(n - 1) + recFib(n - 2);
    }
    function itFib(n){
        //iterate up to the current step, calculating on the way
        if(n < 2) return 1;
        var a = 0, b = 1, current = a + b;
        for(var i = 0; i < n - 1; i++)
        {
            //iterating can be done much more quickly than recursing.
            console.count("iterate");
            a = b;
            b = current;
            current += a;
        }
        //also, since a and b have to be calculated at every point
        //we can just return them and use them
        return [a, b, current];
    }
});