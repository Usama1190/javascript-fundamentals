// June 23 , 2024                              Sunday


// 09 : What does the following code print to the console

/*
function Hat() {
    var brand = "shhh can't tell";
    this.getBrand = function() { return brand; }
}

var my_hat = new Hat();

console.log(my_hat.getBrand());
*/

// a. shhh can't tell *            b. getBrand 
// c. error                        d. f getBrand() {}






// 08 : How to access the second element of the array 

/*
var arr = [3, 7, 10];

console.log(arr[1]);
*/

// a. arr.indexOf(1)                    b. arr.indexOf(2)
// c. arr[1]                            d. arr[2]




// 07 : What does the following code print to the console

/*
var square = {
    side_length: 4,
    area: function() {
        var l = this.side_length;
        return l * l;
    }
}

console.log(square.area());
*/

// a. 16 *         b. 0               c. 5           d. 11




// 06 : What does the following code print to the console

/*
var a = 0;
var b = 0;

while (a < 3) {
    a++;
    b += a;
    console.log(b);
}
*/

// a. 123 * ❌       b. 013          c. 01          d. 135 🟢



// 05 : What is the value of indx

/*
var text = "to be or not to be";
var indx = text.lastIndexOf("be");

console.log(indx);
*/

// a. 16 *       b. 15       c. 14        d. 17





// 04 : How to create a total number of arguments passed to a function

// a. Using args.length property         b. None of the above
// c. Using arguments.length property *  d. Both of the above

/*
The correct option is:

c. Using arguments.length property

Explanation: In JavaScript, within a function, you can use the arguments 
object to get an array-like collection of all the arguments passed to the 
function. The arguments.length property will give you the total number of 
arguments passed to the function. Here’s an example:

javascript
*/

/*
function countArguments() {
    return arguments.length;
}
  
console.log(countArguments(1, 2, 3)); // Output: 3
console.log(countArguments("a", "b")); // Output: 2
*/



// 03 : What does the following code print to the console

/*
var teddy_bear = {
    texture : 'fluffy'
}

console.log(teddy_bear["texture"]);
*/

// a. undefined      b. error     c. texture       d. fluffy * 



// 02 : how to create a constructor function?  

// a. any function when prefixed with "new" keyword at the time of 
//    invocation acts like a constructor function.   🟢

// b. name of the function should be "constructor". * ❌

// c. you have to assign a property named "constructor" and assign a 
//     function to it.      

// d. constructor function cannot be created in javascript. give me the 
//      correct option






// 01 : What does the following code print to the console

/*
var bottle = {
    contents: function() { return "some fine bubbly" },
    color: 'green'
}

console.log(bottle.contents());
*/

// a. return                    b. return "some fine bubbly"
// c. f name() {}               d. some fine bubbly *

