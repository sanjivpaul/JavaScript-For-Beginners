# JavaScript Basic

>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language.
 >>JavaScript is Dynamically type language.
 >>JavaScript is case sensitive.

## Table Of Content

1. [Variables](https://github.com/sanjivpaul/JavaScript-For-Beginners/blob/0e1215a108d547603d58434d71882da7529b3beb/01variables.js)
2. [DataTypes](https://github.com/sanjivpaul/JavaScript-For-Beginners/blob/master/02DataTypes.js)
3. Conditional Statement
4. JS Operators
5. JS Output Statement
6. JS Input Statement
7. JS Array
8. JS Functions
9. JS Objects
10. JS String Methods
11. JS Math Object
12. JS Date Objects/Methods
13. JS Loops


## Variables

* [1.1](#1.1 "Goto 1.1") **Introduction** :
variables are containers for storing data and data values.

* [1.2](#1.2 "Goto 1.2") **4 ways of declaring variables**
  * [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
  * [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  * [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  * `nothing`

* [1.2.1](#1.2.1 "Goto 1.2.1") **var:** 
>above a, b and c are variables, declared with the **var** keyword, and ***var can be reassignable again and again.***
```javascript
//1.var  

var a = 10;
var b = 5;
var c = a + b;

//output: 15
```
* [1.2.2](#1.2.2 "Goto 1.2.2") **let:**  
>above a, b and c are variables, declared with the **let** keyword, and ***let can't reassignable only update.***
```javascript
//2.let 

let a = 10;
let b = 5;
let c = a + b;

//output: 15

```

* [1.2.3](#1.2.3 "Goto 1.2.3") **const:**  
>above **price1**, **price2** and **total** are variables, declared with the **const** keyword, and ***const nor reassignable nor update its a constant.***
```javascript
//3.const 

const price1 = 10;
const price2 = 5;
let total = price1 + price2;

//output: 15

```

* [1.2.4](#1.2.4 "Goto 1.2.4") **nothing:**  
>above **a**, **b** and **c** are undeclared  variables.
```javascript
//4.nothing 

a = 10;
b = 5;
c = a + b;

//output: 15

```

## DataTypes
* 2.1 There are two type of datatype:
  * A. **Primitive**
  * B. **Non-Primitive**

* A. Primitive
  * 1.string
  * 2.number
  * 3.boolean

* B. Non-Primitive
  * 4.object
    * null
    * function
    * array
    * jsObjects
    
* C. Undefined


