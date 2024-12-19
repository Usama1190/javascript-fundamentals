
// Question: JavaScript program that replaces spaces between words with 
// underscores:

let userMessage = 'My name is Usama Israr Khan';

for(let i = 0; i < userMessage.length; i++) {

    if(userMessage[i] === ' ') {
        console.log('_');
    }
    else {
        console.log(userMessage[i]);
    }
}