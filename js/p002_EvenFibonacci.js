// p002_EvenFibonacci.js
// Created by Sandeep Nambiar - 27-12-2014

var maxnum = 4000000;

var a = 1, b = 2;
var n = 2;
var sum = 0;

while(n<maxnum){
    if(n%2===0){
        sum += n;
        console.log(n);
    }
    n = a+b;
    a = b;
    b = n;
}

console.log("Sum : "+sum);
