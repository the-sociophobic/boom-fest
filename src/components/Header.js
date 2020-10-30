import React from 'react'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import capitalize from 'libs/utils/capitalize'
import VideoModal from 'components/VideoModal'


export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headerActive: false,
      showVideo: false,
    }

    this.headerRef = React.createRef()

    document.addEventListener('click', e => {
      if (this.state.headerActive &&
        (!this.headerRef.current || e.target !== this.headerRef.current)
      )
        this.setState({headerActive: false})
    })
  }

  render = () => {
    const icons = [
      "greenfrog",
      "wifi",
      "battery-25",
      "magnifyingglass",
    ].map(icon =>
      <div
        className={`header__right-icons__item header__right-icons__item--${icon}`}
      />)

    return (
      <div
        className="header"
        ref={this.headerRef}
      >
        <div className="header__left-icons">
          {icons[0]}
          <div className="header__left-icons__item header__left-icons__item--text">
            <b>Файндер</b>
          </div>
          {[
            "Фаел",
            "Эдит",
            "Виу",
            "Го",
            "Виндоу",
            "Халп",
          ].map(button =>
            <div
              className={`header__left-icons__item header__left-icons__item--text ${this.state.headerActive === button && "header__left-icons__item--active"}`}
              onClick={() => this.setState({ headerActive: !this.state.headerActive ? button : false})}
              onMouseOver={() => this.state.headerActive && this.setState({ headerActive: button })}
            >
              {button}

              <div className="header__left-icons__item__menu">
                {button === "Фаел" ?
                  <div
                    className="header__left-icons__item__menu__item"
                    onClick={() => this.setState({
                      showVideo: true,
                      headerActive: false
                    })}
                  >
                    Сохранить как...
                  </div>
                  :
                  <div className="header__left-icons__item__menu__item header__left-icons__item__menu__item--disabled">
                    Ничего нет
                  </div>
                }
              </div>
            </div>
          )}
        </div>
        <div className="header__right-icons">
          {icons[1]}
          <div className="header__right-icons__item header__right-icons__item--text header__right-icons__item--battery-percentage">
            25%
          </div>
          {icons[2]}
          <div className="header__right-icons__item header__right-icons__item--text">
            {capitalize(format(new Date(), `iii HH:mm`, { locale: ru }))}
          </div>
          {icons[3]}
          <div
            onClick={this.props.fullScreenToggler}
            className="header__right-icons__item header__right-icons__item--text header__right-icons__item header__right-icons__item--fullscreen"
          >
            Фулскрин
          </div>
        </div>

        <VideoModal
          show={this.state.showVideo}
          hide={() => this.setState({showVideo: false})}
        />
      </div>
    )
  }
}
