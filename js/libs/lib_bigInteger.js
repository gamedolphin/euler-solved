// lib_bigInteger.js
// Created by Sandeep Nambiar - 14-01-2015

/* Rudimentary big integer library */

function bigInt(str){

    if(typeof str==='string')
        this.num = this.convertToNumberArray(str);
    else if( Object.prototype.toString.call( str ) === '[object Array]' ) {
        this.num = str;
    }
    
    return this;
}

bigInt.prototype = {
    constructor : bigInt,

    convertToNumberArray : function(str){
        var list = [];
        for(var i = str.length-1; i>=0; i--) {
            list.push(parseInt(str.charAt(i)));
        }
        return list;
    },

    convertToString : function(list){
        var str = [];
        for(var i = 0; i < list.length; i++) {
            str.push(list[i].toString());
        }
        return str;
    },

    addBigNum : function(bigNum){
        var a,b;
        if(this.num.length>bigNum.length){
            a = this.num;
            b = bigNum;
        }
        else {
            a = bigNum;
            b = this.num;
        }
        var sum, carry=0,temp;
        var result = [];
        for(var i = 0; i < a.length; i++) {

            if(i<b.length)
                temp = b[i];
            else
                temp = 0;

            sum = a[i] + temp + carry;
            carry = Math.floor(sum/10);
            if(carry!==0)
                sum = sum % 10;
            result.push(sum);
        }
        if(carry!==0)
            result.push(carry);
        this.num = result;
    },

    multiplyByTen : function(bigNum,times){
        if(times===0)
            return;
        for(var i = 0; i < times; i++) {
            bigNum.unshift(0);
        }

    },

    multiplyByDigit : function(bigNum,digit){
        var result = [];
        var carry = 0;
        var sum = 0;
        if(digit===0)
            return [0];
        if(digit===1)
            return bigNum;
        for(var i = 0; i < bigNum.length; i++) {
            sum = bigNum[i]*digit + carry;
            carry = Math.floor(sum/10);
            if(carry!==0)
                sum = sum % 10;

            result.push(sum);
        }
        if(carry!==0)
            result.push(carry);

        return result;
    },

    multiplyBigNum : function(bigNum){
        var a,b;
        if(this.num.length > bigNum.length)
        {
            a = this.num;
            b = bigNum;
        }
        else {
            a = bigNum;
            b = this.num;
        }

        var temp;
        this.num = [0];
        for(var i=0; i<b.length; i++){
            temp = this.multiplyByDigit(a,b[i]);
            this.multiplyByTen(temp,i);
            this.addBigNum(temp);
        }

        return this.num;

    },

    toThePower : function(n){
        if(n===0){
            this.num = [1];
            return;
        }
        var mul = this.num;
        for(var i = 1; i < n; i++) {
            this.multiplyBigNum(mul);
        }
    },

    add : function(str1){
        var bignum = this.convertToNumberArray(str1);
        this.addBigNum(bignum);
    },

    multiply : function(str2){
        var bignum = this.convertToNumberArray(str2);
        this.multiplyBigNum(bignum);
    }
};

module.exports = bigInt;
