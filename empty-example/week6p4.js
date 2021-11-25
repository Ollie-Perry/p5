let num = 120;

let x = [];
let y = [];

//defines x and y globally as arrays

function setup() {
    createCanvas(displayWidth,displayHeight);
    noStroke();
    fill(255,200);
    for(let i = 0; i < 300; i++) {
        x[i] = 0;
        y[i] = 0;
        //creates numbers from 0 to 300 in arrays x and y
    }
}

function draw() {
    background(0);
    for(let i = num-1; i > 0; i--) {
        x[i] = x[i-1];
        y[i] = y[i-1];
        // if i is greater than 120 then 1 taken away from the 
    }

    x[0] = mouseX;
    y[0] = mouseY;

    for(let i = 0; i < num; i++) {
        fill(i * 0.94);
        ellipse(x[i],y[i],30,30);
    }
}
