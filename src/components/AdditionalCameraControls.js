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
            let nextLevel = this.levels.activeLevel + 1;
            let newCameraPositionX = -7500*nextLevel;

            this.levels.setActiveLevel(nextLevel);
            this.camera.moveTo(newCameraPositionX);

            this.checkButtonState();
        }
    }

    /**
     * @method
     * @name buttonPrevious
     */
    buttonPrevious() {
        if(this.levels.activeLevel > 0) {
            let previousLevel = this.levels.activeLevel - 1;
            let newCameraPositionX = 7500*previousLevel;

            this.levels.setActiveLevel(previousLevel);
            this.camera.moveTo(newCameraPositionX);

            this.checkButtonState();
        }
    }

    /**
     * @method
     * @name checkButtonState
     */
    checkButtonState() {
        if(this.levels.activeLevel == this.levels.objects.length - 1) {
            document.querySelector('.button-next').setAttribute('disabled', 'disabled');
        } else {
            document.querySelector('.button-next').removeAttribute('disabled');
        }
        if(this.levels.activeLevel == 0) {
            document.querySelector('.button-previous').setAttribute('disabled', 'disabled');
        } else {
            document.querySelector('.button-previous').removeAttribute('disabled');
        }
    }
}

export default AdditionalCameraControls;
