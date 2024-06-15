import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(5 ,5, 20 );
const material = new THREE.MeshBasicMaterial( { color: "blue" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 20;


function animate() {

	cube.rotation.x += 0.1;
	cube.rotation.y += 0.02;
	renderer.render( scene, camera );

}
