// Code your solutions in this file

// For loop practice

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

// For loop assignment

function writeCards(arr, event) {
    let newArr = [];
    for (let e = 0; e < arr.length; e++) {
        newArr.push(`Thank you, ${arr[e]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

// While loop assignment

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
}
