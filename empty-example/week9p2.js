let b1;
let b2;

function setup(){
	createCanvas(windowWidth,windowHeight);
	b1 = new Bubble(random(50,width-50),random(50,height-50));
	b2 = new Bubble(random(50,width-50),random(50,height-50));
}

function draw() {
	background(200);
	b1.move();
	b2.move();
	b1.display();
	b2.display();
    b1.intersects(b2);
   // b2.intersects();
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