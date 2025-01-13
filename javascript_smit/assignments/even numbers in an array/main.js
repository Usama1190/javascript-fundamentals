// Question 02: How many even numbers in an array find out

let myNumbers = [1, 2, 56, 34, 43, 2, 5, 12, 78, 0, 89];

let counter = 0;

for(let i = 0; i < myNumbers.length; i++) {
    let isEven = myNumbers[i] % 2;
    if(isEven === 0) {
        counter++;
    }
}

console.log(counter + ' even numbers in given Array');