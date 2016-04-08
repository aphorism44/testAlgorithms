'use strict';



for (var i = 0; i < 20; i++) {
    console.log(factorialRecursive(i));
    console.log(factorialSequential(i));
}
    


function factorialRecursive(n) {
    if (n === 0 || n === 1)
        return 1;
    else return n * factorialRecursive(n - 1);
}

function factorialSequential(n) {
    var total = 1;
    for (var i = n; i > 0; i--)
        total *= i;
    
    return total;
    
}