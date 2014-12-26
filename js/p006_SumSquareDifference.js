// p006_SumSquareDifference.js
// Created by Sandeep Nambiar - 27-12-2014

var totalNum = 100;

var sumOfSquares = function(n){
    return (n*(n+1)*(2*n+1))/6;
};

var sumOf = function(n){
    return (n*(n+1))/2;
};

var main = function(){

    var sum = sumOf(totalNum);
    var sumSq = sum*sum;

    var difference = sumSq - sumOfSquares(totalNum);

    console.log("Difference is "+difference);

};

main();
