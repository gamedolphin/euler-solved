// p009_SpecialTriplet.js
// Created by Sandeep Nambiar - 27-12-2014

/*
  Solution inspired from
  http://stackoverflow.com/questions/575117/generating-unique-ordered-pythagorean-triplets

*/

var main = function(){

    var a,b,c;
    var requiredSum = 1000;

    var N = 1000; //upperlimit for number of triplets searched

    for(var i=1; i<=N; i++){
        var j = i+1;
        var k = j+1;
        var found = false;

        while(k<=N || found){
            while(k*k < i*i + j*j)
                k = k+1;
            if(k*k === i*i + j*j && k<=N && i+j+k===requiredSum){
                a = i; b = j; c = k;
                found = true;
                break;
            }
            j = j+1;
        }
    }

    console.log("Triplets : "+a+" "+b+" "+c);
    console.log("Product : "+a*b*c);
};

main();
