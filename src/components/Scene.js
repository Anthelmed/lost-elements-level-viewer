import THREE from 'three'

class Scene {

    /**
     * @constructor
     */
    constructor(width, height) {

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        this.renderer.setSize(width, height);

    }

    /**
     * @method
     * @name add
     * @description Add a child to the scene
     * @param {object} child - A THREE object
     */
    add(child) {

        this.scene.add(child);

    }

    /**
     * @method
     * @name remove
     * @description Remove a child from the scene
     * @param {object} child - A THREE object
     */
    remove(child) {

        this.scene.remove(child);

    }

    /**
     * @method
     * @name render
     * @description Renders/Draw the scene
     */
    render(camera) {

        this.renderer.autoClearColor = true;
        this.renderer.render(this.scene, camera);

    }

    /**
     * @method
     * @name resize
     * @description Resize the scene according to screen size
     * @param {number} newWidth
     * @param {number} newHeight
     */
    resize(newWidth, newHeight) {

        this.renderer.setSize(newWidth, newHeight);

    }

}

export default Scene
