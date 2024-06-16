import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );


const geometry = new THREE.BoxGeometry(5 ,5, 20 );
const material = new THREE.MeshBasicMaterial( { color: "blue" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const sphereGeo = new THREE.SphereGeometry(5, 22, 20);
const sphereMaterial = new THREE.MeshBasicMaterial({color: "red"});
const sphere = new THREE.Mesh(sphereGeo, sphereMaterial);
const sphere2 = new THREE.Mesh(sphereGeo, sphereMaterial);

const spaceTexture = new THREE.TextureLoader().load('./space.jpeg');
scene.background = spaceTexture;
scene.add(sphere);
scene.add(sphere2);
sphere.position.z = 70;
sphere.position.x = 10;
sphere2.position.z = 210;
sphere2.position.x = 10;
camera.position.z = 20;

document.body.onscroll = moveCamera;

function moveCamera(){
	let t = document.body.getBoundingClientRect().top;
	console.log(t * -0.5);
	camera.position.z = t  * -0.2;
	cube.position.x = t * -0.04;
}

function animate() {
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.02;
	renderer.render( scene, camera );
}

