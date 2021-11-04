let canvasHeight = innerHeight -30;
let canvasWidth = innerWidth -30;

//sun
let sunColor = [55,255,110,150];
let sunSize = 100;
let sunStroke = .25;

//moon
let moonColor = [255,55,25,200];
let moonSize = 40;
let moonStroke = 1;

//star
let starColor = [250,105,255,100];
let starSize = 20;
let starStroke = .25;

//angle
let angle = 0

// setup
function setup() {

 createCanvas(canvasWidth, canvasHeight, WEBGL);
 background(0,0,0);
}

//object1
function drawSun(x,y,z){
    push()
        translate(x,y,z);
        rotateY(angle);
        rotateZ(1*angle);
        fill(sunColor);
        strokeWeight(sunStroke);
        sphere(sunSize, 14, 14);
    pop();
}

//object2
function drawMoon(x,y,z){
    push()
        translate(x,y,z);
        rotateY(4*angle);
        rotateZ(2*angle);
        fill(moonColor);
        strokeWeight(moonStroke);
        sphere(moonSize, 8, 8);
    pop();
}

//object3
function drawStar(x,y,z){
    push()
        translate(x,y,z);
        // rotateY(4*angle);
        // rotateZ(2*angle);
        fill(starColor);
        strokeWeight(starStroke);
        sphere(starSize, 8, 8);
    pop();
}

// draw
function draw() {
    angleMode(DEGREES);
    angle = angle + .35;
    rotateZ(angle/2);
    rotateY(angle);
    drawSun(0, -canvasHeight/4, 0);
    drawMoon(0, 0, -canvasHeight/6);
    drawMoon(0, 0, canvasHeight/6);
    // drawStar(0, 0, 0);
    drawSun(0, canvasHeight/4, 0);
    drawSun(-canvasHeight/4, 0, 0);
    drawSun(canvasHeight/4, 0, 0);
    drawMoon(canvasHeight/8, -canvasHeight/8, 0);
    drawMoon(canvasHeight/8, canvasHeight/8, 0);
    drawMoon(-canvasHeight/8, -canvasHeight/8, 0);
    drawMoon(-canvasHeight/8, canvasHeight/8, 0);

    drawStar(canvasHeight/2.5, 0, 0);
    drawStar(-canvasHeight/2.5, 0, 0);
    drawStar(0, 0, canvasHeight/2.5);
    drawStar(0, 0, -canvasHeight/2.5);








}
