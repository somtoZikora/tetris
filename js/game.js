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

let field = configureField();
scene.add(field);

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

  let floor = configureSurface({ width: 50, height: 60, color: 'red' });
  floor.rotateX(-Math.PI / 2);
  floor.position.y = -60;

  let end = configureSurface({ width: 50, height: 120, color: 'green' });
  end.position.z = -30;

  let side = configureSurface({ width: 60, height: 120, color: 'blue' });
  side.rotateY(-Math.PI / 2);
  side.position.x = -25;

  let field = new THREE.Group();
  field.add(floor);
  field.add(end);
  field.add(side);

  return field;
}
