let x = 0;
let easing = 0.01;

function setup() {
	createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(20);
    stroke(200);
    strokeWeight(30);
    let targetX = mouseX;
	x += (targetX - x) * easing;
    line(x,0,x,height);
}