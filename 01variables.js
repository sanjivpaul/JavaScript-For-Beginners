/*
Subject: Js Variables
Author: Sanjiv Paul
*/

/*
Js Variables ==> variables are containers for storing data and data values.

4 types of varibles:
    1.var (ES5)
    2.let (ES6)
    3.const (ES6)
    4.nothing
*/

//1.var  ==> var can be reassignable again and again.

var a = 10;
var b = 5;
var c = a + b;

console.log(c);//15




//2.let  ==> let can't reassignable only update.

let x = 10;
let y = 5;
let z = a + b;

console.log(z);//15



//3.const ==> const nor reassignable nor update its a constant.

const price1 = 10;
const price2 = 5;
let total = price1 + price2;

console.log(total);//15




//4.nothing ==> undeclared variables.

a = 10;
b = 5;
c = a + b;

console.log(c);//15

