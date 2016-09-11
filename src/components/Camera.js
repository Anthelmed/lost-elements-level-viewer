import 'TweenMax'
import THREE from 'three'
import OrbitControls from './OrbitControls'

const delay = 1;

class Camera {
    constructor(width, height) {

        this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 13000);
        this.camera.position.z = -3000;

        this.controls = new OrbitControls(this.camera);
        this.controls.enablePan = false;
    }

    /**
     * @method
     * @name getCamera
     */
    getCamera() {
        return this.camera;
    }

    /**
     * @method
     * @name getControls
     */
    getControls() {
        return this.controls;
    }

    /**
     * @method
     * @name moveTo
     */
    moveTo(newCameraPositionX) {

        TweenMax.to(this.controls.center, delay, {x: newCameraPositionX, y: 0, z: 0});
        TweenMax.to(this.camera.position, delay, {x: newCameraPositionX, y: 0, z: -3000});

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
