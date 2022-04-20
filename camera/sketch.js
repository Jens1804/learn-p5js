const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
let video;

function preload() {
  //video = loadImage("camera/ironlowres.jpg");
}

function setup() {
  createCanvas(800, 590);
  //noCanvas();
  video = createCapture(VIDEO);
  video.size(60, 60);
}

function draw() {
  textSize(10);
  text("Camera 0.1", 50, 50);
  background(0);
  //image(kitten, 0, 0, width, height);

  let w = width / video.width;
  let h = height / video.height;
  let rOffset = 0;
  let gOffset = 0;
  let bOffset = 0;
  //kitten.loadPixels();
  video.loadPixels();
  for (let i = 0; i < video.width; i++) {
    for (let j = 0; j < video.height; j++) {
      const pixelIndex = (i + j * video.width) * 4;
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      noStroke();

      r = r + rOffset;
      if (r > 255) r = 255;
      if (g > 255) g = 255;
      if (b > 255) b = 255;

      fill(r, g, b);
      // fill(
      //   map(r, 0, 255, 0, 16) * 16,
      //   map(g, 0, 255, 0, 16) * 16,
      //   map(b, 0, 255, 0, 16) * 16
      // );

      // fill(
      //   map(r, 0, 255, 0, 1) * 128,
      //   map(g, 0, 255, 0, 1) * 128,
      //   map(b, 0, 255, 0, 1) * 128
      // );

      //fill(avg);
      //fill(0, 255, 0);
      //fill(255);
      //square(i * w, j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const bla = 1;
      function blub5(a, b, c, d, e, f, g, h, i, j) {
        return "hihi";
      }
      function blub7(a, b, c, d, e, f, g, h, i, j) {
        return "hihi";
      }

      textSize(w);

      textAlign(CENTER, CENTER);
      //text("K", i * w, j * h);
      //text(density.charAt(charIndex), i * w, j * h);
      ellipse(i * w, j * h, 5, 5);
    }
  }
}
