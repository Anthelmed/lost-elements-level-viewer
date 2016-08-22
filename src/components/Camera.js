import 'TweenMax'
import THREE from 'three'
import OrbitControls from './OrbitControls'

let defaultCameraPosition = null;
let defaultCameraQuaternion = null;

class Camera {
	constructor(width, height) {

		this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 30000);
        this.camera.position.z = -3000;

        this.controls = new OrbitControls(this.camera);
        this.controls.enablePan = false;

        defaultCameraPosition = this.camera.position;
        defaultCameraQuaternion = this.camera.quaternion;

        console.log(this.camera, this.controls);

	}

	/**
     * @method
     * @name get
     */
    get() {
        return this.camera;
    }

	 /**
     * @method
     * @name moveTo
     */
    moveTo(newCameraPosition) {

        TweenMax.to(this.camera.position, 1, newCameraPosition);
        // TweenMax.to(this.camera.quaternion, 1, defaultCameraQuaternion);
        TweenMax.to(this.controls.center, 1, {x: 0, y: 0, z: 0});
        TweenMax.to(this.controls.position0, 1, newCameraPosition);

    }

    /**
     * @method
     * @name resize
     * @description Resize the scene according to screen size
     * @param {number} newWidth
     * @param {number} newHeight
     */
    resize(newWidth, newHeight) {

        this.camera.aspect = newWidth / newHeight;
        this.camera.updateProjectionMatrix();

    }
}

export default Camera;