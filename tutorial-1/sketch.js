let rectWidth = 100;
let rectHeight = 50;

function setup(){
    createCanvas(displayWidth, displayHeight);
    background(50,60,70);
    //noLoop()
}

function draw(){
    textSize(50);
    text("Hello World", 100,100);
    fill(random(0,255),random(0,255),random(0,255));
    rectMode(CENTER);
    drawShape(rectWidth,rectHeight)
}

function drawShape(rectWidth,rectHeight){
    let xPos = random(0, width);
	let yPos = random(0, height);
    fill(100, 30, 20);
    
    let choice = random(0,2);
    if(choice > 1){
        rect(xPos,yPos,rectWidth, rectHeight);
    } else if (choice < 0.5) {
        ellipse(xPos,yPos,rectWidth, rectHeight);
    } else {
        triangle(xPos,yPos,rectWidth, rectHeight);
    }
}