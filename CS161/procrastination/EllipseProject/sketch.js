
  function setup() {
    createCanvas(880, 480);
    }
    function draw() {
    if (mouseIsPressed) {
    fill(0,255,204);
    } else {
    fill(2,200,200);
    }
    ellipse(mouseX, mouseY, 80, 80);
    }
    