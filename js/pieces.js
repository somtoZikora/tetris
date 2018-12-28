let pieces;
const extrudeSettings = { depth: 10, bevelThickness: 3 };

let I = configureI();
let J = configureJ();
let L = configureL();
let O = configureO();
let S = configureS();
let T = configureT();
let Z = configureZ();

pieces = { I, J, L, O, S, T, Z };

function configureI() {
  const shape = new THREE.Shape();

  shape.moveTo(0, 0);
  shape.lineTo(40, 0);
  shape.lineTo(40, 10);
  shape.lineTo(0, 10);
  shape.lineTo(0, 0);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(shape, extrudeSettings),
    new THREE.MeshBasicMaterial({ color: 'maroon' })
  );
}

function configureJ() {
  const shape = new THREE.Shape();

  shape.moveTo(20, 0);
  shape.lineTo(30, 0);
  shape.lineTo(30, 20);
  shape.lineTo(0, 20);
  shape.lineTo(0, 10);
  shape.lineTo(20, 10);
  shape.lineTo(20, 0);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(shape, extrudeSettings),
    new THREE.MeshBasicMaterial({ color: 'silver' })
  );
}

function configureL() {
  const shape = new THREE.Shape();

  shape.moveTo(0, 0);
  shape.lineTo(10, 0);
  shape.lineTo(10, 10);
  shape.lineTo(30, 10);
  shape.lineTo(30, 20);
  shape.lineTo(0, 20);
  shape.lineTo(0, 0);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(shape, extrudeSettings),
    new THREE.MeshBasicMaterial({ color: 'purple' })
  );
}

function configureO() {
  const shape = new THREE.Shape();

  shape.moveTo(0, 0);
  shape.lineTo(20, 0);
  shape.lineTo(20, 20);
  shape.lineTo(0, 20);
  shape.lineTo(0, 0);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(shape, extrudeSettings),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
  );
}

function configureS() {
  const shape = new THREE.Shape();

  shape.moveTo(0, 0);
  shape.lineTo(20, 0);
  shape.lineTo(20, 10);
  shape.lineTo(30, 10);
  shape.lineTo(30, 20);
  shape.lineTo(10, 20);
  shape.lineTo(10, 10);
  shape.lineTo(0, 10);
  shape.lineTo(0, 0);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(shape, extrudeSettings),
    new THREE.MeshBasicMaterial({ color: 'dark green' })
  );
}

function configureT() {
  const shape = new THREE.Shape();

  shape.moveTo(10, 0);
  shape.lineTo(20, 0);
  shape.lineTo(20, 10);
  shape.lineTo(30, 10);
  shape.lineTo(30, 20);
  shape.lineTo(0, 20);
  shape.lineTo(0, 10);
  shape.lineTo(10, 10);
  shape.lineTo(10, 0);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(shape, extrudeSettings),
    new THREE.MeshBasicMaterial({ color: 'brown' })
  );
}

function configureZ() {
  const shape = new THREE.Shape();

  shape.moveTo(10, 0);
  shape.lineTo(30, 0);
  shape.lineTo(30, 10);
  shape.lineTo(20, 10);
  shape.lineTo(20, 20);
  shape.lineTo(0, 20);
  shape.lineTo(0, 10);
  shape.lineTo(10, 10);
  shape.lineTo(10, 0);

  return new THREE.Mesh(
    new THREE.ExtrudeBufferGeometry(shape, extrudeSettings),
    new THREE.MeshBasicMaterial({ color: 'teal' })
  );
}
