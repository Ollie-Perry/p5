let angle = 0;

function setup() {
	createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
}

function draw() {
	background(50);

	translate(100,100);
	rotate(angle);
	fill(200,200,200);
	rectMode(CENTER);
	rect(10,10,100,50);
	
	angle = angle + 1;
} 