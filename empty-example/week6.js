let myArr = [];
let xPos = 0;



function setup() {
    createCanvas(displayWidth,displayHeight);
    for (let i = 0; i < 256; i++) {
        myArr.push(i)
        myArr.reverse();
    }
    myArr = shuffler(myArr);
    console.log(myArr);
}

function draw() {
    noStroke();
    for (let i = 0; i < myArr.length; i++) {
        fill(myArr[i], (myArr[i] - 100), myArr[i] - 200);
        rect(xPos,0,width/256,height);
        xPos = xPos+(width/256);
    }
}

function shuffler(array) {
    
    for (let i = array.length - 1; i > 0; i--) { // iterating backwards?!
        let j = Math.floor(Math.random() * (i + 1)); // Rounding down to the nearest integer, pick a random number and multiply it by i + 1, assign it to j
        let temp = array[i]; // declare a temporary variable called temp and assign it to the value of our old array element
        array[i] = array[j]; // the following two lines swap the new random element with the old one
        array[j] = temp; // we made a temporary copy the old array element, which we can now assign to index where we just moved our new one from
    }

    return array;
}
