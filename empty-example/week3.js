let x = 0
let y = 0
let easing = 0.01

function setup() {
    createCanvas(displayWidth, displayHeight);
    fill(200, 80);
    stroke(200, 80);

}

function draw() {
    let targetX = mouseX;
	x += (targetX - x) * easing;
    let targetY = mouseY;
	y += (targetY - y) * easing;
    let weight = dist(mouseX,mouseY,pmouseX,pmouseY) + 5
    strokeWeight(weight);
    ellipse(x, y, weight, weight)

}