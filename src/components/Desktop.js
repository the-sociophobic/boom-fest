import React from 'react'

import transliterate from 'libs/utils/transliterate'

import Folder from 'components/Folder'
import Player from 'components/Player'


const names = [
  "Илья",
]

export default class Desktop extends React.Component {
  state = {}

  render = () =>
    <div className="desktop">
      {names.map(name =>
        <Folder
          name={name}
        >
          <Player name={transliterate(name)} />
        </Folder>
      )}
    </div>
}
