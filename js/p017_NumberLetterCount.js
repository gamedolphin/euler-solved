// p017_NumberLetterCount.js
// Created by Sandeep Nambiar - 14-01-2015

var numToWords = require('./libs/lib_numToWords.js');

var num = 1000;

var returnRequiredStringLength = function(str){

    return str.split(' ').join('');


};

var main = function(){
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        var l = returnRequiredStringLength(numToWords(i));
        sum += l.length;
        console.log(l);
    }

    console.log("Total letters : "+sum);
};

main();
