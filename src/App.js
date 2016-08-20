import 'TweenMax';
import Loader from './components/Loader';
import Scene from './components/Scene';
import Lights from './components/Lights';

const root = document.body.querySelector('.app');

class App {

    /**
     * @constructor
     */
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new Scene(this.width, this.height);
        this.loader = new Loader();
        this.lights = new Lights();

        root.appendChild(this.scene.renderer.domElement);

        this.addListeners();
        this.start();
    }

    /**
     * @method
     * @name start
     */
    start() {
        let level = this.loader.init();
        let lights = this.lights.init();

        console.log(lights);

        this.scene.add(level);

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
        this.scene.render();
    }

}

export default App
