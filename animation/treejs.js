import * as THREE from 'three'
import { GLTFLoader } from 'https://unpkg.com/three@0.145.0/examples/jsm/loaders/GLTFLoader.js'

const $modelo = document.getElementById('modelo')
const $buttoncolor = document.getElementById('button-mode')
let color = localStorage.getItem('theme') === 'dark'

console.log(color)
const scene = new THREE.Scene()
scene.background = new THREE.Color(color ? 0x000000 : 0xffffff)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
$modelo.appendChild(renderer.domElement)

/* const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light ); */
const light = new THREE.PointLight(0xffffff, 6, 85)
light.position.set(0, 50, 50)
light.castShadow = true
scene.add(light)

const loader = new GLTFLoader()
let obj
loader.load(
  'animation/latte.glb',
  function (gltf) {
    obj = gltf.scene
    obj.castShadow = true //default is false
    obj.receiveShadow = true
    console.log(gltf.scene)
    scene.add(gltf.scene)

    animate()
  },
  undefined,
  function (error) {
    console.error(error)
  }
)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  if (window.innerWidth < 640) {
    obj.scale.x = 0.8
    obj.scale.y = 0.8
    obj.scale.z = 0.8
  } else {
    obj.scale.x = 1
    obj.scale.y = 1
    obj.scale.z = 1
  }

  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize)

camera.position.z = 20
camera.position.y = 10

function animate() {
  requestAnimationFrame(animate)
  obj.rotation.y += 0.02
  renderer.render(scene, camera)
}

$buttoncolor.addEventListener('click', () => {
  color = localStorage.getItem('theme') === 'dark'
  scene.background = new THREE.Color(color ? 0x000000 : 0xffffff)
  renderer.render(scene, camera)
})
