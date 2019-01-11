const keys = {
  FORWARD: 38,
  BACKWARD: 40,
  LEFT: 37,
  RIGHT: 39,
  UP: 81,
  DOWN: 65,
  ROTATEX: 88,
  ROTATEY: 89,
  ROTATEZ: 90,
  DROPFIX: 32,
};

document.addEventListener('keydown', handleKeyDownPress);
function handleKeyDownPress(event) {
  const code = event.keyCode;

  if (code === keys.FORWARD) forward();
  if (code === keys.BACKWARD) backward();
  if (code === keys.LEFT) left();
  if (code === keys.RIGHT) right();
  if (code === keys.UP) up();
  if (code === keys.DOWN) down();
  if (code === keys.ROTATEX) xRotate();
  if (code === keys.ROTATEY) yRotate();
  if (code === keys.ROTATEZ) zRotate();

  pieceBox.setFromObject(piece);
}

function forward() {
  if (!pieceBox.intersectsBox(bounds.end)) piece.position.z -= 10;
  pieceBox.setFromObject(piece);
}
function backward() {
  if (!pieceBox.intersectsBox(bounds.openEnd)) piece.position.z += 10;
  pieceBox.setFromObject(piece);
}
function left() {
  console.log('foo');
  if (!pieceBox.intersectsBox(bounds.side)) piece.position.x -= 10;
  pieceBox.setFromObject(piece);
}
function right() {
  console.log('bar');
  if (!pieceBox.intersectsBox(bounds.openSide)) piece.position.x += 10;
  pieceBox.setFromObject(piece);
}
function up() {
  if (!pieceBox.intersectsBox(bounds.ceiling)) piece.position.y += 10;
  pieceBox.setFromObject(piece);
}
function down() {
  if (!pieceBox.intersectsBox(bounds.floor)) piece.position.y -= 10;
  pieceBox.setFromObject(piece);
}

function xRotate() {
  piece.rotateZ(-Math.PI / 2);
  pieceBox.setFromObject(piece);
  adjustForRotation();
}
function yRotate() {
  piece.rotateX(-Math.PI / 2);
  pieceBox.setFromObject(piece);
  adjustForRotation();
}
function zRotate() {
  piece.rotateY(-Math.PI / 2);
  pieceBox.setFromObject(piece);
  adjustForRotation();
}

function adjustForRotation() {
  if (
    pieceBox.intersectsBox(bounds.ceiling) ||
    pieceBox.intersectsBox(bounds.floor) ||
    pieceBox.intersectsBox(bounds.side) ||
    pieceBox.intersectsBox(bounds.openSide) ||
    pieceBox.intersectsBox(bounds.end) ||
    pieceBox.intersectsBox(bounds.openEnd)
  ) {
    while (
      pieceBox.intersectsBox(bounds.ceiling) ||
      pieceBox.intersectsBox(bounds.floor) ||
      pieceBox.intersectsBox(bounds.side) ||
      pieceBox.intersectsBox(bounds.openSide) ||
      pieceBox.intersectsBox(bounds.end) ||
      pieceBox.intersectsBox(bounds.openEnd)
    ) {
      if (piece.position.x < 0) right();
      if (piece.position.x > 0) left();
      if (piece.position.z < 0) backward();
      if (piece.position.z > 0) forward();
      if (piece.position.y < 0) up();
      if (piece.position.y > 0) down();
    }
    if (piece.position.x < 0) left();
    if (piece.position.x > 0) right();
    if (piece.position.z < 0) forward();
    if (piece.position.z > 0) backward();
    if (piece.position.y < 0) down();
    if (piece.position.y > 0) up();
  }
}
