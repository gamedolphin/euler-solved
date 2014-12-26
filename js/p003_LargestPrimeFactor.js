// p003_LargestPrimeFactor.js
// Created by Sandeep Nambiar - 27-12-2014

var n = 600851475143;


var largestFactor = function(n){
    var largest = 0;

    while(n%2===0){
        n = n/2;
        console.log("2 is a factor");
        largest = 2;
    }

    for(var i=3; i<=Math.sqrt(n); i+=2){
        while(n%i===0){
            console.log(i+" is a factor!");
            n = n/i;
            largest = i;
        }
    }
    if(n>2){
        largest = n;
        console.log(n+" is a factor!");
    }

    return largest;
};



var largest = largestFactor(n);

console.log("Largest prime factor of "+n+" is "+largest);
