const scene = new THREE.Scene();
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 2000);
const ambientLight = new THREE.AmbientLight(0x404040);
const controls = new THREE.TrackballControls(camera, canvas);

camera.position.set(17, 6, 30);
camera.lookAt(scene.position);

scene.add(ambientLight);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

scene.add(new THREE.AxisHelper(50));

let bounds = {
  ceiling: new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
  floor: new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
  side: new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
  openSide: new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
  end: new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
  openEnd: new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
};

let field = configureField();
scene.add(field);

let piece = getRandomPiece();
let pieceBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

scene.add(piece);

window.addEventListener('resize', onWindowResize, false);

render();

function render() {
  onWindowResize();
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function configureField() {
  function configureSurface({ width = 1, height = 1, color = 'white' } = {}) {
    return new THREE.LineSegments(
      new THREE.WireframeGeometry(
        new THREE.PlaneBufferGeometry(width, height, width / 10, height / 10)
      ),
      new THREE.MeshBasicMaterial({ color })
    );
  }

  let floor = configureSurface({ width: 120, height: 120, color: 'red' });
  floor.rotateX(-Math.PI / 2);
  floor.position.y = -120;

  let ceiling = configureSurface({ width: 120, height: 120, color: 'red' });
  ceiling.rotateX(-Math.PI / 2);
  ceiling.position.y = 120;
  ceiling.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

  let end = configureSurface({ width: 120, height: 240, color: 'green' });
  end.position.z = -60;

  let openEnd = configureSurface({ width: 120, height: 240, color: 'green' });
  openEnd.position.z = 60;
  openEnd.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

  let side = configureSurface({ width: 120, height: 240, color: 'blue' });
  side.rotateY(-Math.PI / 2);
  side.position.x = -60;

  let openSide = configureSurface({ width: 120, height: 240, color: 'blue' });
  openSide.rotateY(-Math.PI / 2);
  openSide.position.x = 60;
  openSide.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

  let field = new THREE.Group();

  bounds.ceiling.setFromObject(ceiling);
  bounds.floor.setFromObject(floor);
  bounds.end.setFromObject(end);
  bounds.openEnd.setFromObject(openEnd);
  bounds.side.setFromObject(side);
  bounds.openSide.setFromObject(openSide);

  field.add(floor);
  field.add(ceiling);
  field.add(openEnd);
  field.add(openSide);
  field.add(end);
  field.add(side);

  return field;
}
