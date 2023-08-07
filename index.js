// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}

function countDown(number){
    while (number > 0 ){
        console.log(number);
        number -=1;
    }
    console.log(number);
};