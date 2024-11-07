//          JavaScript MCQ's form JavaScript Daily Quizes



// Topic : JavaScript Logical Opeartors and Short-Circuiting


let result = (5 > 2) && (10 < 20) || (15 === 15) && !(5 === 5);

console.log(result);


// a. true *       b. null       c. false       d. NaN      e. undefined








// Topic : JavaScript Conditional Operator and isNaN() Function (ternary)

/*
const res = 10 + (isNaN(2) ? 0 : 20);

console.log(res);
*/

// a. 10        b. 20         c. NaN         d. 30 *      e. SyntaxError



// Topic : JavaScript Array Refernece

/*
let a = [1, 2, 3];
let b = a;

b.push(4);

console.log(a);
*/

// a. [1, 2, 3]       b. [1, 2, 3, 4] *           c. [4, 1, 2, 3]
// d. [1, 2, 3, undefined, 4]           e. [1, 2, 3, 4, 4]










// What will be the output of the code when code is executed

// Topic : JavaScript for loop and Array Manipulation
/*
let array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
}

let sum = 0;

for(let i = 0; i< array.length; i++) {
    sum += array[i];
}

console.log(sum);
*/
// a. 15        b. 30          c. 55 *        d. 45         e. 35




// What will be the output of the code when code is executed
/*
let count = 0;

for(let i = 0; i <= 10; i++) {
    let count = 0;
    count += i;
}

console.log(count);
*/
// a. 55       b. 45         c. ReferenceError      d. 0 *       e. undefined



// What will be the output of the code when code is executed
/*
let x = 5;

{
    let x = x;
}

x += 1;

console.log(x);
*/
// a. undefined      b. 5        c. NaN        d. 6 *       e. ReferenceError



// What is the output of the code when code is executed
/*
let x = 5;

{
    x = 6;
}

x +=1;

console.log(x);
*/
// a. 11        b. '7'          c. 6          d. 7 *        e. '6'



/*
console.log(!!0);               // false
console.log(!!1);               // true
console.log(!!'hello');         // true
console.log(!!"");              // false
console.log(!!null);            // false
console.log(!!undefined);       // false
console.log(!!{});              // true
console.log(!![]);              // true
*/
// !!0 is equivalent to Boolean(0)



// What is the output of ,

// console.log(!!'false');         // true



// What will be the output of the code when code is executed
/*
let arr = [1, 2, 3];

arr[6] = 9;

console.log(arr.length, arr[5]);           // 7, undefined

// a. 3, undefined      b. 6, 9        c. 7, undefined    d. 7, null    e. 7, 9
*/


// What will be the output of the code when console.log(x, y) is executed
/*
if(true) {
    var x = 3;
}

if(true) {
    let y = 3;
}

console.log(x);              // 3
console.log(y);              // ReferenceError
*/
// a. undefined, ReferenceError            b. 3, undefined      
// c. 3, ReferenceError *         d. undefined, null         e. null, 3



// What will be the output of , in JaVaScript

// console.log([] + []);

// a. '' *          b. [][]         c. error        d. null



// What is the purpose of the setTimeout() function in JavaScript

// a. Executes a function repeatedly, with a fixed time delay between each call
// b. Executes a function once, after a specified delay *
// c. Stops the execution of a function when a condition is false
// d. Checks if a condition is true, then executes a function



// Can we prevent an event from propagating in JavaScript

// a. Yes *         b. No          c. In some senecio



// What is the purpose of the addEventListener() method in JavaScript

// a. Adds a new event listener to an HTML element *
// b. Removes an event listener from an HTML element
// c. Appends a new HTML element to the document
// d. Removes an HTML element from the document



// What is the output of , in JavaScript

// console.log(+'10');

// a. 10 *       b '10'        c. NaN         d. Error



// What does the includes() method do in JavaScript

// a. Checks if an array includes a certian value *
// b. Checks if an string contains a certain substring
// c. Checks if an object contains a certain property
// d. All of the above



// What is the purpose of the charAt() method in JavaScript

// a. Returns the character at a specified index in string * 
// b. Replaces a specified value with another value in a string
// c. Removes whitespaces from both ends of a string
// d. Splits a string into an array of substrings



// What is the purpose of the splice() method in JavaScript

// a. Removes elements from an array and/or adds new elements *
// b. Concatenates two or more arrays
// c. Converts an array to a string
// d. Sorts the elements of an array



// What is the output of , in JavaScript

// console.log(typeof null);

// a. object *      b. null        c. undefined        d. string



// Which of the following is used to create a new object in JavaScript

// a. {}   b. new Object()    c. Object.create()    d. All of the above *



// What does the substring() method do in JavaScript

// a. Removes the last character of a string
// b. Extracts characters from a string, between two specified indeces *
// c. Reverse a string
// d. Converts a string to uppercase



// What does the isNaN() function do in JavaScript

// a. Checks if a value is not a number
// b. Checks if a value is a number
// c. Returns true if a value is not a number *
// d. Returns false if a value is not a number



// Which method is used to convert an array to a string in JavaScript

// a. toString() *       b. join()      c. concat()       d. slice



// What is the result of Boolean(0) in JavaScript

// a. true         b. false *        c. 0            d. 1



// Which method is use to remove the last element of an array

// a. push()         b. unshift()        c. remove()        d. pop() *



// Which method is used to add elements to the end of an array in JavaScript

// a. push() *         b. pop()        c. shift()        d. unshift()



// How do you access a property of an object in JavaScript

// a. object.propertyName           b. object.getProperty("propertyName")
// c. object["PropertyName"]        d. Both a and c *



// How do you access the first element of an array in JavaScript

// a. array[0] *    b. array[1]     c. array.first    d. array.firstElement



// Which data type represents a key-value pair collection in JavaScript

// a. Boolean      b. Object *       c. Array        d. Number



// Which data type represent a collection of elements with numeric indexes in js

// a. String       b. Array *       c. Number        d. Boolean



// Which of the following will persist decimals as well while converting 
// the type

// a. parseInt *      b. ToNumber       c. parseFloat       d. None of them



// How can you convert a string to a number in JavaScript

// a. parseInt()    b. parseFloat()      c. Number()    d. all of them *



// In JavaScript, how should you name a constructor function

// a. kebab-case       b. snake_case      c. PascalCase *    d. camelCase



// When naming constant in JavaScript, what convention should be followed

// a. PascalCase    b. camelCase *   c. SCREAMING_SNAKE_CASE   d. kebab-case



// Which of the following are a valid variable names according to JavaScript
// naming conventions

// a. 2ndVariable      b. myVar *        c. $variable      d. variable-name



// What is the recommended casing convention for naming variables in JS

// a. camelCase *      b. PascalCase       c. snake_case       d. kebab-case



// What is the output of the following code
/*
const arr = [1, 2, 3, 4, 5];

let doubled = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 3) {
        break;
    }

    doubled.push(arr[i] * 2);
}

console.log(doubled);
*/
// a. [2, 4, 6]     b. [2, 4, 6, 8, 10]    c. [2, 4] *   d. [1, 2, 3, 4, 5]



// What will be the output 

// console.log(10 % 3);

// a. 3         b. 1 *        c. 0       d. undefined



// Which of the following is used to declare a variable in JavaScript

// a. let       b. const       c. var         d. all of them *



// What is the result of the following comparison in JavaScript 5 === '5'

// a. 'true'       b. true        c. 'false'        d. false *



// Lastest version of HTML is

// a. 5 *    b. 3     c. 1       d. HTML doesn't have any version system



// What will be the output
/*
function foo() {
    return { bar: 'hello' };
}

console.log(typeof foo());
*/
// a. function       b. string       c. object *        d. undefined



// What is DOM stands for in JS

// a. Document Oriented Model       b. Documentary Object Model
// c. Document Object Model *       d. Document Objective Model



// Which method of js shows popup on screen

// a. alert() *        b. pop()        c. show()         d. None of them



// Which of the following method could be use to change number to string

// a. String()      b. .toText()      c. .toString()     d. .toLowercase()



// You have a number num = 15.555 and you want to format it to have exactly 
// 2 decimal points. Which of the following options would you use

// a. num.round(2)                b. num.toFixed(2) *         
// c. num.format(2)               d. num.decimals(2)



// What is the output of the following code
/*
var result1 = 5 + '5';

var result2 = 10 - '5';

var finalResult = result1 - result2;

console.log(finalResult);
*/
// a. '555'        b. 50 *         c. NaN          d. 5



// What is the output of the following code
/*
var x = 10;

function foo() {
    var x = 20;

    console.log(x);
}

foo();
*/
// a. 20 *       b. undefined       c. 10         d. Error



// What will be the output
/*
const newName = 'test';

newName = 'test2';

console.log(newName);
*/
// a. test2 *          b test        c. null          d. error



// What is the output of the following code
/*
function createCounter() {
    let count = 0;

    return (x) => ++count;
}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
*/
// a. 0 1 2       b. 0 0 0      c. 1 2 3 *         d. 1 1 1 



// What is the correct syntax for referring to an external script called 'zzz.js'

// a <script href='zzz.js'> b <script name='zzz.js'> c <script src='zzz.js'> *



// Where is the correct place to insert a JavaScript

// a. The <body> section b. Both the <head> section and the <body> section * 
// c. The <head> section



// 26 march 2024
// What is the correct JavaScript syntax to change the content of the HTML 
// element below

// a. <p id='demo'>This is a demonstration.</p> *
// b. document.getElementByName("p ").innerHTML = "Hello World!";
// c document.getElementById("dem o").innerHTML = "Hello World!";



// What is the output of the following code
/*
let x = 5;

console.log(x += '5');
*/
// a. 10       b. 55        c. '55' *        d. 5



// What is the output of the following code
/*
for(let i > 1; i < 5; i++) {
    console.log(i);
}
*/
// a. 12345      b. 1234       c. None of These      d. Undefined



// What is the output of the following code
/*
for(let i = 0; i < 4; i++) {
    console.log(i);
}
*/
// a. 01234      b. 1234         c. 0123 *         d. 012340



// Which of the following is non-primitive data type in js

// a. null      b. boolean     c. array *         d. number