let myArr = [];
let mySentence = "I like/love creative coding, so far";
let chopper;
let likeLove;
let xPos = 0;

function setup() {
    createCanvas(displayWidth,displayHeight);
    frameRate();
    background(50);
    chopper = mySentence.split(" ");
    likeLove = chopper[1].split("/");
    chopper[1] = likeLove[1];
    //chopper = chopper.reverse();
    //chopper = shuffle(chopper);
    //chopper = chopper.join(" ");
    console.log(chopper);
}

function draw() {
    textSize(32);
    //text(chopper, 50, 100)
    fill(225);
    for (let i = 0; i < chopper.length; i++) {
        
        text(chopper[i],xPos,random(10,height));
        xPos = xPos+(width/1000);
        if(xPos > width) {
            xPos = 0;
        }
    }

}