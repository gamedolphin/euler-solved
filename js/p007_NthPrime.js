// p007_NthPrime.js
// Created by Sandeep Nambiar - 27-12-2014

var nth = 10001;

var nthPrime = function(nth){
    var currentPrime = 0;

    var listOfPrimes = [];

    if(nth===1)
        return 2;

    listOfPrimes.push(2);
    currentPrime = 1;

    for(var i=3;;i+=2){
        var flag = true;
        var sqrt = Math.sqrt(i);
        for(var j=0; j<listOfPrimes.length;j++){
            var obj = listOfPrimes[j];
            if(obj>sqrt)
                continue;
            if(i%obj===0){
                flag = false;
                break;
            }
        }
        if(flag){
            listOfPrimes.push(i);
            currentPrime += 1;
        }

        if(currentPrime===nth)
            return i;

        return 1;
    }
};


var main = function(){

    var nthP = nthPrime(nth);

    console.log("The "+nth+" prime number is "+nthP);
};

main();
