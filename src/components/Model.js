import React from 'react'

import ThreeScene from 'components/ThreeScene'

import Model from 'libs/three/units/Model'
import Lights from 'libs/three/units/Lights'


export default class extends React.Component {
  state = {}

  render = () =>
    <ThreeScene
      id="sceneClosed"
      units={{
        head: {
          unit: Model,
          args: {file: this.props.file},
          disabled: false,
        },
        lights: {
          unit: Lights,
          disabled: false,
        }
      }}
    />
}
