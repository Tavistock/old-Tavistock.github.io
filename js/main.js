var camera, scene, renderer;
var mesh, geometry, material;

var mouseX, mouseY;
var halfWidth = window.innerWidth/2, halfHeight = window.innerHeight/2;

init();

function init() {

    var container = document.getElementById('geo');
    var containerWidth = 200;
    var containerHeight = 140;

    camera = new THREE.PerspectiveCamera( 70, containerWidth/containerHeight, 1, 1000 );
    camera.position.y = 150;
    camera.position.z = 500;

    scene = new THREE.Scene();

    geometry = new THREE.TorusKnotGeometry( 200, 100, 100, 16 );
    material = new THREE.MeshBasicMaterial( { color: 0xeeeeee, wireframe: true } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.y = 100;

    scene.add( mesh );

    try {
        renderer = new THREE.WebGLRenderer();
    }
    catch (e) {
        renderer = new THREE.CanvasRenderer();
    }
    renderer.setClearColor( 0xffffff, 1);
    renderer.setSize( containerWidth, containerHeight );

    container.appendChild( renderer.domElement );
    renderer.render( scene, camera );

    document.addEventListener( 'mousemove', onMouseMove, false);

    // at requestAnimationFrame) 
    setInterval(update); 
}

function update(){

    mouseX = (typeof mouseX == 'undefined' ? 0 : mouseX);

    mesh.rotation.y += (0.005+0.00015*(mouseX - camera.position.x));

    renderer.render( scene, camera );
}

function onMouseMove( event ) {
    mouseX = event.clientX - halfWidth;
};