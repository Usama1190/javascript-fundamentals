// Chatgpt JavaScript complex MCQ's (20)

// 01 : Which of the following will output 'true'?
// const obj = {
//     a: 'foo',
//     b: {
//         c: 'bar'
//     }
// };

// const {a, b: { c }} = obj;
// console.log(a === 'foo' && c === 'bar');

// a) 'true'  b) 'false'  c) 'undefined'  d) 'TypeError'



// 02 : What will be logged to the console

// const x = 1;

// function foo() {
//     console.log(x);    // ReferenceError : cannot access 'x' before initialization

//     const x = 2;
// }

// foo();

// a. 1    b. 2    c. undefined     d. ReferenceError  *



// 03 : What will the following code output

// const x = {};

// const y = { foo: 'bar' };

// const z = { foo: 'bar' };

// x[y] = 'baz';
// x[z] = 'quz';

// console.log(x[y]);

// a. baz      b. quz *   c. undefined    d. TypeError



// 04 : What will be the output of the following code

// let a = 1;

// let b = { a: 2 };

// let c = b;

// c.a = 3;

// console.log(a, b.a);

// a. 1, 2     b. 1, 3 *    c. 2, 3     d. 1, 1



// 05 : What will the following code log to the console

// let a = [1, 2, 3];

// let b = [...a];

// b.push(4);

// console.log(a, b);

// a. [1, 2, 3] , [1, 2, 3, 4] *         b. [1, 2, 3, 4] , [1, 2, 3, 4]
// a. [1, 2, 3] , [1, 2, 3]           d. [1, 2, 3, 4] , [1, 2, 3]





// 06 : Which of the following will not throw an error

// let foo = 'bar';

// switch ( foo ) {
//     case 'bar':
//         let baz = 'quz';
//         break;

//     case 'quuz':
//         console.log(baz);
//         break;
// }

// a. it will not throw an error        b. It will throw a ReferenceError
// c. It will throw a SyntaxError *     d. It will throw a TypeError





// 07 : What is the result of the following expression

// console.log(0.1 + 0.2 === 0.3);

// a. true     b. false  *     c. undefined    d. NaN





//  08 : What will be logged to the console

// console.log(typeof null);

// a. null    b. undefined     c. object *    d. function




// 09 : Which of the following will output 42

// const obj = {
//     valueOf: () => 42
// }

// console.log(+obj);

// a. 42 *    b. NaN      c. TypeError    d. undefined





// 10 : What will be the output of the following code 

// function foo(a, b) {
//     arguments[1] = 2;

//     console.log(b);
// }

// foo(1);

// a. 1     b. 2      c. undefined *    d. ReferenceError




// 11 : What will the following code output

// let count = 0;

// (function immediate() {
//     if(count === 0) {
//         let count = 1;

//         console.log(count);
//     }

//     console.log(count);
// })();

// a. 0, 1        b. 1, 1         c. 1, 0 *      d. undefined





// 12 : What will be logged to the console

// let arr = [1, 2, 3];

// arr[10] = 99;

// console.log(arr.length);

// a. 3      b. 11 *     c. 10      d. undefined




// 13 : Which wiil log true

// const obj = {
//     a: 'foo',
//     b: {
//         c: 'bar'
//     }
// }

// const { a: x, b: { c: y}} = obj;

// console.log( x === 'foo' && y === 'bar');

// a. true *      b. false     c. undefined     d. TypeError





// 14 : What will the following code output

// console.log([1, 2, 3] + [4, 5, 6]);

// a. [1, 2, 3, 4, 5, 6]     b. [1, 2, 3] + [4, 5, 6]
// c. [1, 2, 34, 5, 6] *     d. 1, 2, 3, 4, 5, 6



// 15. Which of the following will output true

// let obj = { a: 1 }

// Object.freeze(obj);

// obj.b = 2;

// console.log(obj);

// a. { a: 1, b: 2 }    b. { a: 1 } *   c. { a: 1, b: undefined }   d. TypeError





// 16 : What will be the result of the following code

// let a = [1, 2];

// let b = [3, 4];

// let c = [...a, ...b];


// console.log(c);


// a. [1, 2, 3, 4] *  b. [1, 2, [3, 4]]   c. [[1, 2], [3, 4]]   d. [1, 2, 3, 4, [3, 4]]





// 17 : What will be the output of the following code

// const add = (x) => (y) => x + y;

// const add5 = add(5);

// console.log(add5(10));


// These questions cover various advanced topics in JavaScript including 
// closures, scope, destructuring, object manipulation, and ES6+ features.


// a. 5     b. 10     c. 15 *      d. undefined




// 18 : What will be the logged to the console

// (function() {
//     let a = b = 3;
// })();

// console.log(typeof a);
// console.log(typeof b);

// a. undefined, undefined       b. number, number
// c. undefined, number *        d. number, undefined




// 19 : What will be the output of the following code 

// let obj = { a: 1, b: 2 };

// let clone = Object.assign({}, obj);

// clone.a = 3;

// console.log(obj.a, clone.a);

// a. 1, 1    b. 3, 3     c. 1, 3 *   d. 3, 1




// 20 : What will the following code output

// console.log( typeof (function() {})());

// a. function    b. undefined *      c. object       d. string





// 21 : What will the following code log

// function foo() {
//     bar();

//     function bar() {
//         console.log('bar');
//     }
// }

// foo();

// a. ReferenceError     b. TypeError    c. bar *     d.undefined




// 22 : What will the following code log to the console

// function foo() {
//     return {
//         bar: 'hello'
//     }
// }


// console.log(foo().bar);

// a. hello *     b. undefined      c. null       d. ReferenceError




// 23 : What will the following code log 

// let a = 1;

// {
//     let a = 2;

//     {
//         let a = 3;
//         console.log(a);
//     }

//     console.log(a);
// }

// console.log(a);

// a. 1, 2, 3     b. 3, 2, 1 *   c. 3, 3, 3     d. 3, 2, 1




// 24 : What will the following code output

// let a = 1;

// function foo() {
//     a = 2;

//     function bar() {
//         a = 3;
//     }

//     bar();

//     console.log(a);
// }

// foo();

// console.log(a);

// a. 3, 2      b. 2, 3    c. 3, 3 *     d. 2, 2




// 25 : What will the following code log

// let a = [1, 2, 3];

// let b = a;

// b.push(4);

// console.log(a, b);

// a. [1, 2, 3], [1, 2, 3, 4]         b. [1, 2, 3, 4], [1, 2, 3, 4] *
// c. [1, 2, 3, 4], [1, 2, 3]         d. [1, 2, 3], [1, 2, 3]




// 26 : What will be logged to the console

// console.log(1 + '1');

// a. '2'     b. '11' *    c. 1'1'      d. undefined





// 27 : What will be the output of the following code

// const a = {};

// const b = {};

// console.log(a === b);


// In JavaScript, the expression a === b evaluates to false in the provided code 
// because the objects a and b are different instances.


// a. true        b. false *        c. undefined       d. TypeError





// 28 : What will the following code log

// console.log([] + []);

// a. []      b. '' *        c. indefined       d. TypeError





// 29 : What will be logged to the console

// function foo() {
//     return             // automatic ; when line break
//     { 
//         bar: 'hello'
//     }
// }

// console.log(foo());

// The issue in the given function is due to JavaScript's automatic semicolon 
// insertion (ASI) and the placement of the return statement. When a return 
// statement is followed by a line break, JavaScript inserts a semicolon after 
// return, causing the function to return undefined.

// a. { bar: 'hello' }      b. undefined *     c. null     d. ReferenceError




// 30 : What will the following code output

// const arr = [1, 2, 3];

// arr[-1] = 6;

// console.log(arr[-1], arr.length);

// a. undefined, 4      b. 6, 3 *     c. undefined, 3     d. 6, 4





// 31 : What will the following code log

// const a = 2;

// let result = '';

// switch (a) {
//     case 1:
//         result = 'one';
//         break;
    
//     case 2:
//         result = 'two';
//         break;
    
//     default :
//         result = 'not one or two';
// }

// console.log(result);

// a. 'one'    b. 'two' *     c. 'not one or two'     d. undefined





// 32 : What will be logged to the console

// const obj = {
//     a: 1,
//     get b() {
//         return this.a + 1;
//     }
// }

// console.log(obj.b);

// a. 1        b. 2 *       3. undefined        4. TypeError





// 33 : What will the following code output

// console.log(0.1 + 0.2);

// a. 0.3      b. 0.30000000000004 *    c. 0.299999999999   d. NaN





// 34 : What will be logged to the console

// const a = { x: 1 };

// const b = Object.create(a);

// b.y = 2;

// console.log( b.x, b.y);

// a. undefined, 2     b. 1, undefined       c. 1, 2 *     d. undefined, undefined




// 35 : What will the following code output

// console.log(typeof typeof 1);

// a. number      b. string *      c. undefined      d. object





// 36 : What will be logged to the console 

// let foo = [1, 2, 3];

// foo.length = 0;

// console.log(foo);

// a. [] *     b. [1, 2, 3]      c. [0]       d. undefined





// 37 : What will the following code log

// let x = 5;

// let y = (x = 10);

// console.log(x, y);

// These questions cover various advanced topics in JavaScript including 
// scoping, closures, inheritance, data types, and more.


// a. 5, 10      b. 10, 5       c. 10, 10      d. undefined, undefined





// 38 : What will be the output of the following code

// let a = 3;

// let b = new Number(3);

// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(c === b);

// a. true, false, false *          b. true, true, false
// c. true, false, true             d. false, true, false





// 39 : What will the following code log 

// function foo(x) {
//     return x * 2;
// }

// const bar = foo.bind(null, 3);

// console.log(bar());

// a. 3      b. 6 *     c. undefined      d. TypeError





// 40 : What will the following code output

// const a = [1, 2, 3];

// const b = a.splice(1, 1);

// console.log(a, b);

// a. [1, 3], [2] *      b. [2], [1, 3]      c. [1, 2, 3], [1, 2]     d. [1, 3], [1, 2]




// 41 : What will the following code log

// const arr = [1, 2, 3];

// const result = arr.map((num, index) => num * index);

// console.log(result);

// a. [0, 2, 6] *     b. [1, 2, 3]     c. [0, 2, 6, 0]      d. [0, 2, 6, NaN]




// 42 : What will be the output of the following code

// const a = {};

// const b = { key: 'b' };

// const c = { key: 'c' };

// a[b] = 234;

// a[c] = 456;

// console.log(a[b]);

// a. 123     b. 456 *      c. undefined     d. NaN




// 43 : What will the following code log

// console.log('5' - 3);
// console.log('5' + 3);


// a. 2, 53 *     b. 2, 8      c. NaN, 53      d. NaN, 8




// 44 : What will be the output of the following code

// function foo() {
//     console.log(this);
// }

// const obj =  { foo }

// obj.foo();

// a. undefined      b. window      c. object *     d. null





// 45 : What will the following code log 

// function foo(a, b = a) {
//     console.log(a + b);
// }

// foo(2);

// a. NaN      b. 4 *      c. undefined     d. ReferenceError





// 46 : What will be the output of the following code 

// const arr = [1, 2, 3, 4, 5];

// const [x, , y, ...z] = arr;

// console.log(x, y, z);

// a. 1, 3, [4, 5] *     b. 1, 2, [3, 4, 5]     c. 1, 2, [4, 5]    d. 1, 3, [2, 4, 5]





// 47 : What will the following code log 

// const x = [1, 2, 3];

// const y = [4, 5, 6];

// const z = [...x, ...y];

// console.log(z);

// a. [1, 2, 3, 4, 5, 6] *           b. [[1, 2, 3], [4, 5, 6]]
// c. [1, 2, 3, [4, 5, 6]]           d. [[1, 2, 3, 4, 5, 6]]





// 48 : What will be the output of the following code

// const obj1 = { a: 1 };

// const obj2 = { b: 2 };

// const obj = { ...obj1, ...obj2 };           // Spread Operator ...

// console.log(obj);

// a. { a: 1, b: 2 } *    b. { a: 1 }      c. { b: 2 }      d. undefined




// 49 : What will the following code log

// const obj = { a: 1, b: 2, c: 3 };

// const { a, ...rest } = obj;         // rest operator / rest parameter
 
// console.log(a, rest);

// a. 1, { b: 2, c: 3 } *      b. 1, { a: 1, b: 2, c: 3 }     c. 1, { b: 2 }    d. 1, { c: 3 }





// 50 : What will be the output of the following code 

// const obj = {
//     name: 'Alice',
//     greet: function() {
//         return () => {
//             console.log(this.name);
//         }
//     }
// }

// const greet = obj.greet();

// greet();

// a. undefined     b. Alice    c. TypeError       d. ReferenceError




// 51 : What will the following code log

// function foo() {
//     return () => {
//         console.log(this);
//     };
// }

// const obj = { foo };

// obj.foo()();

// a. undefined    b. window       c. obj *      d. null





// 52 : What will be the output of the following code 

// const set = new Set( [1, 2, 3, 4] );

// console.log(set.size);

// a. 4 *         b. 5          c. 3         d. 2






// 53 : What will the following code log

// const map = new Map();

// map.set('a', 1);
// map.set('b', 2);

// for(let [key, value] of map) {
//     console.log(key, value);
// }

// a. 'a' 1, 'b' 2 *              b. 'a' 1, 'b' undefined
// c. undefined                   d. TypeError




// 54 : What will be the output of the following code

// const promise = new Promise((resolve, reject) => {
//     reject('error');
// })

// promise.then((data) => {
//     console.log('Success', data);
// })

// .catch((error) => {
//     console.log('error', error);
// })

// a. success error      b. error error      c. undefined      d. ReferenceError





// 55 : What will the following code log 

// const promise = new Promise((resolve, reject) => {
//     resolve('success');
//     reject('error');
// })

// promise.then((data) => {
//     console.log('success', data);
// })
// .catch((error) => {
//     console.log('error', error);
// });

// a. success success *    b. error error     c. ReferenceError      d.TypeError






// 56 : What will be the output of the following code

// const

// a. TypeError     b. ReferenceError    c. SyntaxError *    d. undefined





// 57 : What is the output of the 'typeof' operator when applied to an array in JS


// a. array      b. object *     c. undefined      d. function

// example
// const arr = [1, 3, 4];

// console.log(typeof arr);





// 58 : Which method is used to merge two or more arrays in JavaScript

// a. concat() *    b. merge()     c. join()      d. combine

// const a = [1, 2, 3, 4, 5];

// const b = [6, 7, 8, 9, 0];

// const c = a.concat(b);

// console.log(typeof c);




// 59 : Which of the following is not a valid JavaScript data type

// a. Boolean      b. Undefined     c. Float *     d. Object




// 60 : In JavaScript, what is the purpose of the bind() method

// a. to bind an object to a function
// b. to create a new function to specific this value *
// c. to merge two objects
// d. to create an array





// 61 : Which keyword is used to declare a constant in JavaScript

// a. let      b. const *      c. var     d. static







// 62 : What does the === operator do in JavaScript

// a. Compare two values for equality, including type *
// b. Compare two values for equality, ignoring type * 
// c. Assign a value  
// d. Performs a bitwise operations




// 63 : Which of the following methods can be used to iterate over the 
// properties of an object

// a. for loop     b. for...of loop     c. for...in loop *    d. while loop





// 64 : What is the purpose of the Promise object in JavaScript

// a. To handle synchronous operations
// b. To handle asynchronous operations * 
// c. To performs DOM manipulation
// d. To create event listeners




// 65 : Which method would you use to remove the last element of an array in JS

// a. shift()    b. pop() *     c. splice()     d. reduce()




// 66 : Which method can be used to convert a JSON string into a JavaScript object

// a. JSON.parse() *  b. JSON.stringify()   c. JSON.convert()  d. JSON.toObject()





// 67 : What is the output of the typeof null in JavaScript

// a. null    b. undefined      c. object *      d. number

// console.log(typeof null);





// 68 : Which of the following statement is true about JavaScript async functions

// a. They must always return a promise *
// b. They not contain await expression
// c. They are synchronous by nature 
// d. They can only be used inES6 module




// 69 : Which of the following will check if a variable x is not a number in JS

// a. typeof x === 'not a number'      b. typeof x !== 'number'
// c. isNaN(x) *                       d. x == NaN




// 70 : Which method is used to add new elements to the begining of an array

// a. push()    b. unshift() *     c. concat()       d. shift()





// 71 : What is the difference between let and var in JavaScript

// a. let is block scope, var is function scope * 
// b. let is function scope, var is block scope
// c. let is for constant, var is for variables
// d. let is for array, var is for objects




// 73 : Which of the following is used to handle exceptions in JavaScript

// a. try...catch *    b. if...else      c. for loop     d. while loop





// 74 : In JavaScript, which method is used to determine if an array includes a 
// certain value amoung its entries

// a. contains()    b. has()     c. includes() *      d. find()





// 75 : What does the finally block do in a try...catch statement

// a. Executes code after try and catch, regardless of the outcome *
// b. Catches error that are not caught by catch
// c. Only runs if an error is throw
// d. Declares variable for the try block





// 76 : Which of the following is a way to create an empty object in JavaScript

// a. let obj = Object()            b. let obj = new Object()
// c. let obj = {}                  d. All of the above * 






// 77 : What is the purpose of the Array.prototype.reduce() method

// These questions cover a wide range of advanced topics in JavaScript, 
// including scope, data types, error handling, array methods, and more.


// a. To reduce the length of an array
// b. To executes a reducer function on each element of the array, reslting in a 
// single output value *

// c. To filter out elements form an array
// d. To sort elements of an array




// 78 : What will be the output of the following code 

// const person = {
//     name: 'John',
//     age: 30
// }

// Object.freeze(person);

// obj.age = 25;

// console.log(person.age);

// a. 30       b. 25        c. undefined        d. TypeError




// 79 : Which of the following statements about JavaScript cloures is true

// a. Closures can only be created using arrow function
// b. Closures are functions that reference variables from their outer scope 
// even after the outer function has returned

// c. Closures do not have access to the outer function's variables
// d. Closures can only be used in synchronous code





// 80 : What will the following code output

// console.log(0 == false);          // true
// console.log(0 === false);         // false

// a. true true      b. false false      c. true false *     d. false true




// 81 : Which of the following is a valid way to create a symbol in JavaScript

// a. Symbol() *    b. new Symbol()      c. createSymbol()      d. Symbol.create()





// 82 : What will be the output of the following code

// const sym1 = Symbol('foo');
// const sym2 = Symbol('foo');

// console.log(sym1 === sym2);

// a. true      b. false *       c. undefined       d. TypeError




// 83 : Which of the following statements about Promise.all() is true

// a. It resolves when all the promises in the iterable argument have resolved
// b. It rejects immediately opun any of the input promises rejected 
// c. It resolves with an array of the resolved values from the input promises
// d. All of the above * 




// 84 : What will be the output of the following code 

// const obj1 = { a: 1, b: 2 };

// const obj2 = { ...obj1, b: 3 };

// console.log(obj2);

// a. { a: 1, b: 2 }    b. { a: 1, b: 3 } *   c. { a: 1, b: 2, b: 3 }   d. { a: 1 }




// 85 : What will be the output of the following code 

// let count = 0;

// const increment = () => ++count;

// setTimeout(increment, 1000);

// count = 5; 

// setTimeout(() => console.log(count), 2000);

// a. 0       b. 1        c. 5      d. 6 *





// 86 : What is the result of the following expression

// console.log(NaN === NaN);

// a. true      b. false *       c. undefined       d. TypeError





// 87 : What will be the output of the following code 

// function Foo() {}

// const foo = new Foo();

// console.log(Foo.prototype === foo.__proto__);

// a. true *       b. false       c. undefined       d. TypeError



// 88 : Which of the following methods can be used to copy all enumerable own 
// properties from one or more source objects to a target object

// a. Object.assing() *     b. Object.copy()      c. Object.clone()      d. Object.merge()




// 89 : Which of the following is true about JavaScript modules (ES6 modules)

// a. Variables declared inside a module are globally scoped 
// b. A module can only exports one value 
// c. A module's code is executed only once, the first time it is imported *
// d. Modules cannot import other modules 




// 90 : What will be the output of the following code 

// const arr = [1, 2, 3];

// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next().value);

// a. 1 *        b. 2          c. 3            d. undefined 




// 91 : What will be the result of the following code 

// let x = 5;

// let y = x++;

// console.log(x, y);

// a. 5, 5       b. 6, 6      c. 5, 6       d. 6, 5 *



// 92 : What will be the error if the const variable are re-assign

// a. ReferenceError     b. SyntaxError      c. TypeError *      d. ReassignError



// 93 : What is the purpose of the super keyword in JavaScript classes

// a. To define a super class       b. To call the constructor of a parent class *
// c. To create a new instance of the class    d. To reference the prototype of the class



// 94 : Which of the following methods is used to add an element to the end of 
// an array.

// a. push() *      b. pop()     c. shift()       d. unshift()




// 95 : What will be the output of the following code 

// const foo = () => ( { bar: 1 } );

// console.log(foo());

// a. undefined     b. 1       c. {}       d. { bar: 1 }




// 96 : Which of the following is a way to create a shollow copy of an array

// a. arr.copy()      b. arr.slice() *     c. arr.clone()      d. arr.merge()




// 97 : What will be the output of the following code 

// console.log(typeof function() {});

// a. function *    b. object     c. undefined      d. number




// 98 : Which of the following methods can be used to get an array of a given 
// object's own enumerable property names

// a. Object.getOwnPropertyName()       b. Object.keys() *
// c. Object.values()                   d. Object.entries()

// These questions delve into more complex aspects of JavaScript, such as 
// prototypes, iterators, modules, symbols, and advanced array and object methods.
