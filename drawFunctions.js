function homeTeamDefense(x, y) {
  // x = 250, y = 100
  ctx.scale(0.5, 0.5);
  // head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.stroke();

  // torso
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 75);
  ctx.stroke();

  // left leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x - 25, y + 125);
  ctx.stroke();

  // right leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x + 25, y + 100);
  ctx.lineTo(x + 12.5, y + 125);
  ctx.stroke();

  // arms
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x + 50, y + 70);
  ctx.stroke();
  ctx.scale(2, 2);
}

function homeTeamOffense(x, y) {
  ctx.scale(0.5, 0.5);
  // x = 250, y = 100
  // head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.stroke();
  // torso
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 75);
  ctx.stroke();
  // right leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x - 15, y + 115);
  ctx.lineTo(x - 40, y + 120);
  ctx.stroke();
  // left leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x + 10, y + 120);
  ctx.lineTo(x, y + 145);
  ctx.stroke();
  // right arm
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x - 40, y + 45);
  ctx.lineTo(x - 30, y + 10);
  ctx.stroke();
  // left arm
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x + 60, y + 20);
  ctx.stroke();
  ctx.scale(2, 2);
}

function homeTeamBlocker(x, y) {
  // x = 250, y = 100
  ctx.scale(0.5, 0.5);
  // head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x - 5, y + 1, 25, 0, 2 * Math.PI);
  ctx.stroke();
  // torso
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 75);
  ctx.stroke();
  // right arm
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x + 25, y - 50);
  ctx.stroke();
  // left arm
  ctx.beginPath();
  ctx.moveTo(x + 20, y - 5);
  ctx.lineTo(x + 35, y - 40);
  ctx.stroke();
  // right leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x - 3, y + 100);
  ctx.lineTo(x - 15, y + 125);
  ctx.stroke();
  // left leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x + 5, y + 125);
  ctx.stroke();
  ctx.scale(2, 2);
}

function setter(x, y) {
  // x = 250, y = 100
  ctx.scale(0.5, 0.5);
  // head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.stroke();
  // torso
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 75);
  ctx.stroke();
  // left leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x - 10, y + 110);
  ctx.lineTo(x - 10, y + 140);
  ctx.stroke();
  // right leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x + 10, y + 110);
  ctx.lineTo(x + 10, y + 140);
  ctx.stroke();
  // left arm
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x - 10, y + 23);
  ctx.moveTo(x - 15, y - 20);
  ctx.lineTo(x - 13, y - 50);
  ctx.stroke();
  // right arm
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x + 10, y + 23);
  ctx.moveTo(x + 15, y - 20);
  ctx.lineTo(x + 13, y - 50);
  ctx.stroke();
  ctx.scale(2, 2);
}

function awayTeamDefense(x, y) {
  // x = 250, y = 100
  ctx.scale(0.5, 0.5);
  // head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.stroke();

  // torso
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 75);
  ctx.stroke();

  // left leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x + 25, y + 125);
  ctx.stroke();

  // right leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x - 25, y + 100);
  ctx.lineTo(x - 12.5, y + 125);
  ctx.stroke();

  // arms
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x - 50, y + 70);
  ctx.stroke();
  ctx.scale(2, 2);
}

function awayTeamOffense(x, y) {
  ctx.scale(0.5, 0.5);
  // x = 250, y = 100
  // head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.stroke();
  // torso
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 75);
  ctx.stroke();
  // right leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x + 15, y + 115);
  ctx.lineTo(x + 40, y + 120);
  ctx.stroke();
  // left leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x - 10, y + 120);
  ctx.lineTo(x, y + 145);
  ctx.stroke();
  // right arm
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x + 40, y + 45);
  ctx.lineTo(x + 30, y + 10);
  ctx.stroke();
  // left arm
  ctx.beginPath();
  ctx.moveTo(x, y + 40);
  ctx.lineTo(x - 60, y + 20);
  ctx.stroke();
  ctx.scale(2, 2);
}

function awayTeamBlocker(x, y) {
  // x = 250, y = 100
  ctx.scale(0.5, 0.5);
  // head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x + 5, y + 1, 25, 0, 2 * Math.PI);
  ctx.stroke();
  // torso
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 75);
  ctx.stroke();
  // right arm
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x - 25, y - 50);
  ctx.stroke();
  // left arm
  ctx.beginPath();
  ctx.moveTo(x - 20, y - 5);
  ctx.lineTo(x - 35, y - 40);
  ctx.stroke();
  // right leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x + 3, y + 100);
  ctx.lineTo(x + 15, y + 125);
  ctx.stroke();
  // left leg
  ctx.beginPath();
  ctx.moveTo(x, y + 75);
  ctx.lineTo(x - 5, y + 125);
  ctx.stroke();
  ctx.scale(2, 2);
}

function ball(x, y) {
  ctx.scale(0.5, 0.5);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.scale(2, 2);
}
