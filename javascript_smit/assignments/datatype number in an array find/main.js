// Question 03: Find out numbers of data type number in array

let myArray = [2, 3, 4, 'usama', true, 2, false, [], {}, 2, 6, 7, 9, 0, 3];
let counter = 0;

for(let i = 0; i < myArray.length; i++) {
    let myArrayType = myArray[i];

    if(typeof myArrayType === "number") {
        counter++;
    }
}

console.log(counter);