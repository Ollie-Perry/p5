let x = [];
let y = [];

function setup() {
    createCanvas(displayWidth,displayHeight);
    noStroke();
    console.log(width,height)
    fill(255,200);
    for(let i = 0; i < 500; i++) {
        x[i] = random(-1000,0); // different way of adding elements to an array
        y[i] = i * 2;
    }
}

function draw() {
    background(50);
    for(let i = 0; i < 500; i++) {
        x[i] += 2;
        arc(x[i],y[i] + 100,12,12,0.52,5.76);
    }
}