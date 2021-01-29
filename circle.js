// 559x794: 96PPI, 1748x2480: 300PPI
let width = 4096;
let height = 2160;

function setup() {
    createCanvas(width, height); // 96PPI
    //background(220);
    background(255);
    let centerX = width / 2;
    let centerY = height / 2;

    stroke(0);
    strokeWeight(4);
    point(centerX, centerY);

    point(centerX, centerY-10);
    point(centerX+15, centerY+10);
    point(centerX-15, centerY+10);
    
    fill(0);
    triangle(centerX, centerY-20, centerX+30, centerY+20, centerX-30, centerY+20);
    noFill();

    var maxRadius = width/4;
    var minRadius = height/4;
    for(var i = 0; i<200; i++) {
        var angle = Math.random() * Math.PI * 2
        var innerRadius = Math.random() * (maxRadius-minRadius) + minRadius

        var outerX = Math.cos(angle)*maxRadius+centerX;
        var outerY = Math.sin(angle)*maxRadius+centerY;

        var innerX = Math.cos(angle)*innerRadius+centerX;
        var innerY = Math.sin(angle)*innerRadius+centerY;

        line(outerX, outerY, innerX, innerY);
    }

}

function draw() {}
