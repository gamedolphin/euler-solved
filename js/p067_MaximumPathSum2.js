// p067_MaximumPathSum2.js
// Created by Sandeep Nambiar - 14-01-2015

var fs = require('fs');
// Only the file name is different.
var filename = "../resources/p067.txt";

fs.readFile(filename,'utf8',function(err,data){
    main(data);
});

var convertToMatrix = function(data){
    var mat = [];
    var rows = data.split('\n');

    for(var i=0; i<rows.length; i++){
        var cols = rows[i].split(' ');
        mat.push(cols);
    }
    var j,k;
    for(j=0; j<mat.length; j++){
        for(k=0; k<mat[j].length; k++){
            mat[j][k] = parseInt(mat[j][k]);
        }
    }

    if(isNaN(mat[j-1][k-1]))
        mat.pop();

    return mat;
};

var getMaxSum = function(matrix){
    for(var i=matrix.length-1; i>=1; i--){
        var currentRow = matrix[i];
        var nextRow = matrix[i-1];

        for(var j = 0; j < nextRow.length; j++) {
            var a = currentRow[j] + nextRow[j];
            var b = currentRow[j+1] + nextRow[j];
            var sum = a > b ? a : b;
            nextRow[j] = sum;
        }
        matrix[i-1] = nextRow;
    }
    return matrix[0][0];
};

var main = function(data){

    var matrix = convertToMatrix(data);

    var sum = getMaxSum(matrix);

    console.log(sum);
};
