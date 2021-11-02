// const p5 = require('p5');

/* Meteor Catcher Game
Version 1.0
Megan Abou Chacra 
Catch the meteor before it hits the ground!
*/

let meteorX = 200;
let meteorY = 0;
let meteorDiameter = 20;
let speed = 1;
let catcherX = 300;
let catcherY = 300;
let catcherDiameter = 40;
let score = 0;

function setup() {
  createCanvas(400, 400);
  textSize(32);
}

function draw() {
  background(95,158,160);
  noStroke();
  
  ellipse(meteorX,meteorY,meteorDiameter);
  fill(255,222,173);
  meteorY = meteorY + speed;
  
  ellipse(mouseX,mouseY,catcherDiameter);
  fill(20,99,113);
  
  distance = dist(meteorX, meteorY, mouseX, mouseY)
  
  
  if(distance < 15) {
    meteorY = 0;
    meteorX = random(width);
    speed = random(1,4);
    meteorDiameter = random(10,30);
    score++;
  } 
  if(meteorY >= height) {
    meteorY = 0;
    meteorX = random(width);
    speed = random(1,4);
    meteorDiameter = random(10,30);
  }
  text(score, 350, 375);

}