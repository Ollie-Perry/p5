function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(10, 56, 232);
  } else {
    fill(100, 32, 23);
  }
  ellipse(mouseX, mouseY, 80, 90);
  //background(55);
}