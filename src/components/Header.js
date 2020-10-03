import React from 'react'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import capitalize from 'libs/utils/capitalize'


export default class Header extends React.Component {
  state = {}

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
      <div className="header">
        <div className="header__left-icons">
          {icons[0]}
          <div className="header__right-icons__item header__right-icons__item--text">
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
            <div className="header__right-icons__item header__right-icons__item--text">
              {button}
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
            className="header__right-icons__item header__right-icons__item--text"
          >
            Фулскрин
          </div>
        </div>
      </div>
    )
  }
}
