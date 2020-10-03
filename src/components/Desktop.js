import React from 'react'

import Folder from 'components/Folder'


export default class Desktop extends React.Component {
  state = {}

  render = () =>
    <div className="desktop">
      <Folder
        name="Илья"
      />
    </div>
}
