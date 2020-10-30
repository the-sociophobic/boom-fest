import * as THREE from 'three'
import Unit from 'libs/three/Unit'

import modelLoader from 'libs/three/modelLoader'


export default class Model extends Unit {
  constructor(props) {
    super(props)

    this.loadModel()
  }

  loadModel = async () => {
    // const loader = new THREE.FileLoader()

    // loader.load(
    //   this.props.file,
    
    //   async data => {
    //     this.gtlf = await modelLoader(this.props.file)
    //     this.model = this.gtlf.scene
    
    //     // this.model.castShadow = true
    //     // this.model.receiveShadow = true
    
    //     this.props.scene.add(this.model)    
    //   },
    //   xhr => console.log( (xhr.loaded / xhr.total * 100) + '% loaded' ),
    //   err => console.error( 'An error happened' )
    // )

    this.gtlf = await modelLoader(this.props.file)
    this.model = this.gtlf.scene

    this.mixer = new THREE.AnimationMixer( this.gtlf.scene )
    this.actions = []
    this.gtlf.animations.forEach((animation, index) => {
      this.actions.push( this.mixer.clipAction( animation ) )
      this.actions[index].play()
    })


    this.model.scale.set(7.5, 7.5, 7.5)
    this.model.position.set(0, -7.5, 0)

    // this.model.castShadow = true
    // this.model.receiveShadow = true

    this.props.scene.add(this.model)
  }

  animate = props => {
    let alpha = props.frameNumber / props.maxFrameNumber * 7

    this.model && (this.model.rotation.y = alpha * 2 * Math.PI)

    this.mixer && this.mixer.update(props.clock.getDelta())
  }
  dispose = props => {}
}