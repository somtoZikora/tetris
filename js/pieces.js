let pieces;
const extrudeSettings = {
  steps: 2,
  amount: 20,
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
  square.lineTo(x + 20, y);
  square.lineTo(x + 20, y + 20);
  square.lineTo(x, y + 20);
  square.lineTo(x, y);

  const cube = new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(square, extrudeSettings),
    new THREE.MeshBasicMaterial({ color })
  );
  cube.position.z = -10;
  return cube;
}

function configureI() {
  let piece = new THREE.Mesh(
    new THREE.BoxBufferGeometry(80, 20, 20),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  piece.add(generateBevelledCube(-40, -10, 'maroon'));
  piece.add(generateBevelledCube(-20, -10, 'maroon'));
  piece.add(generateBevelledCube(0, -10, 'maroon'));
  piece.add(generateBevelledCube(20, -10, 'maroon'));

  return piece;
}

function configureJ() {
  let piece = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 40, 20),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  piece.add(generateBevelledCube(10, -20, 'silver'));
  piece.add(generateBevelledCube(10, 0, 'silver'));
  piece.add(generateBevelledCube(-30, 0, 'silver'));
  piece.add(generateBevelledCube(-10, 0, 'silver'));

  return piece;
}

function configureL() {
  let piece = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 40, 20),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  piece.add(generateBevelledCube(-30, -20, 'purple'));
  piece.add(generateBevelledCube(-30, 0, 'purple'));
  piece.add(generateBevelledCube(-10, 0, 'purple'));
  piece.add(generateBevelledCube(10, 0, 'purple'));

  return piece;
}

function configureO() {
  let piece = new THREE.Mesh(
    new THREE.BoxBufferGeometry(40, 40, 20),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  piece.add(generateBevelledCube(-20, -20, 'navy'));
  piece.add(generateBevelledCube(0, -20, 'navy'));
  piece.add(generateBevelledCube(-20, 0, 'navy'));
  piece.add(generateBevelledCube(0, 0, 'navy'));

  return piece;
}

function configureS() {
  let piece = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 40, 20),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  piece.add(generateBevelledCube(-30, -20, 'darkgreen'));
  piece.add(generateBevelledCube(-10, -20, 'darkgreen'));
  piece.add(generateBevelledCube(-10, 0, 'darkgreen'));
  piece.add(generateBevelledCube(10, 0, 'darkgreen'));

  return piece;
}

function configureT() {
  let piece = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 40, 20),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  piece.add(generateBevelledCube(-10, -20, 'brown'));
  piece.add(generateBevelledCube(-30, 0, 'brown'));
  piece.add(generateBevelledCube(-10, 0, 'brown'));
  piece.add(generateBevelledCube(10, 0, 'brown'));

  return piece;
}

function configureZ() {
  let piece = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 40, 20),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  piece.add(generateBevelledCube(-10, -20, 'teal'));
  piece.add(generateBevelledCube(10, -20, 'teal'));
  piece.add(generateBevelledCube(-30, 0, 'teal'));
  piece.add(generateBevelledCube(-10, 0, 'teal'));

  return piece;
}
