class Bin extends BaseClass{
constructor(x,y,width,height){
    super(x,y,200,200);
    this.image = loadImage("garbage.png");
     }
  display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,200,200);
  }
}