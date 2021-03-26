class Roof {
    constructor(x, y, width, height){
        var options = {
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)
    }
    display(){
        var gropos = this.body.position;
        rectMode(CENTER);
        fill(25, 25, 23);
        rect(gropos.x, gropos.y, this.width, this.height);
    }
}