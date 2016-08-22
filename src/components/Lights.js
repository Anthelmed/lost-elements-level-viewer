import THREE from 'three';
import tutorialWater from '../models/tutorial-water.json';

class Lights {

    /**
     * @constructor
     */
    constructor() {
        this.objects = [];
    }

    /**
     * @method
     * @name init
     */
    init() {
        let globalSpotLight = new THREE.DirectionalLight( 0xffffff );
        let bottomLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        let ambiantLight = new THREE.AmbientLight( 0x404040, 0.3 );

        globalSpotLight.position.set(1360.45, 3858.96, -2518.93);
        globalSpotLight.rotation.set(-52.42, -15.57, -28.47);

        bottomLight.position.set(-509.58, -1095.02, -302.88);
        bottomLight.rotation.set(0, -62.00, 180.00);

        this.objects.push(globalSpotLight);
        this.objects.push(bottomLight);
        this.objects.push(ambiantLight);

        return this.objects;
    }
}

export default Lights;