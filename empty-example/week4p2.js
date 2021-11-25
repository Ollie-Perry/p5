let x = 0;
let y = 0
let easing = 0.01;

function setup() {
	createCanvas(displayWidth, displayHeight);
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
    rectMode(CENTER);
}

function draw() {
    clear();
        switch(key){
            case "1":
                for (let x = 25; x < width; x = x + 50) {
                    for (let y = 25; y < width; y = y + 50){
                        circles(x, y);
                    }
                }
            break;
            case "2":
                for (let x = 25; x < width; x = x + 50) {
                    for (let y = 25; y < width; y = y + 50){
                        let unit = 25;
                        herringBone(x, y, unit);
                    }
                }
            break;
            case "3":
                linechase();
            break;
            case "4":
                ink();
            break;
            case "5":
                for (let x = 26; x < width; x = x + 50) {
                    for (let y = 25; y < width; y = y + 50){
                        squares(x, y);
                    }
                }
            break;
    }
}

function circles(x, y) {
    ellipse(x,y,50,50);
    fill(random(200,255), random(0,100), random(0,100));
    noStroke();
}

function herringBone(xVal, yVal, unit) {
    stroke(75);
    strokeWeight(2);

    line(xVal, yVal, xVal - unit, yVal + unit);
    line(xVal, yVal, xVal + unit, yVal + unit);
    line(xVal, yVal - unit, xVal - unit, yVal);
    line(xVal, yVal - unit, xVal + unit, yVal);
    line(xVal, yVal - unit, xVal, yVal + unit);
    line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
}

function squares(x, y) {
    rect(x,y,40,40);
    fill(random(200,255), random(0,100), random(0,100));
    let scale = random(10, 40);
    rect(x,y, scale, scale);
    fill(50, 30, 30);
    noStroke();
}

function linechase() {
    stroke(200);
    strokeWeight(30);
    let targetX = mouseX;
	x += (targetX - x) * easing;
    line(x,0,x,height);
}

function ink() {
    stroke(random(200,255), random(0,100), random(0,100));
    let targetX = mouseX;
	x += (targetX - x) * easing;
    let targetY = mouseY;
	y += (targetY - y) * easing;
    let weight = dist(mouseX,mouseY,pmouseX,pmouseY) + 5
    strokeWeight(weight * 5);
    ellipse(x, y, weight, weight)
}