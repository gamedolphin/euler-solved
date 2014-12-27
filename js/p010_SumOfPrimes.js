// p010_SumOfPrimes.js
// Craeted by Sandeep Nambiar - 27-12-2014

/*

  Uses Eratosthenes Sieve to make a list of primes

*/

var main = function(){

    var maxSize = 2000000;

    var list = [];
    for(var i=0; i<maxSize; i++)
        list.push(true);

    list[0] = false;
    list[1] = false;

    var p = 2;
    var found = true;

    while(found){

        var count = 2;
        var multiple = count*p;
        while(multiple<list.length){
            if(list[multiple]!==false)
                list[multiple] = false;

            count++;
            multiple = count*p;
        }

        for(var j=p+1; j<list.length; j++){
            found = false;
            if(p<j && list[j]!==false){
                found  = true;
                p = j;
                break;
            }
        }

    }

    console.log("Done Calculating");

    var sum = 0;
    for(var k = 0,len=list.length; k<len; k++){
        if(list[k]!==false){
            sum += k;
            console.log(k);
        }
    }

    console.log("Sum : "+sum);

};

main();
