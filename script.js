/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 400;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

// net
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(400, 400);
ctx.lineTo(400, 150);
ctx.stroke();

var attacking = prompt("Which side is hitting?");

if (attacking == "left" || attacking == "away") {
  homeTeamDefense(600, 675);
  homeTeamDefense(100, 675);
  homeTeamDefense(300, 675);
  homeTeamBlocker(750, 250);
  ball(1400, 500);
  awayTeamDefense(1550, 675);
  awayTeamDefense(1000, 675);
  awayTeamOffense(950, 200);
  setter(875, 675);
} else if (attacking == "right" || attacking == "home") {
  homeTeamDefense(50, 675);
  homeTeamDefense(600, 675);
  ball(200, 500);
  setter(725, 675);
  homeTeamOffense(650, 200);
  awayTeamBlocker(850, 250);
  awayTeamDefense(1000, 675);
  awayTeamDefense(1500, 675);
  awayTeamDefense(1300, 675);
}
