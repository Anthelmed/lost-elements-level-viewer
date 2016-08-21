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

        this.levels.push(tutorialWater);
        return this.levels;
    }
}

export default Levels;
