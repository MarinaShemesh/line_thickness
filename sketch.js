console.log('line thickness');


function setup() {
  createCanvas(2000, 1660);
  background(0);

}

let y = 0;
function draw() {

  stroke('purple');
  strokeWeight(1);

  for (let i = 0; i < 1600; i++) {
    strokeWeight(i * 0.5);
    let lineX = i * 30;
    line(lineX + y, 0, lineX + y, height);
   
    y+= 3;
  }


}

function mousePressed() {
  save('lineThickness.png');
}