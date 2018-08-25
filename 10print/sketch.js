let x = 0;
let y = 0;
let spacing = 30;
let t = 100;

function setup() {
  createCanvas(640, 640);
  stroke(255);
  colorMode(HSB, 200);
}

function draw() {
  strokeWeight(5);
  if (random(1) < 0.5) {
    stroke(t % 350, 200, 200);
    line(x, y, x + spacing, y + spacing);
  } else {
    stroke(t % 350, 200, 200);
    line(x, y + spacing, x + spacing, y);
  }
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }

  t += 0.12;
  
}