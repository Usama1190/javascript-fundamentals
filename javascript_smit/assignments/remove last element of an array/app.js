// JavaScript function that remove last element of an array without using build-in
// methods 


const myArray = ['a','b','c','d','e'];

function popFunc() {
    let lastElement = myArray.length - 1;
    myArray[myArray.length - 1];

    return lastElement;
}

let runFunc = popFunc();
console.log(myArray, 'length of myArray ' + runFunc);