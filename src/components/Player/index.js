import React from 'react'

import Model from 'components/Model'
import Audio from 'components/Audio'

import ilyaModel from './model/Ilya.glb'
import ilyaAudio from './audio/Ilya.mp3'
import ilyaQR from './QR/Ilya.png'

import fedyaModel from './model/Fedya.glb'
import fedyaAudio from './audio/Fedya.mp3'
import fedyaQR from './QR/Fedya.png'

import marthaModel from './model/Martha.glb'
import marthaAudio from './audio/Martha.mp3'
import marthaQR from './QR/Martha.png'

import kiraModel from './model/Kira.glb'
import kiraAudio from './audio/Kira.mp3'
import kiraQR from './QR/Kira.png'

import markModel from './model/Mark.glb'
import markAudio from './audio/Mark.mp3'
import markQR from './QR/Mark.png'


const data = {
  Ilya: {
    model: ilyaModel,
    audio: ilyaAudio,
    QR: ilyaQR,
  },
  Fedya: {
    model: fedyaModel,
    audio: fedyaAudio,
    QR: fedyaQR,
  },
  Martha: {
    model: marthaModel,
    audio: marthaAudio,
    QR: marthaQR,
  },
  Kira: {
    model: kiraModel,
    audio: kiraAudio,
    QR: kiraQR,
  },
  Mark: {
    model: markModel,
    audio: markAudio,
    QR: markQR,
  },
}


export default props => {
  // const path = `https://kiss-graph.com/boom-fest/${props.name}/`

  return (
    <div className="player">
      <div className="player__model">
        {/* <Model file={`${path}model.glb`} /> */}
        <Model file={data[props.name].model} />
      </div>
      <div className="player__qr">
        <img src={data[props.name].QR} />
        <div className="player__qr__text">
          Отсканируйте код, чтобы посмотреть рассказ в AR
        </div>
      </div>
      <div className="player__audio">
        {/* <Audio file={`${path}audio.mp3`} /> */}
        <Audio file={data[props.name].audio} />
      </div>
    </div>
  )
}