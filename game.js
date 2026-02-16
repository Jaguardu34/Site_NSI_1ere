const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

var area = 500;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const drone = new THREE.Object3D();
drone.position.set(0, -5, 20);
scene.add(drone);

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 1000);
camera.position.set(0, 2, 0);
drone.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const boxMaterial = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(cube);
cube.rotation.y = Math.PI / 4;

const planeGeometry = new THREE.PlaneGeometry(area, area);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff50, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -5;
scene.add(plane);

const keys = {};
window.addEventListener("keydown", (e) => keys[e.code] = true);
window.addEventListener("keyup", (e) => keys[e.code] = false);

const droneState = {
    velocity: new THREE.Vector3(0, 0, 0),
    acceleration: new THREE.Vector3(0, 0, 0),
    maxSpeed: 1
};
const rotationSpeed = new THREE.Vector2(0, 0);
const rotationAccel = 0.02;

function render() {
    requestAnimationFrame(render);

    if (drone.position.y < -5) {
        drone.position.y = -5;
        droneState.velocity.y = 0;
        droneState.velocity.z = 0;
        droneState.velocity.x = 0; 
    };

    if (drone.position.x > area/2 || drone.position.x < -area/2 || drone.position.z > area/2 || drone.position.z < -area/2) {
        drone.position.set(0, -5, 20);
        droneState.velocity.set(0, 0, 0);
    }

    const thrust = 0.02;
    const gravity = new THREE.Vector3(0, -0.01, 0);

    if (keys["ArrowUp"]) droneState.acceleration.add(new THREE.Vector3(0, 0, -1).applyQuaternion(drone.quaternion).multiplyScalar(thrust));
    if (keys["ArrowDown"]) droneState.acceleration.add(new THREE.Vector3(0, 0, 1).applyQuaternion(drone.quaternion).multiplyScalar(thrust));
    if (keys["ArrowLeft"]) droneState.acceleration.add(new THREE.Vector3(-1, 0, 0).applyQuaternion(drone.quaternion).multiplyScalar(thrust));
    if (keys["ArrowRight"]) droneState.acceleration.add(new THREE.Vector3(1, 0, 0).applyQuaternion(drone.quaternion).multiplyScalar(thrust));
    if (keys["Space"]) droneState.acceleration.y += thrust;
    if (keys["KeyB"]) droneState.acceleration.y -= thrust;

    droneState.acceleration.add(gravity);
    droneState.velocity.add(droneState.acceleration);
    droneState.velocity.clampLength(0, droneState.maxSpeed);
    drone.position.add(droneState.velocity);
    droneState.acceleration.set(0, 0, 0);

    if (keys["KeyA"]) rotationSpeed.y += rotationAccel;
    if (keys["KeyD"]) rotationSpeed.y -= rotationAccel;
    if (keys["KeyW"]) rotationSpeed.x += rotationAccel;
    if (keys["KeyS"]) rotationSpeed.x -= rotationAccel;

    drone.rotation.y += rotationSpeed.y;
    camera.rotation.x += rotationSpeed.x;

    rotationSpeed.multiplyScalar(0);

    renderer.render(scene, camera);
}

render();
