class Trooper {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = Csize - Csize/4;
      this.height = Csize;
      this.speed = Cspeed*2;
    }
  
    detectCollision(droid) {
      return collideRectRect(
        this.x,
        this.y,
        this.width,
        this.height,
        droid.x,
        droid.y,
        droid.size,
        droid.size
      );
    }
    move() {
        if (keyIsDown(UP_ARROW)) {
          if (this.y > 10+Cborder) this.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
          if (this.y < height - this.height - Cborder) this.y += this.speed;
        }
        if (keyIsDown(32)) {
          if (time % 10 == 0){
            blasts.push(new Blast(this.x + this.width+10, this.y + this.height/2));
          }
        }
      }
    
      draw() {
        this.move();
        rect(this.x, this.y, this.width, this.height);
        textSize(20);
        textStyle(BOLD);
        fill(color(255, 0, 0));
        text(`Lives: `, 30, 25);
        for(let i = 1; i <= health; i++){
          rect(70+30*i, 12, 20, 15);
        }
        text(`Kills: ${kills}`, 30, 50)
        fill(255, 255, 255);
      }
    }