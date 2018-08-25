let bubbles = []
let period = 200;
let theta = 0;
let colors = ['#8bd1d3', '#96439d', '#390164', '#cdf5db'];

function setup() {
  createCanvas(640, 640);
  background(255);

  for (let i = 0; i < 10; i++) {
    let startX = random(100, 200);
    let startY = random(100, 200);
    let amp = random(50, 250);
    let offset = random(10, 200);
    let color = random(colors);
    bubbles[i] = new Bubble(startX, startY, 20, amp, offset, color);
  }
 
}

function draw() {
  translate(width / 2, height / 2);
  
  for (let i = 0; i < bubbles.length; i++) {
    let t = random(0.001, 0.005);
    bubbles[i].move(t);
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, amplitude, offset, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.amplitude = amplitude;
    this.offset = offset;
    this.color = color;
  }

  move(t) {
    this.x = this.amplitude * sin(theta + this.offset);
    this.y = this.amplitude * cos(theta + this.offset * 200);
    theta += t * 2;
  }

  show() {
    stroke(this.color);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r * 2);
    print(this);
  }
}