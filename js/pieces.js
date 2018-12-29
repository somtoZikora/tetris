let pieces;
const extrudeSettings = {
  steps: 2,
  amount: 10,
  bevelEnabled: true,
  bevelThickness: 1,
  bevelSize: 1,
  bevelSegments: 1,
};

let I = configureI();
let J = configureJ();
let L = configureL();
let O = configureO();
let S = configureS();
let T = configureT();
let Z = configureZ();

pieces = [I, J, L, O, S, T, Z];

function getRandomPiece() {
  const index = Math.floor(Math.random() * pieces.length);
  return pieces[index];
}

function generateBevelledCube(x, y, color) {
  const square = new THREE.Shape();

  square.moveTo(x, y);
  square.lineTo(x + 10, y);
  square.lineTo(x + 10, y + 10);
  square.lineTo(x, y + 10);
  square.lineTo(x, y);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(square, extrudeSettings),
    new THREE.MeshBasicMaterial({ color })
  );
}

function configureI() {
  let piece = new THREE.Group();

  piece.add(generateBevelledCube(0, 0, 'maroon'));
  piece.add(generateBevelledCube(10, 0, 'maroon'));
  piece.add(generateBevelledCube(20, 0, 'maroon'));
  piece.add(generateBevelledCube(30, 0, 'maroon'));
  piece.userData = { x: 40, y: 10, z: 10 };

  return piece;
}

function configureJ() {
  let piece = new THREE.Group();

  piece.add(generateBevelledCube(20, 0, 'silver'));
  piece.add(generateBevelledCube(20, 10, 'silver'));
  piece.add(generateBevelledCube(0, 10, 'silver'));
  piece.add(generateBevelledCube(10, 10, 'silver'));
  piece.userData = { x: 30, y: 20, z: 10 };

  return piece;
}

function configureL() {
  let piece = new THREE.Group();

  piece.add(generateBevelledCube(0, 0, 'purple'));
  piece.add(generateBevelledCube(0, 10, 'purple'));
  piece.add(generateBevelledCube(10, 10, 'purple'));
  piece.add(generateBevelledCube(20, 10, 'purple'));
  piece.userData = { x: 30, y: 20, z: 10 };

  return piece;
}

function configureO() {
  let piece = new THREE.Group();

  piece.add(generateBevelledCube(0, 0, 'navy'));
  piece.add(generateBevelledCube(10, 0, 'navy'));
  piece.add(generateBevelledCube(0, 10, 'navy'));
  piece.add(generateBevelledCube(10, 10, 'navy'));
  piece.userData = { x: 20, y: 20, z: 10 };

  return piece;
}

function configureS() {
  let piece = new THREE.Group();

  piece.add(generateBevelledCube(0, 0, 'darkgreen'));
  piece.add(generateBevelledCube(10, 0, 'darkgreen'));
  piece.add(generateBevelledCube(10, 10, 'darkgreen'));
  piece.add(generateBevelledCube(20, 10, 'darkgreen'));
  piece.userData = { x: 30, y: 20, z: 10 };

  return piece;
}

function configureT() {
  let piece = new THREE.Group();

  piece.add(generateBevelledCube(10, 0, 'brown'));
  piece.add(generateBevelledCube(0, 10, 'brown'));
  piece.add(generateBevelledCube(10, 10, 'brown'));
  piece.add(generateBevelledCube(20, 10, 'brown'));
  piece.userData = { x: 30, y: 20, z: 10 };

  return piece;
}

function configureZ() {
  let piece = new THREE.Group();

  piece.add(generateBevelledCube(10, 0, 'teal'));
  piece.add(generateBevelledCube(20, 0, 'teal'));
  piece.add(generateBevelledCube(0, 10, 'teal'));
  piece.add(generateBevelledCube(10, 10, 'teal'));
  piece.userData = { x: 30, y: 20, z: 10 };

  return piece;
}
