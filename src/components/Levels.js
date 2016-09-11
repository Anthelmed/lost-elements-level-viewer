import THREE from 'three';
import jsonTutorialWater from '../models/tutorial-water.json';
import jsonLevel1Platform1 from '../models/level-1-platform-1.json';
import jsonLevel1Platform2 from '../models/level-1-platform-2.json';
import jsonLevel1Platform3 from '../models/level-1-platform-3.json';

class Level1 {

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
        let Level1Platform1 = this.loader.parse(jsonLevel1Platform1);
        let Level1Platform2 = this.loader.parse(jsonLevel1Platform2);
        let Level1Platform3 = this.loader.parse(jsonLevel1Platform3);

        tutorialWater.position.y = -500;
        tutorialWater.rotation.y = 45;

        Level1Platform1.position.y = -500;
        Level1Platform1.position.x = -7500;
        Level1Platform1.rotation.y = 45;

        Level1Platform2.position.y = -500;
        Level1Platform2.position.x = -7500*2;
        Level1Platform2.rotation.y = 45;

        Level1Platform3.position.y = -500;
        Level1Platform3.position.x = -7500*3;
        Level1Platform3.rotation.y = 45;

        this.objects.push(tutorialWater);
        this.objects.push(Level1Platform1);
        this.objects.push(Level1Platform2);
        this.objects.push(Level1Platform3);

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

export default Level1;
