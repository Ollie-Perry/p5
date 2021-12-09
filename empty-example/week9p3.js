let shapeArr = [];
let other = [];
let shapeNum = 10;

function setup(){
	createCanvas(windowWidth,windowHeight);
	for(let i = 0; i < shapeNum; i++) {
        shapeArr.push(new Bubble(random(0,width),random(0,height),random(1,40)));
    }
}

function draw() {
	background(200);
	for(let i = 0; i < shapeNum; i++) {
        shapeArr[i].move();
        shapeArr[i].display();
		for (let j = 0; j < shapeNum; j++){
			if(i != j){
				shapeArr[i].intersects(shapeArr[j]);
			}
		}
	}
}


class Bubble {
	
	constructor(startX, startY){
		
		this.x = startX;
		this.y = startY;
		this.r = 150;
		this.col = color(random(125,255), random(125,255), random(125,255));

		this.xSpeed = random(5,6);
		this.ySpeed = random(5,6);
		this.xDir = 1;
		this.yDir = 1;

	}

	changeColor() {
		this.col = color(random(125,255), random(125,255), random(125,255));
	}

    intersects(other) {
		if (dist(this.x,this.y,other.x,other.y) < this.r + other.r){
			this.changeColor();
			other.changeColor();
			}
		}

	move() {
		
		this.x = this.x + (this.xSpeed * this.xDir);
		this.y = this.y + (this.ySpeed * this.yDir);

		if(this.x > (width-(this.r)) || this.x < (this.r)){
			this.xDir = this.xDir * -1;
		}

		if(this.y > (height-(this.r)) || this.y < (this.r)){
			this.yDir = this.yDir * -1;
		}

	}

	display() {
		noStroke();
		fill(this.col);
		ellipse(this.x, this.y,this.r*2,this.r*2);
	}

}