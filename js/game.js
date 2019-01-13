const scene = new THREE.Scene();
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 2000);
const ambientLight = new THREE.AmbientLight(0x404040);
const controls = new THREE.TrackballControls(camera, canvas);

camera.position.set(170, 60, 300);
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
const EDGE = 240;

let field = configureField();
scene.add(field);

let piece = null;
let pieceBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

window.addEventListener('resize', onWindowResize, false);

render();

function render() {
  onWindowResize();
  requestAnimationFrame(render);
  updateGame();
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

function updateGame() {
  let cubeCounter = 0;
  if (piece === null) {
    piece = getRandomPiece();
    cubeCounter += 4;

    piece.position.y = EDGE / 2 - 10;
    scene.add(piece);
  }
  if (gameMode === AUTO) {
    down();
    if (pieceBox.intersectsBox(bounds.floor)) dropFix();
  }
  addText(cubeCounter);
  pieceBox.setFromObject(piece);
}

function addText(counter) {
  let loader = new THREE.FontLoader();

  loader.load('fonts/helvetiker_regular.typeface.json', function(font) {
    let geometry = new THREE.TextGeometry(`Cubes in game: ${counter}\nCubes removed : -`, {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5,
    });
    scene.add(new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color })));
  });
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

  let floor = configureSurface({ width: EDGE, height: EDGE, color: 'red' });
  floor.rotateX(-Math.PI / 2);
  floor.position.y = -EDGE / 2;

  let ceiling = configureSurface({ width: EDGE, height: EDGE, color: 'red' });
  ceiling.rotateX(-Math.PI / 2);
  ceiling.position.y = EDGE / 2;
  ceiling.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

  let end = configureSurface({ width: EDGE, height: EDGE, color: 'green' });
  end.position.z = -EDGE / 2;

  let openEnd = configureSurface({ width: EDGE, height: EDGE, color: 'green' });
  openEnd.position.z = EDGE / 2;
  openEnd.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

  let side = configureSurface({ width: EDGE, height: EDGE, color: 'blue' });
  side.rotateY(-Math.PI / 2);
  side.position.x = -EDGE / 2;

  let openSide = configureSurface({ width: EDGE, height: EDGE, color: 'blue' });
  openSide.rotateY(-Math.PI / 2);
  openSide.position.x = EDGE / 2;
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
