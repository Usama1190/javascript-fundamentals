// Reverse the string (Superman)
var myString = "Superman";
var newString = '';

for (var i = myString.length - 1; i >= 0; i--) {
    newString += myString[i];
}
console.log(newString);


// Check if the string is palindrome or not
// Superman => namrepus   : This string is not palindrome
// because palindrome is. ie: madam => madam : This string is palindrome



// Ask for the input of the user, and check alert the data type of input,
// if the user enters 88, it should show type number

let userInput = prompt("Enter string or number and see the data type:");

if (!isNaN(userInput)) {
    alert("Type: number");
} else {
    alert("Type: " + typeof userInput);
}



// Check if the given array is consistent or not. i.e.[1,2,3,4,5,6,7]. it
// is not consistent as after 3 gap is 2.

function isConsistent(array) {
    if (array.length <= 2) return true; // Arrays with 0 or 1 elements are consistent
    
    const commonDifference = array[1] - array[0];
    
    for (let i = 2; i < array.length; i++) {
        if (array[i] - array[i - 1] !== commonDifference) {
            return false;
        }
    }
    
    return true;
}

// Test the function
const testArray1 = [1, 2, 3, 5, 6, 7];
console.log(isConsistent(testArray1)); // Output: false

const testArray2 = [3, 6, 9, 12, 15];
console.log(isConsistent(testArray2)); // Output: true