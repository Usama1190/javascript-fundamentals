// QUIZ 02 JavaScript         ( 09/25 )             June 03, 24

// START 

// 26 : What is the output of the following code     ❌

// function outer() {
//    var x = 10;

//    return function inner() {
//       console.log(x);

//       x++
//    };
// }

// var closure = outer();

// closure();
// closure();

// a. 10, 10 *    b. 10, 11 ✔      c. 11, 12       d. undefined, undefined


// 25 : What is the output of the following code     ❌

// var arr = [1, 2, 3];

// arr[10] = 99;

// console.log(arr[6]);

// a. undefined ✔      b. 0       c. null *          d. 99


// 24 : What is the output of the following code           ❌

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// a. true, true *    b. true, false ✔      c. false, true      d. false, false


// 23 : What is the output of the following code        +1

// let a = [1, 2, 3];

// let b = a;

// a.length = 0;

// console.log(b);

// a. [] *       b. [1, 2, 3]         c. [3]          d. undefined


// 22 : What is the output of the following code       ❌

// let a = [1, 2, 3];

// let b = a;

// a = [];

// console.log(b);

// a. [] *        b. [1, 2, 3] ✔      c. [3]        d. undefined


// 21 : What is the output of the following code           +1

// (function(x) {
//    return (function(y) {
//       console.log(x);
//    })(2);
// })(1);

// a. 1 *       b. 2       c. undefined       d. ReferenceError


// 20 : What is the output of the following code      ❌

// function f() {}

// console.log(f.prototype);

// a. { constructor: f } ✔     b. object *        c. undefined       d. null


// 19 : What is the output of the following code        +1

// var a = {},
//     b = { key: 'b' },
//     c = { key: 'c' }

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);


// a. 123         b. 456 *         c. undefined        d. ReferenceError


// 18 : Whta is the value of x          +1

// var x = { foo : 1 };

// var output = (function() {
//     delete x.foo;
//     return x.foo;
// })();

// console.log(output);

// a. null       b. 1        c. undefined *        d. ReferenceError


// 17 : What will be the output of the following code           +1

// console.log(0.1 + 0.2 == 0.3);

// a. true               b. false * 


// 16 : What will be the output of the following code          +1

// console.log(typeof typeof 1);

// a. string *       b. number        c. undefined       d. object


// 15 : What is the output of the following code         ❌

// var b = 1;
// function outer(){
//     var b = 2;
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b);
//     }
//     inner();
// }
// outer();

// a. 3 *       b. 2         c. 4         d. undefined ✔


// 14 : What is the output of the following code

// function test() {
//    console.log(a);
//    console.log(foo());
//    var a = 1;
//    var foo = function() {
//        return 2;
//    };
// }
// test();

// a. undefined, 2                     b. ReferenceError, 2      
// c. undefined, ReferenceError  ✔      d. 1, 2 * 



// 13 : What is the output of the following code   ❌

// function test() {
//     console.log(a);
//     console.log(foo());

//     var a = 1;

//     function foo() {
//         return 2;
//     }
// }

// test();

// a. undefined, 2   ✔                  b. ReferenceError, 2      
// c. undefined, ReferenceError        d. 1, 2 * 


// 12 : What is the output of the following code ❌

// function foo() {
//     return {
//         bar : 'hello'
//     }
// }

// console.log(typeof foo().bar);

// a. undefined      b. object *       c. string ✔     d. number


// 11 : What is the output of the following code        ❌

// var length = 10;
// function fn() {
//     console.log(this.length);
// }
// var obj = {
//     length: 5,
//     method: function() {
//         arguments[0]();
//     }
// };
// obj.method(fn, 1);

// a. 10          b. 5          c. 2  ✔         d. undefined * 


// 10 : What is the output of the following code               +1

// console.log(false == '0');
// console.log(false === '0');

// a. true, true    b. false, false    c. true, false *     d. false, true


// 09  :What is the value of foo after the following code run     ❌

// var foo = 1;

// function bar() {
//     if(!foo) {
//         var foo = 20;
//     }

//     console.log(foo);
// }

// bar();

// a. 1 *      b. 10        c. undefined ✔       d. ReferenceError


// 08 : What will be the output of the following code    ❌

// console.log('2' - 1);
// console.log('2' + 1);

// a. 1, 3 *       b. 1, 21 ✔      c. NaN, 3       d. 1, NaN


// 07 : What is the output of the following code             +1

// console.log(1 + '2' + '2');

// a. 122 *       b. 32        c. 14        d. NaN


// 06 : What is the output of the following code       ❌

// let f = (function f() {
//     return '1';
// }, function g() {
//     return '2';
// })();

// console.log(typeof f);

// a. string      b. number ✔      c. function       d. object *


// 05 : What is the result of the following code       ❌

// let x = 10; 

// let y = (x++, x + 1)

// console.log(y);

// a. 10       b. 11 *         c. 12  ✔      d. 13


// 04 : What is the output of the following code         ❌

// for(var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

// a. 0, 1, 2, 3, 4        b. 4, 4, 4, 4, 4         d. 5, 5, 5, 5 ,5  ✔
// c. 0, 1, 2, 3, 4 ( each number printed after 1 second )  *


// 03 : What is the output of the following code       ❌

/*
var obj = {
    foo: 'bar',
    func: function() {
        var self = this;

        console.log('outer func: this.foo ' + this.foo);
        console.log('outer func: self.foo ' + self.foo);

        (function() {
            console.log('inner func: this.foo ' + this.foo);
            console.log('inner func: self.foo ' + self.foo);
        })();
    }
}
*/

/*
a. outer func: this.foo = bar, outer func: self.foo = bar, 
   inner func: this.foo = bar, inner func: self.foo = bar

b. outer func: this.foo = bar, outer func: self.foo = bar,            ✔
   inner func: this.foo = undefined, inner func: self.foo = bar

c. outer func: this.foo = bar, outer func: self.foo = bar,            *
   inner func: this.foo = undefined, inner func: self.foo = undefined

d. outer func: this.foo = undefined, outer func: self.foo = undefined, 
   inner func: this.foo = undefined, inner func: self.foo = undefined
*/


// 02 : What is the output of the following code         ❌

// var x = 21;

// var girl = function() {
//     console.log(x);

//     var x = 20;
// }

// girl();

// a. 21 *         b. 20             c. undefined ✔      d.ReferenceError


// 01 : What is the output of the following code                +1

// (function() {
//     var a = b = 3;
// })();

// console.log(b);

// a. 3 *        b. undefined       c. ReferenceError       d. TypeError



/*

A) 3 - b is declared globally.

C) undefined - Variable x is hoisted but not initialized.

B) outer func: this.foo = bar, outer func: self.foo = bar, inner func: 
   this.foo = undefined, inner func: self.foo = bar - this inside the IIFE 
   refers to the global object.

D) 5, 5, 5, 5, 5 - i is not captured in the loop.

C) 12 - x++ happens first, then x + 1.

B) number - The second function is invoked.

A) 122 - String concatenation occurs.

B) 1, 21 - "2" - 1 coerces "2" to a number, "2" + 1 results in string 
   concatenation.

C) undefined - foo is hoisted but not initialized.

C) true, false - == allows type coercion, === does not.

C) 2 - arguments object length is 2.

C) string - foo().bar is "hello".

A) undefined, 2 - a is hoisted but not initialized, foo is hoisted and 
   defined.

C) undefined, ReferenceError - foo is not a function at the time of call.

D) undefined - Local b shadows the outer b.

A) string - typeof 1 is "number", typeof "number" is "string".

B) false - Due to floating-point precision issues.

C) undefined - delete operator removes foo property.

B) 456 - Objects are coerced to strings when used as keys.

A) {constructor: ƒ} - Function prototype includes the constructor.

A) 1 - x is preserved in the closure.

B) [1, 2, 3] - b still references the original array.

A) [] - Both a and b reference the same array.

B) true, false - 1 < 2 < 3 is true, 3 > 2 > 1 is false.

A) undefined - No value at index 6.

*/