function setup() {
	createCanvas(displayWidth, displayHeight);
}

function draw() {
    for (let x = 25; x < width; x = x + 50) {
        for (let y = 25; y < width; y = y +50){
            ellipse(x,y,50,50);
            fill(random(200,255), random(0,100), random(0,100));
        }
    }
}