import THREE from 'three';
import tutorialWater from '../models/tutorial-water.json';

class Loader {

    /**
     * @constructor
     */
    constructor() {
        this.loader = new THREE.ObjectLoader();
    }

    /**
     * @method
     * @name init
     */
    init() {
        return this.loader.parse(tutorialWater);
    }
}

export default Loader;
