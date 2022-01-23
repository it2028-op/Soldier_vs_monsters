let canvas, x0, y0, trooper, trooperImg, droidImg, backgroundImg;
let time = 0;
let Cborder = 50;
let Csize = 100;
let health = 5;
let kills = 0;
let Cspeed = 5;
let droids = [];
let blasts = [];
let lasers = [];

/*function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}*/

function setup() {
  canvas = createCanvas(1920, 1200);
  canvas.parent("mycanvas");
  trooper = new Trooper( Cborder, height / 2 - 40);
}

function draw() {
  time++;
  background(250);
  trooper.draw();
  if (time % 15  == 0) {
    droids.push(new Droid());
    console.log(droids);
  }
  droids.forEach(function (droid, index, array) {
    droid.draw();
    if (trooper.detectCollision(droid)) {
      array.splice(index, 1);
      health--;
      kills++;
      console.log(health);
    }
    if (droid.x < 0) {
      array.splice(index, 1);
      health--;
    }
    blasts.forEach(function(blast, idx, arr) {
      if (droid.detectCollision(blast)) {
        array.splice(index, 1);
        arr.splice(idx, 1);
        kills++;
      }
      if (blast.x > width){
        arr.splice(idx, 1);
      }
    });
  });

  blasts.forEach(function(blast, idx, arr) {
    blast.draw();
    if (
      blast.y > height ||
      blast.y < 0 ||
      blast.x < 0 ||
      blast.x > width
    ) {
      arr.splice(idx, 1);
    }
  });

  if(health <= 0){
    noLoop();
    background(0, 0, 0, 200);
    textSize(50);
    fill(255, 0, 0, 200);
    text('GAME IS OVER', width/2 - 200, height/2);
    textSize(20);
    fill(255, 255, 255);
    rect(width/2 - 90, height/2 + 10, 150, 50)
    fill(255, 0, 0, 200);
    text(`Score: ${kills*10}`, width/2 - 60 , height/2 + 40)
  }
}

function mousePressed() {
  x0 = mouseX;
  y0 = mouseY;
  trooper.angle += 15;
}

function mouseMoved() {}
