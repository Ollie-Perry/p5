

function setup(){
    createCanvas(displayWidth, displayHeight);
    background(50,60,70);
    frameRate(20)
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = 'black';
    //noLoop()
}

function draw(){
    fill(random(10,100),random(10,100),random(10,100));
    noStroke()
    rectMode(CENTER);
    drawShape()
}

function drawShape(){
    let xPos = random(0, width);
	let yPos = random(0, height);
    let xPos2 = random(0, width);
	let yPos2 = random(0, height);
    let xPos3 = random(0, width);
	let yPos3 = random(0, height);
    let shapeWidth = random(10,700);
    let shapeHeight = random(10,700);
    let choice = random(0,3);
    if(choice < 1){
        rect(xPos,yPos,shapeWidth, shapeHeight);
    } else if (choice > 2) {
        ellipse(xPos,yPos,shapeWidth, shapeHeight);
    } else {
        triangle(xPos,yPos,xPos2,yPos2,xPos3,yPos3);
    }
}