'use strict';


var sortThis = [99,95,91,87,84,82,79,72,65,64,62,62,61,59,51,44,43,42,39];

mergeSort(sortThis);

function mergeSort(arr) {
    
    //1. break up arrays to one; can use JS for this
    var arrs = [], elemCount = arr.length;
    
    for (var i = 0; i < elemCount; i++)
        arrs.push(arr.slice(i, i + 1));
    console.log(arrs);
    
    //2. now merge each one until there's only 1 array left
    
    
}




function mergeArrays(arrA, arrB) {
    var total = arrA.length + arrB.length;
    
    var newArray = [];
    while (total > 0) {
        if (arrA.length === 0)
            newArray.push(arrB.shift());
        else if (arrB.length === 0)
            newArray.push(arrA.shift())
        else if (arrA[0] < arrB[0])
            newArray.push(arrA.shift())
        else if (arrB[0] < arrA[0])
            newArray.push(arrB.shift())
        else //they are the same
            newArray.push(arrA.shift())
            
        total--;
    }    
    
    return newArray;
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

