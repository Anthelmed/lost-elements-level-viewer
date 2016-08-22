import 'TweenMax'
import THREE from 'three'

class AdditionalCameraControls {
	constructor(camera, levels) {

		this.camera = camera;
        this.levels = levels;

        document.querySelector('.button-next').onclick = () => {
            this.buttonNext();
        };

        document.querySelector('.button-previous').onclick = () => {
            this.buttonPrevious();
        };

	}

    /**
     * @method
     * @name buttonNext
     */
    buttonNext() {
        if(this.levels.activeLevel < this.levels.objects.length - 1) {
            let camera = this.camera.get();
            let cameraPosition = camera.position;
            let newCameraPosition = {x: cameraPosition.x - 7500, y: 0, z: cameraPosition.z};

            this.levels.setActiveLevel(this.levels.activeLevel + 1);
            this.camera.moveTo(newCameraPosition);

            if(this.levels.activeLevel == this.levels.objects.length - 1) {
                document.querySelector('.button-next').setAttribute('disabled', 'disabled');
                document.querySelector('.button-previous').removeAttribute('disabled');
            }
        }
    }

    /**
     * @method
     * @name buttonPrevious
     */
    buttonPrevious() {
        if(this.levels.activeLevel > 0) {
            let camera = this.camera.get();
            let cameraPosition = camera.position;
            let newCameraPosition = {x: cameraPosition.x + 7500, y: 0, z: cameraPosition.z};

            this.levels.setActiveLevel(this.levels.activeLevel - 1)
            this.camera.moveTo(newCameraPosition);

            if(this.levels.activeLevel == 0) {
                document.querySelector('.button-previous').setAttribute('disabled', 'disabled');
                document.querySelector('.button-next').removeAttribute('disabled');
            }
        }
    }
}

export default AdditionalCameraControls;