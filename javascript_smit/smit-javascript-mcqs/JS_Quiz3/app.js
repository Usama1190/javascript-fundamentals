// JavaScript Quiz 3   ( 61 / 69 )                       June 08 , 24


// 69 : The variables in a function definition that catch the data passed to
//       them by the calling code are called ....

// a. return      b. parameters *      c. argument       d. function
/*
The correct answer is b. parameters.

In the context of a function definition, the variables that receive the 
data passed by the calling code are called parameters. Here’s an explanation 
of each option to clarify:

a. return: This keyword is used to return a value from a function, not to 
   catch data passed to the function.

b. parameters: These are the variables listed inside the parentheses in the 
    function definition. They catch the values (arguments) passed to the function.

c. argument: Arguments are the actual values or data you pass to the 
    function when you call it.

d. function: This refers to the entire block of code that performs a 
    specific task, not to the variables that catch passed data.

Therefore, in the context of the function definition, the correct term for 
the variables that catch the data is parameters.
*/



// 68 : What will be the output of the following JavaScript code
/*
var name = "john player";
console.log(name[3]);
*/
// a. h        b. n *           c. A          d. undefined



// 67 : How do you write "Hello world" in an alert box

// a. alertBox("Hello world")           b. msgBox("Hello world")
// c. msg("Hello world")                d. alert("Hello world")  *



// 66 : What is the keyword for extracting the year

// a. getFullYear *          b. getYear          c. getDateYear

/*
The correct keyword for extracting the year from a Date object in JavaScript 
is:

a. getFullYear

The getFullYear() method returns the year of the specified date according to 
local time.
*/



// 65 : What are the three important manipulations done in a for loop on a 
//     loop variable

// a. Updation, Incrementation, Initialization
// b. Testing, Updation, Testing
// c. Initialization, Testing, Incrementation *
// d. Initialization, Testing, Updation


/*
The three important manipulations done in a for loop on a loop variable are:

c. Initialization, Testing, Incrementation

These are the standard steps in the syntax of a for loop:

Initialization: This step sets the starting value of the loop variable.

Testing: This condition is checked before each iteration of the loop. If it 
evaluates to true, the loop continues; if false, the loop ends.

Incrementation: This step updates the loop variable, typically increasing or 
decreasing its value, after each iteration of the loop.
*/



// 64 : How can you get the total number of arguments passed to a function

// a. Using argument.length property     b. Using args.length property
// c. None of the above *                d. Both of the above


/*
The correct answer is:

c. None of the above

In JavaScript, the total number of arguments passed to a function can be 
determined using the arguments object, specifically the arguments.length 
property. Therefore, the correct approach is to use arguments.length, not 
argument.length or args.length.

The options provided in the question do not correctly state this property, 
so "None of the above" is the right choice.
*/


// 63 : What is the correct syntax for referring to an external script called
//      "app.js"

// a. <script href="app.js">            b. <script name="app.js">
// c. <script src="app.js"> *



// 62 : A function in JavaScript

// a. All of the above *            b. returns the required result
// c. operates on them              d. takes parameters


/*
The correct answer is:

a. All of the above

A function in JavaScript:

Returns the required result: A function can return a value using the return 
statement.

Operates on them: A function performs operations on the input parameters or 
variables within its scope.

Takes parameters: A function can accept input parameters to work with.

Therefore, all of the given statements about functions in JavaScript are 
correct.
*/



// 61 : Which of the following statements will throw an error

// a. var fun = function bar() {}     b. function() {} *
// c. var fun = function bar() {}     d. function fun() {}



// 60 : Which event can be generated when the mouse leaves an element

// a. onmousemove   b. onmousedown   c. onmouseover    d. onmouseout *



// 59 : Which build-in method returns the calling string value converted 
//      to uppercase

// a. changeCase(case)  b. toUpper()  c. None of the above  d. toUpperCase() *



// 58 : What will be the output of the following JavaScript code
/*
function foo(a, b) {
    alert(b);
}

foo(1);
*/
// a. Reference Error      b. 2          c. undefined * 



// 57 : Which property an arrays can be used to loop through an item

// a. size         b. length *           d. len



// 56 : How is everything treated in HTML DOM

// a. Elements       b. Attributes       c. Node *          d. Arrays


/*
The correct answer is:

c. Node

In the HTML DOM (Document Object Model), everything is treated as a node. 
This includes elements, attributes, text, and other parts of the document. 
The DOM represents the document as a tree of nodes.
*/




// 55 : Code the first line of an if statement that avoids the nesting above
//      by testing for multiple conditions
/*
if(a === 1) {
    if(c === "Max") {
        alert("OK");
    }
}
*/
// a. if(a === 1 || c === "Max") {}         b. if(c === "Max") {}
// c. if(a === 1 && c === "Max") {} *       d. if(a === 1) {}


/*
The correct answer is:

c. if(a === 1 && c === "Max") {}

This if statement combines both conditions using the logical AND operator (&&), which ensures that the alert will only be triggered if both a === 1 and c === "Max" are true, thereby avoiding the need for nested if statements.
*/




// 54 : How does for loop start

// a. for(i <= 5, i++)              b. for i = 1 to 5
// c. for(i = 0; i <= 5)            d. for(i = 0; i <= 5; i++) *



// 53 : What will be the output of the following JavaScript code
/*
var size = 5;
var a = 5;
var size = 4;

for(var j = size; j >= 0; j--) {
    console.log(a);
    a = a - 2;
}
*/
// a. 531         b. 5555 *  ❌       c. 531-1 🟢        d. 5321


/*
Here's what happens step by step:

size is initially set to 5.
a is set to 5.
size is reassigned to 4.
The for loop initializes j to size (which is now 4) and decrements j in each iteration until j is no longer greater than or equal to 0.
Inside the loop, console.log(a) is called, printing the current value of a.
a is then decremented by 2.
Let's iterate through the loop:

First iteration (j = 4): console.log(a) prints 5, then a becomes 3.
Second iteration (j = 3): console.log(a) prints 3, then a becomes 1.
Third iteration (j = 2): console.log(a) prints 1, then a becomes -1.
Fourth iteration (j = 1): console.log(a) prints -1, then a becomes -3.
Fifth iteration (j = 0): console.log(a) prints -3, then a becomes -5.
Thus, the correct output is: 5 3 1 -1 -3.

Therefore, the correct answer is:

c. 531-1
*/



// 52 : What will be the output of the following JavaScript code
/*
var sum = 14;

if(sum < 20) {
    alert("Under");
}
else {
    alert("Over");
}
*/
// a. Over     b. Under *        c. Over Under       d. Under Over



// 51 : How are the objects organized in the HTML DOM

// a. queue       b. list * ❌     c. stack         d. Hierarchy  🟢


/*
The correct answer is:

d. Hierarchy

In the HTML DOM (Document Object Model), objects are organized in a 
hierarchical structure. This structure is often referred to as a "tree," 
where each node represents an object. The hierarchy allows for a 
parent-child relationship between the elements, enabling nested elements 
within other elements.
*/



// 50 : Which of this line shoe the correct way to reassign a variable a 
//      new value

// a. var numb = 10    b. 10 = var numb    c. numb = 10 *    d. 8 => numb



// 49 : What is the value of indx
/*
var text = "to be or not to be";
var indx = text.lastIndexOf("be");
console.log(indx);
*/
// a. 15 * ❌        b. 16 🟢         c. 17           d. 14



// 48 : The keyword that rounds a number to a specified number of decimal
//     places and converts it to a string is ....

// a. toFixed *       b. round        c. random        d. decimal



// 47 : What is the full form DOM

// a. Document Object Model *            b. Document Oriented Model
// c. Document Onhalt Model              c. Document Oriented Management



// 46 : What will be the output of the following JavaScript code
/*
var sum = 14;

if(sum != 14) {
    alert("Win");
}
else {
    alert("Lose");
}

// a. win          b. lose * 
*/


// 45 : What is the function of an Array object that adds and/or removes 
//      element from an array

// a. splice() *        b. unshift()        c. toSource()       d. sort()



// 44 : How can you add a comment in a JavaScript

// a. ""This is comment           b. {This is comment}
// c. //This is comment *         d. <!-- This is comment -->



// 43 : When, if either or both sides of an operator is (are) true, the test
//      passes, what operator is it

// a. || *        b. >>         c. <<           d. &&



// 42 : What amoung the following is appropriate when an event occurs when 
//     the user clicks on an event

// a. onchange       b. onkeyup        c. onblur         d. onclick *



// 41 : What is the output of the following JavaScript code
/*
var a = 0;
var b = 0;

while(a < 3) {
    a++;
    b += 1;
    console.log(b);
}
*/
// a. 123 *      b. 135        c. 013          d. 01



// 40 : Code the first line of a function that has two parameters

// a. function combineNames() {}     b. function combineNames(firstName) {}
// c. function combineNames(lastName)
// d. function combineNames(firstName, lastName) *



// 39 : A/An .... in JavaScript can contain multiple parameters of different
//      data types

// a. array       b. function *       c. boolean         d. object



// 38 : State whether the following statements are True of False. 
//      i) JavaScript ignores spaces, tabs, and newlines that appear in the 
//         JavaScript program
//     ii) Semicolons are necessary while writing JavaScript statement
//    iii) JavaScript is a case-sensitive language

// a. True, True, False             b. True, False, True * 
// c. False, False, True            d. False, True, True



// 37 : What will be the output of the following JavaScript code
/*
var arr = [];
arr[0] = "a";
arr[1] = "b";
alert(arr.length);
*/
// a. 0         b. 2 *            c. undefined       d. 1



// 36 : Which event can be generated when the user clicks on an element

// a. after the page has unloaded          b. onclk event 
// c. onclick event *                      d. onaction event



// 35 : What is the correct way to write a JavaScript array

// a. var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")
// b. var colors = ["red", "green", "blue"] *
// c. var colors = (1:"red", 2:"green", 3:"blue")
// d. var colors = "red", "green", "blue"



// 34 : What value would JavaScript assign to an uninitialized variable

// a. false        b. NaN        c. null          d. undefined *



// 33 : Consider the below code: Identify the correct code in order to fetch
//     the value entered in a username text field

// <form name='login'>Enter Your Name: <input value='Akash' id='p_name' 
//     name='u_name'> </form>

// a. document.login.uname.value
// b. document.getElementById("p_name").value * 
// c. Both A and B
// d. document.getElementByName("name").value



// 32 : How to access the second element of the array arr = [3, 7, 10]

// a. arr[1] *     b. arr[2]     c. arr.indexOf(2)      d. arr.indexOf(1)



// 31 : What will be the output of the following JavaScript code
/*
var string1 = "123";
var intvalue = 123;

alert(string1 + intvalue);
*/
// a. 246          b. Exception         c. 123246      d. 123123 * 



// 30 : How to insert a comment that has more than one line

// a. //this comment has more than one line
// b. <--comment has more than one line-->
// c. /*comments has more than one line*/    *
// d. //comment has more than one line//



// 29 : What will be the output of the following JavaScript code
/*
var name = "John Appleseed";
var newName = name.slice(5, 10);     // 5 included and 10 excluded
console.log(newName);
*/
// a. hn App       b. pples * ❌       c. Apple 🟢       d. hn A



// 28 : What will be the output of the following JavaScript code
/*
var a = 7;

function hello() {
    if(true) {
        var a = 5;
    }
    alert(a);
}

hello();
*/
// a. 710       b. 5 *        c. 7         d. 10



// 27 : how to write an IF statement in javascript

// a. if i = 5 then    b. if i == 5 then     c. if i = 5     d. if (i == 5) *



// 26 : How do you declare a JavaScript variable

// a. v carName;  b. var carName; *  c. variable carName;  d. var carName()



// 25 : Consider the below code: identify the correct code in order to 
//     fetch the value entered in a username text field

// <form name='register'>Enter username: <input value='john' id='name' 
//      name='username'> </form>

// a. document.getElementByName('name').value
// b. None of the above 
// c. document.register.name.value
// d. document.getElementById('name').value *



// 24 : What will be the output of the following JavaScript code
/*
function printArray(a) {
    var len = a.length;

    i = 0;
    if(len == 0) {
        console.log('Empty Array');
    }
    else {
        do{
            console.log(a[i]);
        }
        while(++i < len)
    }
}

printArray([1, 2, 3]);
*/
// a. Prints 0 to the length of the array 
// b. Prints 'Empty Array'
// c. Prints the numbers in the array in the reverse order
// d. Prints the numbers in the array in order *


/*
Here's what the function does:

It takes an array a as input.

It calculates the length of the array and stores it in the variable len.

It initializes the variable i to 0.

It checks if the length of the array is 0. If it is, it prints "Empty Array".

If the array is not empty, it enters a do...while loop:

The loop prints the element at index i of the array.

It then increments i by 1 and checks if i is still less than the length of 
the array.

This continues until i is no longer less than len

For the given input [1, 2, 3]:

The length of the array len is 3.

The loop starts with i = 0 and prints a[0] (which is 1).

It increments i to 1 and prints a[1] (which is 2).

It increments i to 2 and prints a[2] (which is 3).

It increments i to 3, at which point the condition i < len (3 < 3) is false, 
and the loop terminates.

Therefore, the function prints the numbers in the array in order: 1, 2, 3.

The correct answer is:

d. Prints the numbers in the array in order
*/




// 23 : What will be the output of the following JavaScript code
/*
function range(length) {
    var a = 5;

    for(var i = 0; i < length; i++) {
        console.log(a);
    }
}

range(3);
*/
// a. 5 * ❌         b. 3          c. error       d. 5 5 5 🟢



// 22 : What is the keyword that stops a loop from countinuing to loop

// a. Flag        b. return      c. Break *        d. Continue



// 21 : What is the keyword for finding the index of the first character 
//      of the last instance of a segment

// a. length        b. lastIndexOf() *        c. indexOf()     d. index


/*
The correct answer is:

b. lastIndexOf()

The lastIndexOf() method in JavaScript returns the index of the first 
character of the last occurrence of a specified value in a string.
*/




// 20 : What will be the output of the following JavaScript code
/*
function average(a, b) {
    return a + b / 2;
}

console.log(average(2, 1));
*/
// a. 2          b. 2.5 🟢         c. 1           d. 1.5 *  ❌



// 19 : How to replace the fourth element in the arr = [1,7,9] with the 
//      value 8

// a. arr[4] = 8       b. arr[3] = 8 *        c. arr.indexOf(1) = 8



// 18 : Global and Local variables differ in their ....

// a. Scope 🟢       b. Variable       c. Global        d. Block level *❌



/*
The correct answer is:

a. Scope

Global and local variables differ in their scope.

Global variables are declared outside of any function and can be accessed 
and modified throughout the entire program.

Local variables are declared within a function and their scope is limited 
to that function (or sometimes a block of code, in the case of ES6 let and 
    const declarations).

Therefore, the main difference lies in how widely accessible these variables 
are within the program, which is what scope determines.
*/




// 17 : Which of the following methods removes the last element from an 
//    array and return it

// a. pop() *       b. unshift()       c. shift      d. push()



// 16 : Is JavaScript case-sensitive       a. No        b. Yes *



// 15 : A variable declared in the main code is a .... variable

// a. Global variable *   b. Local variable    c. Variable    d. Undefined



/*
The correct answer is:

a. Global variable

A variable declared in the main code, outside of any function, is 
considered a global variable. This means it can be accessed and modified 
from anywhere within the program, including inside functions and other code 
blocks.

Local variables, on the other hand, are declared within functions or blocks 
of code using keywords like let, const, or var, and their scope is limited 
to that specific function or block.

Therefore, the correct answer is that it is a global variable.
*/




// 14 : What is the keyword for extracting the date of the month

// a. Date        b. getMonth         c. getDate *       d. getDay


/*
The correct answer is:

c. getDate

In JavaScript's Date object, the getDate() method is used to extract the 
day of the month (1 through 31) from a given date. This method retrieves 
the day of the month as per the local time zone.
*/



// 13 : How do you round the number 7.25, to the nearest integer

// a. Math.round(7.25) * b. Math.rnd(7.25)  c. round(7.25)  d. math.round(7.25)



// How do you create a function in JavaScript

// a. function myFunction() {} *           b. myFunction() {}
// c. function:myFunction() {}             d. function = myFunction() {}



// 11 : Which of the following is true about variable naming convension in JS

// a. JavaScript variable names should not start with a numeral (0-9).
// b. You should not use any of the JavaScript reserved keyword as variable 
//     name.
// c. None of the above
// d. Both of the above *



// 10 : What will be the output of the following JavaScript code 
/*
var myarray = ['foo', 'bar', 'baz'];
myarray.length = 0;
myarray.push('bin');
console.log(myarray);
*/
// a. [bin, foo, bar, baz]             b. [foo, bar, baz]
// c. [bin] *                          d. [foo, bar, baz, bin]





// 09 : Which of these is a valid variable name in JavaScript

// a. ABC 124       b. 12Ab         c. abc123        d. abcGf *


/*
The correct answer is:

d. abcGf

In JavaScript, variable names must follow certain rules:

They must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
Subsequent characters can be letters, digits (0-9), underscores, or dollar 
signs.

They are case-sensitive.

Based on these rules, abcGf is a valid variable name because it starts with 
a letter and contains only letters and no special characters or numbers at 
the beginning.

Let's review the other options to see why they are not valid:

a. ABC 124: Contains a space, which is not allowed in variable names.
b. 12Ab: Starts with a number, which is not allowed. Variable names cannot 
   start with a digit.

c. abc123: Contains only letters and numbers, which is valid, but it's not 
   the correct answer as it lacks capital letters

d. abcGf: Valid because it starts with a letter and contains only letters.
*/





// 08 : What will be the following code

// return Boolean(10 > 9);

// a. false            b. true *            c. Nan



// 07 : The lifttime of the parameters begin 

// a. when the sescution of the function is over *❌     b. None of the above
// c. when the function is invoked  🟢      d. when the function is declined


/*
The lifetime of parameters in a function begins when the function is invoked.

When a function is invoked:

Parameters are initialized with the values passed to the function.

These parameters exist as local variables within the function's scope.

They are accessible and usable throughout the execution of the function's 
body.

So, to clarify your previous question, the correct answer would be:

c. when the function is invoked

This accurately describes when the lifetime of function parameters begins 
in JavaScript.
*/




// 06 : What does the isNaN function do in JavaScript

// a. None of the above    b. Return false if the argument is not a number
// c. Return true if the argument is not a number *
// d. Return ture if the argument is a number



// 05 : What will be the output of the following JavaScript code
/*
var a = 10;

do {
    a += 1;
    console.log(a);
}
while(a < 5);
*/
// a. 1112       b. 11121314         c. 11 *          d. 12345



// 04 : How to write an IF statement for executing some code if 'i' is NOT
//      equal to 5

// a. if(i <> 5)    b. if i =! 5 then   c. if i <> 5   d. if(i != 5) *



// 03 : What is the output of the following JavaScript
/*
function x() {
    document.write(2 + 5 + '8');
}

x();
*/
// a. 258        b. 7            c. 78 *           d. Error



// 02 : What will be the output of the following JavaScript code
/*
function hello() {
    var a = 10;

    if(a > 5) {
        a = 7;
    }

    alert(a);
}

hello();
*/
// a. 10          b. 710          c. 7 *          d. 5



// 01 : What is the purpose of the legacy DOM

// a. Modify the nodes            b. Making the script modular
// c. Make the scripting easier   d. Allows access to few keys and elements *


/*
The correct answer is:              Explanation

d. Allows access to few keys and elements

The legacy DOM (Document Object Model) refers to the original way of 
interacting with HTML documents using JavaScript. It typically refers to 
methods and properties that were available in older versions of browsers or 
JavaScript specifications.

The purpose of the legacy DOM was primarily to provide access to a limited 
set of keys (such as event handlers) and elements in the document structure, 
allowing basic manipulation and interaction with web pages. It laid the 
foundation for modern DOM manipulation techniques but had more limited 
capabilities compared to contemporary standards.

Therefore, the correct answer is that it allows access to few keys and 
elements.
*/