import React from 'react'
import ReactDOM from 'react-dom'

import FolderWindow from './FolderWindow'


export default class Folder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      state: "idle",
      selected: false,
      opened: false,
      wasClickedResently: false,
    }

    this.folderIconRef = React.createRef()
    this.folderNameRef = React.createRef()

    document.addEventListener('click', e => {
      if (this.state.selected &&
        (!this.folderIconRef.current || e.target !== this.folderIconRef.current) &&
        (!this.folderNameRef.current || e.target !== this.folderNameRef.current)
      )
        this.setState({selected: false})
    })
  }

  clickFolder = e => {
    this.setState({
      selected: true,
      opened: this.state.wasClickedResently,
      wasClickedResently: true,
    })

    if (this.clickedTimeout) {
      clearTimeout(this.clickedTimeout)
      this.clickedTimeout = undefined
    }

    this.clickedTimeout = setTimeout(() => this.setState({wasClickedResently: false}), 300)
  }

  render = () =>
    <>
      <div
        className={`folder-icon ${this.state.selected && "folder-icon--selected"}`}
      >
        <div
          ref={this.folderIconRef}
          className="folder-icon__icon"
          onClick={this.clickFolder}
        />
        <div
          ref={this.folderNameRef}
          className="folder-icon__name"
          onClick={this.clickFolder}
        >
          {this.props.name}
        </div>
      </div>
      {this.state.opened &&
        ReactDOM.createPortal(
          <FolderWindow
            name={this.props.name}
            close={() => this.setState({opened: false})}
          >
            {this.props.children}
          </FolderWindow>
          , document.getElementById("App"))}
    </>
}
