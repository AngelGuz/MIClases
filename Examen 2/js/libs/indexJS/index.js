// Variable para controlar la escena.
var scene;
// Variable para el control de camara
var camera;
// Variable que controla el render de la escena
var renderer;
// Variable que contiene los segundos que pasan por cada escena.
var deltaTime;
// Objeto que realiza el conteo de la escena
var clock;

$(document).ready(function(){
    // Inicializa el relog del THREE JS
    clock = new THREE.Clock();

    // Le indica el tamaño de la escena
    var visibleSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    // Inicializa la escena con el three js
    scene = new THREE.Scene();

    // Inicializa la camara y le agrega algunos parametros.
    camera = new THREE.PerspectiveCamera(
        75, // Angulo de vision de la camara
        visibleSize.width / visibleSize.height, // Tamaño de pantalla que ocupa la camara.
        0.1, // Distancia de donde comenzara a realizar el render
        100 // distancia de donde finalizara el render
    );

    // Posicion de la camara.
    // Transformacion de la camara
    camera.position.set(0,0,2);

    // Incializar el render de la escena.
    renderer = new THREE.WebGLRenderer({precision:"highp"});
    // Limpia la pantalla en color blanco
    renderer.setClearColor(new THREE.Color(0,0,0));
    // Le dice el ratio que tendra el pixel, se usa para evitar el bluring.
    renderer.setPixelRatio(visibleSize.width/visibleSize.height);
    // Le dice el tamaño que tendra el render en la pantalla.
    renderer.setSize(visibleSize.width, visibleSize.height);

    //            por default es 0xffffff, por default es 1
    // Luz Ambiental  (color: Integer(RGB), Intensity: float)
    var ambientLight = new THREE.AmbientLight(new THREE.Color(1,1,1), 0.8);
    // Se agrega la luz ambiental a la escena.
    scene.add(ambientLight);

    //            por default es 0xffffff, por default es 1
    // Luz Direccional  (color: Integer(RGB), Intensity: float)
    var directionalLight = new THREE.DirectionalLight(new THREE.Color(.3,.1,.3), 0.4);
    // Se coloca la luz direccional en una posicion (x,y,z).
    directionalLight.position.set(0.4,0.0,1.0);
    // Se agrega la luz direccional a la escena.
    scene.add(directionalLight);

    // Le agregar el renderer a la escena.
    $('#scene').append(renderer.domElement);
    
    // Material para superficies brillasas con luz especular.
    var material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0.6,0.2,0.2), // 
        specular: new THREE.Color(1.0,1.0,1.0), // Luz blanca
        shininess: 500 // Brillo
    });
    // Variable para la geometria en este caso una caja.
    var geometry = new THREE.BoxGeometry(1,1,1);
    // Inicializa el cubo con la geometria y el material
    var cube = new THREE.Mesh(geometry, material);
    // Colocamos el cubo en la escena.
    cube.position.set(-1.0, 0.0,-2.0);
    //
    cube.name = 'Cube';
    // Se agrega el cubo a la escena
    scene.add(cube);

    // Se agrega el render
    render();

});

function render(){
    //variable que informa al navegador que quieres realizar una animacion.
    
    setTimeout(function(){
        requestAnimationFrame(render);
    }, 1000/144);


    deltaTime = clock.getDelta();

    // Objetenemos el nombre del objeto
    var cube = scene.getObjectByName('Cube');


    // Se rota rota el cubo en eje Y
    cube.rotation.y += THREE.Math.degToRad(60*deltaTime);


    // La variable renderer manda a llamar la funcion render
    // que necesita de parametros la "scene" y "camera".
    renderer.render(scene, camera);
}