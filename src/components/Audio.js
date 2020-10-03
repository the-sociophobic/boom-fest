import React from 'react'

import secondsParse from 'libs/utils/secondsParse'


export default class extends React.Component {
  state = {
    status: "loading...",
    playing: false,
  }

  componentDidMount = () => {
    this.audioFile = new Audio()
    this.audioFile.addEventListener('canplay', () => {
      this.updateStatus()
      this.audioFile.play()
    })

    this.audioFile.addEventListener('timeupdate', () => this.updateStatus())

    this.audioFile.addEventListener('ended', () => {})

    this.audioFile.preload = 'auto'
    this.audioFile.src = this.props.file
    this.audioFile.load()
  }

  componentWillUnmount = () =>
    this.audioFile.pause()

  updateStatus = () =>
    this.setState({
      status: `${secondsParse(this.audioFile.currentTime)}/${secondsParse(this.audioFile.duration)}`
    })

  render = () =>
    <div className="audio">
      <div
        className="audio__button"
        onClick={() => this.setState({playing: !this.state.playing})}
      />
      <div className="audio__status">
        {this.state.status}
      </div>
    </div>
}