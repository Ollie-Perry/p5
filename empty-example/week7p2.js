let x,y,size;
let xSpeed,ySpeed,xDir,yDir;
let randShape;
let colour;

let shapeArr = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    x = width/2;
    y = height/2;
    size = 10;
    xSpeed = random(0.3,5);
    ySpeed = random(0.3,5);
    xDir = 1;
    yDir = 1;

    for(let i = 0; i < 200; i++) {
        shapeArr.push(new MovingShape(random(0,width),random(0,height),random(1,40)));
    }
}

function draw() {
    noStroke();
    rectMode(CORNER);
    fill( 25, 25, 25, 20);
    rect(0, 0, width, height);

    for(let i = 0; i < 200; i++) {
        shapeArr[i].move();
        shapeArr[i].display();
    }
}

class MovingShape {
    
    constructor(startX, startY, startSize){
        this.x = startX;
        this.y = startY;
        this.size = startSize;

        this.colour = color(random(0,255),random(0,255),random(0,255));
        this.xSpeed = random(0.3,5);
        this.ySpeed = random(0.3,5);
        this.xDir = 1;
        this.yDir = 1;
    }

    move() {
        
        this.x = this.x + (this.xSpeed * this.xDir);
        this.y = this.y + (this.ySpeed * this.yDir);

        if(this.x > (width-(this.size/2)) || this.x < (this.size/2)){
            this.xDir = this.xDir * -1;
        }

        if(this.y > (height-(this.size/2)) || this.y < (this.size/2)){
            this.yDir = this.yDir * -1;
        }
    }

    display() {
        noStroke();
        rectMode(CENTER);
        fill(this.colour);
        this.randShape = random(0,2)
        if(this.randShape < 1){
            rect(this.x, this.y,this.size,this.size)
        }
        else {
            ellipse(this.x, this.y,this.size,this.size)
        }
    }
}