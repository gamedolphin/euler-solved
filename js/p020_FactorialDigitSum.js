// p020_FactorialDigitSum.js
// Created by Sandeep Nambiar - 14-01-2015

var bigInt = require('./libs/lib_bigInteger.js');

var num = 100;

var factorial = function(n){
    var num = new bigInt("1");

    for(var i = 2; i <= n; i++) {
        num.multiply(i.toString());
    }

    return num.num;
};


var main = function(n){
    var num = factorial(n);
    var sum = 0;
    for(var i=0;i<num.length; i++){
        sum += num[i];
    }

    console.log(sum);
};

main(num);
