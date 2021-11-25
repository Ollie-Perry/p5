let x,y,size;
let xSpeed,ySpeed,xDir,yDir;

let shapey1;
let shapey2;

let shapeArr = [];


function setup() {
    createCanvas(windowWidth,windowHeight);
    x = width/2; //middle
    y = height/2; //centre
    size = 10;
    xSpeed = random(0.3,5);
    ySpeed = random(0.3,5);
    xDir = 1;
    yDir = 1;
    shapey1 = new MovingShape();
    shapey2 = new MovingShape();

    for(let i = 0; i < 200; i++) {
        shapeArr.push(new MovingShape(random(0,width),random(0,height),random(1,40)));  // add a new MovingShape to our array each loop at random pos and with random size   
    }

}

function draw() {
    noStroke(); // no outline
    rectMode(CORNER); // draw from top left corner
    fill( 25, 25, 25, 20); //white 80 on the alpha channel
    rect(0, 0, width, height); // draw a rectangle over the whole canvas
    move();
    display();
    shapey1.move();
    shapey1.display();
    shapey2.move();
    shapey2.display();

    for(let i = 0; i < 200; i++) {
        shapeArr[i].move();
        shapeArr[i].display();
    }

}

function move() {
    x = x + (xSpeed * xDir); //add xSpeed multiplied by xDir (positive 1 or negative 1)
    y = y + (ySpeed * yDir); //add ySpeed multiplied by yDir (positive 1 or negative 1)

    if(x > (width-size) || x < size){
        xDir = xDir * -1; // flip between positive 1 and negative 1
        
    }

    if(y > (height-size) || y < size){
            yDir = yDir * -1; // flip between positive 1 and negative 1
    }

}

function display() {
    noStroke();
    rectMode(CENTER);
    fill(225);
    rect(x,y,size,size);
}

class MovingShape {
    
    constructor(startX, startY, startSize){
        this.x = startX;
        this.y = startY;
        this.size = startSize;

        this.x = width/2;
        this.y = height/2;
        this.size = 10;
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
        fill(225);
        rect(this.x, this.y,this.size,this.size)
    }

}
