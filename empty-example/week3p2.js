function setup() {
    createCanvas(displayWidth, displayHeight);

}

function draw() {
	stroke(100);
    strokeWeight(30);
	line(40,0,70,height);

	if (mouseIsPressed == true){
		stroke(230);
	} else if (keyIsPressed == true){
        line(0,200,width,height);
    } else {
		stroke(150);
	}

  	line(0,70,width,50);
}
