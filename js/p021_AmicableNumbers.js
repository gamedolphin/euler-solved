// p021_AmicableNumbers.js
// Created by Sandeep Nambiar - 14-01-2015

var maxNum = 10000;

var getSumOfDivisors = function(n){
    var list = [];
    var sqrt = Math.sqrt(n);
    for(var i=2 ; i<sqrt;i++){
        if(n%i===0){
            list.push(i);
            list.push(n/i);
        }
    }

    list.push(1);

    var sum = list.reduce(function(a, b) {
        return a + b;
    },0);

    return sum;
};

var main = function(num){

    var doneList = [];
    var reqList = [];
    for(var i=4 ; i<num ; i++){
        if(doneList.indexOf(i)>-1)
            continue;
        var sum = getSumOfDivisors(i);
        var sum2 = getSumOfDivisors(sum);
        if(sum2===i && sum!==i)
            reqList.push(sum,i);
        doneList.push(sum,i);
    }
    var ans = reqList.reduce(function(a,b) {
        return a + b;
    },0);
    console.log(reqList);
    console.log("Sum = "+ans);
};

console.time("main");
main(maxNum);
console.timeEnd("main");



