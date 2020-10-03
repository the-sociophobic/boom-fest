import React from 'react'


export default class Folder extends React.Component {
  state = {}

  render = () =>
    <div className="folder-window">
      <div className="folder-window__header">
        <div className="folder-window__header__name">
          {this.props.name}
        </div>
        <div className="folder-window__header__buttons">
          <div
            className="folder-window__header__buttons__item folder-window__header__buttons__item--close"
            onClick={() => this.props.close()}
          />
          <div
            className="folder-window__header__buttons__item"
          />
          <div
            className="folder-window__header__buttons__item"
          />
        </div>
      </div>
      <div className="folder-window__content">
        {this.props.children}
      </div>
    </div>
}
