import React from 'react'

import Model from 'components/Model'
import Audio from 'components/Audio'

import ilyaModel from './model.glb'
import ilyaAudio from './audio.mp3'


export default props => {
  const path = `https://kiss-graph.com/boom-fest/${props.name}/`

  return (
    <div className="player">
      <div className="player__model">
        {/* <Model file={`${path}model.glb`} /> */}
        <Model file={ilyaModel} />
      </div>
      <div className="player__audio">
        {/* <Audio file={`${path}audio.mp3`} /> */}
        <Audio file={ilyaAudio} />
      </div>
    </div>
  )
}