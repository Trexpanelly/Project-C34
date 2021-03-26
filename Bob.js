class Bob {
    constructor(x, y, r) {
    var options = {
        isStatic:false,
        density: 0.25
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
}
display() {
    
    var papos = this.body.position;
    
    push();
    //translate(papos.x, papos.y);
    ellipseMode(RADIUS);
    fill(255, 0, 255);
    ellipse(papos.x, papos.y, this.r, this.r);
    pop();
}
}