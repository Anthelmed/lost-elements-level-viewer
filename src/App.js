import 'TweenMax';
import Levels from './components/Levels';
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
        this.levels = new Levels();
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
        let levels = this.levels.init();
        let lights = this.lights.init();
        
        for (let level of levels) {
            this.scene.add(level);
        }

        for (let light of lights) {
           this.scene.add(light); 
        }

        document.querySelector('.button-next').click(() => {
            this.scene.next();
        });

        document.querySelector('.button-previous').click(() => {
            this.scene.previous();
        });
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
