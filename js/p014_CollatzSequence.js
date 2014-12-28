// p014_CollatzSequence.js
// Created by Sandeep Nambiar - 28-12-2014

/*
  The trick to optimize the searching is to store
  each sequence's individual elements and their counts.
  Thus during the creation of a sequence, if we encounter
  one of the numbers in our list, we know the count right away
 */

var upperLimit = 1000000;

var nextCollatz = function(num){
    if(num%2===0)
        return num/2;
    else
        return 3*num + 1;
};

var main = function(){

    var largestChain = { n : 1, count : 1 };
    var solvedList = [];
    var countList = [];
    var temp,term,count,tempArray;
    // while(true){
    for(var i=2;i<upperLimit; i++){
        term = i;
        count = 0;
        tempArray = [];
        while(term!==1){
            tempArray.push(temp);
            temp = solvedList.indexOf(term);
            if(temp>-1){
                count += countList[temp];
                break;
            }
            else
                count++;
            term = nextCollatz(term);
        }
        for(var j=0, len=tempArray.length; j<len; j++){
            if(solvedList.indexOf(tempArray[j])>-1)
                continue;
            solvedList.push(tempArray[j]);
            countList.push(count-j);
        }

        if(count>largestChain.count){
            largestChain = { n : i, count : count };
            console.log(largestChain);
        }
    }
};

main();
