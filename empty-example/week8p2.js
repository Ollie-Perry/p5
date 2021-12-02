let dots = []; // array of Jitter objects

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    stroke(255);

    // Create objects
    for (let i = 0; i < 500; i++) {
      dots.push(new Jitter(random(0,width), random(0,height), random(10, 30)));
    }
  }
  
  // create new object when mouse is pressed
function mousePressed() {
    let r = random(10, 30);
    let b = new Jitter(mouseX, mouseY, r);
    dots.push(b);
  }
  
function draw() {
    background(0);
    // move and display all the objects
    for (let i = 0; i < dots.length; i++) {
      dots[i].move();
      dots[i].display();
    }
  }
  
  // Jitter class
class Jitter {
  
    constructor(x_, y_, r_) {
      this.x = x_;
      this.y = y_;
      this.diameter = r_;
      this.speed = random(2,10);
    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    display() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }