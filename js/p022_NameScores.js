// p022_NameScores.js
// Created by Sandeep Nambiar - 14-01-2015

var fs = require('fs');
var filename = "../resources/p022.txt";

fs.readFile(filename,'utf8',function(err,data){
    console.time("main");
    main(data);
    console.timeEnd("main");
});

var main = function(data){
    var list = data.split(",");

    for (var i = 0; i < list.length; i++) {
        list[i] = list[i].replace(/"/g, "");
    }

    list.sort();

    var code = 'A'.charCodeAt(0) - 1;
    var sum = 0;
    for(var j=0, len = list.length; j<len; j++){
        var name = list[j];
        var score = 0;
        for(var k=0; k<name.length; k++){
            score += name.charAt(k).charCodeAt(0) - code;
        }
        score = (j+1)*score;
        sum += score;
    }

    console.log("Sum : "+sum);
};
