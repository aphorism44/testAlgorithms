'use strict';


var sortThis = [99,95,91,87,84,82,79,72,65,64,62,62,61,59,51,44,43,42,39];

console.log(sortThis)

var sorted = mergeSort(sortThis);
console.log("answer is: " + sorted);

function mergeSort(arr) {
    var len = arr.length;
    if (len <= 1) {
        return arr;
    } else {
        var middle = Math.floor(len/2);
        return mergeArrays(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
    }
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

