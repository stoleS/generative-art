let circles = [];
let radius = 0;
let offset = 0;
let velocity = 0.02;
let distance = 0;
let colors = ['#8bd1d3', '#96439d', '#390164', '#cdf5db'];

function setup() {
  createCanvas(640, 640);
  background(255);
  colorMode(HSB, 200);
  smooth();
  
  translate(width / 2, height / 2);
  
  for (let i = 0; i < 60; i++) {
    let circle = {
      r: random(10, 15),
      distance: random(50, 310),
      angle: random() * PI * 2,
      color: random(colors)
    };
    circles.push(circle);
  }
}

function draw() {
  noStroke();
  fill(255, 8);
  rect(0, 0, width, height);
  translate(width / 2, height / 2);

  for (let i = 0, offset = 0; i < circles.length; i++) {
    circles[i].angle += velocity;
    let x = circles[i].distance * cos(circles[i].angle);
    let y = circles[i].distance * sin(circles[i].angle);
    fill(circles[i].color);
    ellipse(x, y, circles[i].r);
  }
}