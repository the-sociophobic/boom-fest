import React from 'react'

import Folder from 'components/Folder'
import Player from 'components/Player'


const names = [
  {
    ru: "Илья",
    en: "Ilya",
  },
  {
    ru: "Федя",
    en: "Fedya",
  },
  {
    ru: "Марта",
    en: "Martha",
  },
  {
    ru: "Кира",
    en: "Kira",
  },
  {
    ru: "Марк",
    en: "Mark",
  },
]

export default class Desktop extends React.Component {
  state = {}

  render = () =>
    <div className="desktop">
      {names.map(name =>
        <Folder
          name={name.ru}
        >
          <Player name={name.en} />
        </Folder>
      )}
    </div>
}
