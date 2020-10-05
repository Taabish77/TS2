class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
      this.trajectory=[]
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;    
      super.display();
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      }
    }
