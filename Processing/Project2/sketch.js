
  function setup() {
    createCanvas(880, 480);
    }
    function draw() {
    if (mouseIsPressed) {
    fill(0,255,204);
    } else {
    fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
    }
    