var camera, scene, renderer;
var sphere, geometry, material;

var mouseX, mouseY;
var halfWidth = window.innerWidth/2, halfHeight = window.innerHeight/2;

init();

function init() {

    var container = document.getElementById('geo');
    var containerWidth = 200;
    var containerHeight = 100;

    camera = new THREE.PerspectiveCamera( 70, containerWidth/containerHeight, 1, 1000 );
    camera.position.y = 150;
    camera.position.z = 500;

    scene = new THREE.Scene();

    geometry = new THREE.SphereGeometry( 400,32,32 );
    material = new THREE.MeshBasicMaterial( { color: 0xaaaabb, wireframe: true } );
    sphere = new THREE.Mesh( geometry, material );
    sphere.position.y = 300;

    scene.add( sphere );

    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor( 0xffffff, 1);
    renderer.setSize( containerWidth, containerHeight );

    container.appendChild( renderer.domElement );
    renderer.render( scene, camera );

    document.addEventListener( 'mousemove', onMouseMove, false);

    // at requestAnimationFrame) 
    setInterval(update,1000/30); 
}

function update(){

    // mouseY = (typeof mouseY == 'undefined' ? 0 : mouseY);
    mouseX = (typeof mouseX == 'undefined' ? 0 : mouseX);

    sphere.rotation.y += (0.005+0.00015*(mouseX - camera.position.x));
    // sphere.rotation.x += (0.005+0.00015*( - mouseY - camera.position.y ));

    renderer.render( scene, camera );
}

function onMouseMove( event ) {
    // mouseY = event.clientY - halfHeight;
    mouseX = event.clientX - halfWidth;
};