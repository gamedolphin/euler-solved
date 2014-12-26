// p005_SmallestMultiple.js
// Created by Sandeep Nambiar - 27-12-2014

var min = 1;
var max = 20;

var factorsOf = function(num){
    var list = [];

    while(num%2 === 0){
        num = num/2;
        list.push(2);
    }

    for(var i=3; i<=Math.sqrt(num); i+=2){
        while(num%i === 0){
            list.push(i);
            num = num/i;
        }
    }

    if(num>2)
        list.push(num);

    return list;
};

var countObjects = function(list,obj){
    var count = 0;
    for(var i=0, len=list.length; i<len; i++){
        if(obj===list[i]){
            count++;
        }
    }

    return count;
};

var main = function(){
    var factors = [];
    for(var i=min; i<=max; i++){
        var list = factorsOf(i);
        var listOfDone = [];

        for(var j = 0, len = list.length; j<len; j++){
            var obj = list[j];
            if(listOfDone.indexOf(obj)>-1)
                continue;
            var totalNum = countObjects(list,obj);
            var inFactors = countObjects(factors,obj);
            if(totalNum > inFactors){
                for(var k=0; k<totalNum-inFactors; k++)
                    factors.push(obj);
            }
            listOfDone.push(obj);
        }
    }
    var product = 1;
    for(var l=0; l<factors.length; l++){
        product *= factors[l];
    }

    console.log("The number is "+product);
};

main();
