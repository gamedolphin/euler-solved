// p001_3or5.js
// Created by Sandeep Nambiar - 27-12-2014

var sum = 0;
for(var i=0;i<1000; i++){
    if(i%3===0 || i%5===0){
        sum += i;
        console.log(i);
    }
}

console.log("Sum : "+sum);
