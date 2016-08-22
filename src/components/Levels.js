import THREE from 'three';
import jsonTutorialWater from '../models/tutorial-water.json';
import jsonTutorialWind from '../models/tutorial-wind.json';

class Levels {

    /**
     * @constructor
     */
    constructor() {
        this.loader = new THREE.ObjectLoader();
        this.objects = [];
        this.activeLevel = 0;
    }

    /**
     * @method
     * @name init
     */
    init() {
        let tutorialWater = this.loader.parse(jsonTutorialWater);
        let tutorialWind = this.loader.parse(jsonTutorialWater);

        tutorialWater.rotation.y = 45;
        tutorialWater.position.y = -500;

        tutorialWind.position.y = -500;
        tutorialWind.position.x = -7500;
        tutorialWind.rotation.y = 45;

        this.objects.push(tutorialWater);
        this.objects.push(tutorialWind);

        return this.objects;
    }

    /**
     * @method
     * @name setActiveLevel
     */
     setActiveLevel(activeLevel) {
        this.activeLevel = activeLevel;
        document.querySelector('body').setAttribute("data-active-level", activeLevel);
     }
}

export default Levels;
