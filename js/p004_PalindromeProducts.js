// p004_PalindromeProducts.js
// Created by Sandeep Nambiar - 27-12-2014

var min = 100;
var max = 999;

var isPalindrome = function(n){

    var number = n;
    var reverse = 0;

    while(n!==0){
        reverse = reverse*10 + (n%10);
        n = Math.floor(n/10);
    }

    if(number===reverse)
        return true;
    else
        return false;
};

var largest = 0;
var temp = 0;

for(var i=min; i<max; i++){
    for(var j=min+1; j<max; j++){
        temp = i*j;
        if(isPalindrome(temp)){
            if(temp>largest)
                largest = temp;
            console.log("Palindrome : "+temp);
        }
    }
}

console.log("Largest palindrome : "+largest);
