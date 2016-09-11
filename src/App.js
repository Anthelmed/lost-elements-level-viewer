import 'TweenMax';
import Camera from './components/Camera';
import AdditionalCameraControls from './components/AdditionalCameraControls';
import Scene from './components/Scene';
import Levels from './components/Levels';
import Lights from './components/Lights';

const root = document.body.querySelector('.app');

class App {

    /**
     * @constructor
     */
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.camera = new Camera(this.width, this.height);
        this.controls = this.camera.getControls();
        this.scene = new Scene(this.width, this.height, this.camera);
        this.levels = new Levels();
        this.lights = new Lights();
        this.acc = new AdditionalCameraControls(this.camera, this.levels);

        root.appendChild(this.scene.renderer.domElement);

        this.addListeners();
        this.start();
    }

    /**
     * @method
     * @name start
     */
    start() {
        let levels = this.levels.init();
        let lights = this.lights.init();

        for (let level of levels) {
            this.scene.add(level);
        }

        for (let light of lights) {
           this.scene.add(light);
        }
    }

    /**
     * @method
     * @name onResize
     * @description Triggered when window is resized
     */
    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene.resize(this.width, this.height);
        this.camera.resize(this.width, this.height);
    }

    /**
     * @method
     * @name addListeners
     */
    addListeners() {
        window.addEventListener('resize', this.onResize.bind(this));
        TweenMax.ticker.addEventListener('tick', this.update.bind(this));
    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {
        this.scene.render(this.camera.getCamera());
        this.controls.update();
    }

}

export default App
