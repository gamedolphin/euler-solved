// p012_TriangleNumber.js
// Created by Sandeep Nambiar - 27-12-2014

var numberOfMultiples = 500;

var numberOfDivisors = function(n){
    if(n%2===0)
        n = n/2;
    var divisors = 1;
    var count = 0;

    while(n%2===0){
        count++;
        n = n/2;
    }
    divisors = divisors*(count+1);

    var p = 3;

    while(n!==1){
        count = 0;
        while(n%p===0){
            count++;
            n = n/p;
        }
        divisors = divisors*(count+1);
        p+=2;
    }
    return divisors;
};

var findIndexOfNum = function(limit){
    var n = 1;
    var lnum = numberOfDivisors(n), rnum = numberOfDivisors(n+1);

    while(lnum*rnum<limit){
        n += 1;
        lnum = rnum;
        rnum = numberOfDivisors(n+1);
    }
    return n;
};

var main = function(){

    var index = findIndexOfNum(numberOfMultiples);
    var num = (index*(index+1))/2;
    console.log(num);
};

main();


// First try below. Took too long.Brute force isn't the answer
// -----------------------------------------------------------


// /*

//   We can find a list of prime factors of a number
//   fairly quickly. The problem then reduces to finding
//   the combinations of this set of prime numbers taken
//   2,3,...,n-1 at a time which will give the total multiples.

//  */


// var primeFactorList = function(n){
//     var list = [];
//     list.push(1);
//     while(n%2===0){
//         n=n/2;
//         list.push(2);
//     }
//     var sqr = Math.sqrt(n);
//     for(var i=3; i<=sqr; i+=2){

//         while(n%i===0){
//             n=n/i;
//             list.push(i);
//         }
//     }

//     if(n>2){
//         list.push(n);
//     }
//     return list;
// };

// var numberOfFactors = function(list){

//     var factor;
//     var factorList = [];
//     var maxSetSize = list.length - 1;
//     for(var l=0;l<maxSetSize+1; l++){
//         if(factorList.indexOf(list[l])>-1)
//             continue;
//         factorList.push(list[l]);
//     }
//     for(var i=2; i<maxSetSize; i++){
//         for(var j=0,len=list.length; j+i-1<len; j++){
//             factor = 1;
//             for(var k=0; k<i; k++){
//                 factor = factor*list[j+k];
//             }
//             if(factorList.indexOf(factor)>-1)
//                 continue;
//             factorList.push(factor);
//         }
//     }
//     // console.log(factorList);
//     return factorList.length+1;
// };

// var currentSum = function(num){
//     return (num*(num+1))/2;
// };

// var main = function(){

//     var iter = 2;
//     var currentNum = currentSum(iter);
//     var list,count;

//     while(true){

//         list = primeFactorList(currentNum);
//         count = numberOfFactors(list);
//         console.log(iter,currentNum,count);
//         if(count>numberOfMultiples)
//             break;
//         iter++;
//         currentNum = currentSum(iter);
//     }

//     console.log(currentNum);
// };

// main();

// I feel stupid.
