// Question 05: JavaScript function that takes a base value and returns that 
// value raised to the power of itself


function numMul(number) {
        let num = number;
        let mul = 1;
    
        for(let i = 0; i < num; i++) {
            mul *= num;
        }
    
        console.log('4 ** 4 = ' , mul);
    }
    
numMul(4);