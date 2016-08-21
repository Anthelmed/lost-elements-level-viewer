import THREE from 'three';
import jsonTutorialWater from '../models/tutorial-water.json';

class Levels {

    /**
     * @constructor
     */
    constructor() {
        this.loader = new THREE.ObjectLoader();
        this.levels = [];
    }

    /**
     * @method
     * @name init
     */
    init() {
        let tutorialWater = this.loader.parse(jsonTutorialWater);
        let tutorialWind = this.loader.parse(jsonTutorialWater);

        tutorialWater.position.y = -1500;
        tutorialWater.rotation.y = 45;

        tutorialWind.position.y = -1500;
        tutorialWind.position.x = -7500;
        tutorialWind.rotation.y = 45;

        this.levels.push(tutorialWater);
        this.levels.push(tutorialWind);
        return this.levels;
    }
}

export default Levels;
