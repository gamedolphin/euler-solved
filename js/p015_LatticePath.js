// p015_LatticePath.js
// Created by Sandeep Nambiar - 28-12-2014

/*
  Since you can only move right and down and your number of
  moves is exactly equal to the number of lattices in each
  direction, we see that the problem becomes one of arranging
  (for nxn ) n right and n left moves in a 2n order i.e
  a permutation.
 */

var f = [];

//slightly faster factorial
var factorial = function (n) {
    if (n === 0 || n === 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n-1) * n;
};

var gridWidth = 20;
var gridHeight = 20;

var main = function(){

    var numerator = factorial(gridWidth + gridHeight);
    var denominator = factorial(gridWidth)*factorial(gridHeight);

    console.log("Number of ways : "+(numerator/denominator));
};

main();
