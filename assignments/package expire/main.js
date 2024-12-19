let currentDate = new Date();

function packagePurchase() {
    let userNum = parseInt(prompt('How many days you want to access your package?', 5));

    alert('Your package starts from: ' + currentDate);

    currentDate.setDate(currentDate.getDate() + userNum);

    alert('Expire date package is: ' + currentDate);
}