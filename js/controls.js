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

  if (code === keys.FORWARD) piece.position.z -= 10;
  if (code === keys.BACKWARD) piece.position.z += 10;
  if (code === keys.LEFT) piece.position.x -= 10;
  if (code === keys.RIGHT) piece.position.x += 10;
  if (code === keys.UP) piece.position.y += 10;
  if (code === keys.DOWN) piece.position.y -= 10;
  if (code === keys.ROTATEX) piece.rotateZ(-Math.PI / 2);
  if (code === keys.ROTATEY) piece.rotateX(-Math.PI / 2);
  if (code === keys.ROTATEZ) piece.rotateY(-Math.PI / 2);
}
