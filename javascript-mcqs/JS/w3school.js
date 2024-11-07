// w3school's MCQ's  (25)

// 01 : Inside which HTML element do we put the JavaScript
// a. <scripting>   b. <script> *   c. <javascript>   d. <js>



// 02 : What is the correct JavaScript syntax to change the content of HTML 
// element below

// <p id='demo'>This is a demonstration.</p>

// a. #demo.innerHTML = 'Hello World!';
// b. document.getElementById('demo').innerHTML = 'Hello World!'; *
// c. document.getElement('p').innerHTML = 'Hello World!';
// d. document.getElementByName('p').innerHTML = 'Hello World!';



// 03 : What is the correct place to insert a JavaScript

// a. the <body> section
// b. both the <head> section and the <body> section are correct *
// d. the <head> section



// 04 : What is the correct syntax for referring to an external script 'xxx.js'

// a. <script src='xxx.js'> *  b. <script href='xxx.js'  d. <script name='xxx.js'>



// 05 : The external JavaScript file must contain the <script> tag.
// a. False *                  b. True



// 06 : How do you write "Hello World" in an alert box

// a. alert('Hello World'); *    b. alertbox('Hello World');
// c. msgbox('Hello World');     d. msg('Hello World');



// 07 : How do you create a function in JavaScript

// a. function:myFunction()  b. function = myFunction()  c. function myFuncton() *



// 08 : How do you call a function named "myFunction"

// a. call myFunction()  b. call function myFunction()  c. myFunction() *



// 09 : How to write an IF statment in JavaScript

// a. if (i == 5) *   b. if i == 5 then   c. if i = 5    d. if i = 5 then



// 10 : How to write an IF statement for executing some code if "i" is NOT equal
// to 5

// a. if (i <> 5)   b. if i =! 5 then   c. if (i != 5) *   d. if i <> 5



// 11 : How does a WHILE loop start

// a. while i = 1 to 10   b. while (i <= 10) *  c. while (i <= 10, i++)



// 12 : How does a FOR loop start 

// a. for (i = 0; i <= 5)        b. for (i = 0; i <= 5; i++) *
// c. for i = 1 to 5             d. for (i <= 5; i++)



// 13 : How can you add a comment in a JavaScript

// a. 'This is a comment  b. // This is a comment *  c. <!-- This is a comment -->



// 14 : How to insert a comment that has more than one line 

// a. // This comment has more than one line
// b. /* This comment has more than one line */     *
// c. <!-- This comment has more than one line -->



// 15 : What is the correct way to write a JavaScript array

// a. var colors = ['red', 'green', 'blue']  *
// b. var colors = [1: 'red', 2: 'green', 3: 'blue']
// c. var colors = 'red', 'green', 'blue'
// d. var colors = 1 = ('red), 2 = ('green'), 3 = ('blue')



// 16 : How do you round the number 7.25, to the nearest integers

// a. Math.rnd(7.25)   b. rnd(7.25)   c. round(7.25)   d. Math.round(7.25)  *



// 17 : How do you find the number with the highest value of x and y

// a. ceil(x, y)   b. Math.ceil(x, y)   c. top(x, y)    d. Math.max(x, y)  *



// 18 : What is the correct JavaScript syntax for opening a new window called "w2"

// a. w2 = window.open('https://www.w3schools.com')
// b. w2 = window.new('https://www.w3schools.com')

// var w2 = window.open('https://www.w3schools.com', 'w2', 'width=600,height=400');

// var w2 = window.open('', 'w2', 'width=600,height=400');

// document.getElementById('openWindowButton').addEventListener('click', function() {
//     var w2 = window.open('https://www.w3schools.com', 'w2', 'width=600,height=400');
//     if (!w2) {
//         alert('Pop-up blocked. Please allow pop-ups for this site.');
//     }
// });




// 19 : JavaScript is the same as Java
// a. true    b. false  *



// 20 : How can you detect the client's browser name

// a. browser.name   b. client.navName     c. navigator.appName   *

// here is the code
// function getBrowserName() {
//     const userAgent = navigator.userAgent;
//     let browserName = "Unknown";

//     if (userAgent.includes("Firefox")) {
//         browserName = "Mozilla Firefox";
//     } else if (userAgent.includes("SamsungBrowser")) {
//         browserName = "Samsung Internet";
//     } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
//         browserName = "Opera";
//     } else if (userAgent.includes("Trident")) {
//         browserName = "Microsoft Internet Explorer";
//     } else if (userAgent.includes("Edge")) {
//         browserName = "Microsoft Edge";
//     } else if (userAgent.includes("Chrome")) {
//         browserName = "Google Chrome";
//     } else if (userAgent.includes("Safari")) {
//         browserName = "Apple Safari";
//     }

//     return browserName;
// }

// console.log(getBrowserName());



// 21 : Which event occurs when the user clicks on an HTML element

// a. onmouseclick    b. onclick *   c. onmouseover    d. onchange



// 22 : How do you declare a JavaScript variable

// a. v carName;    b. var carName; *     c. variable carName;



// 23 : Which operator is used to assign a value to a variable

// a. x      b. *     c. = *     d. -



// 24 : What will the following code return: Boolean(10 > 9)

// a. true *    b. NaN     c. false



// 25 : Is JavaScirpt case-sensitive 

// a. No     b. Yes  *