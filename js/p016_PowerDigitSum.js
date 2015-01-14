// p016_PowerDigitSum.js
// Created by Sandeep Nambiar - 14-01-2015

/*
  Created a rudimentary big integer library for this.
  Only adds, multiplies and calculates powers.
 */
var bigInt = require('./libs/lib_bigInteger.js');

var num = "2";
var pow = 1000;

var main = function(){
    var a = new bigInt(num);
    a.toThePower(pow);
    var sum = 0;
    for(var i=0; i<a.num.length; i++)
        sum += a.num[i];
    console.log(sum);
};

main();
