// Topic : Problem solve + Constructor                 ( May 19, 24 )

// remove first element of an array in JavaScript without using build-in methods

let aplhabets = ['a', 'b', 'c', 'd', 'e'];

function myShift() {
    let newArrayOfAplhabets = [];

    let firstElement = aplhabets[0];

    for(let i = 1; i < aplhabets.length; i++) {
        newArrayOfAplhabets[i - 1] = aplhabets[i];
    }

    console.log(newArrayOfAplhabets);

    return firstElement;
}

let result = myShift();

console.log(result);