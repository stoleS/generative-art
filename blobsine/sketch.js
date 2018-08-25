let r = 100;
let yoff = 0;
let pos = 0;
let angle = 0;
let t = 100;

function setup() {
  createCanvas(640, 640);
  fill(255);
  colorMode(HSB, 200);
}

function draw() {
  stroke(t % 350, 200, 200);
  let sine = height / 2 + r * cos(angle);
  push();
  translate(r / 4 + pos, sine);
  beginShape();
  let xoff = 0;
  for (let a = 0; a < TWO_PI; a += PI/31.5) {
    let offset = map(noise(xoff + yoff), 0, 1, -25, 25);
    let radius = r + offset;
    let x = radius * cos(a);
    let y = radius * sin(a);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape(CLOSE);
  pop();
  yoff += 0.02;
  pos += 0.5;
  angle += 0.02;
  t += 0.05;
}
