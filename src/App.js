import React from 'react'

import Div100vh from 'react-div-100vh'
import { FullScreen, useFullScreenHandle } from "react-full-screen"

import Header from 'components/Header'
import Desktop from 'components/Desktop'

import 'styles/index.sass'


function App() {
  const fullScreenHandle = useFullScreenHandle()

  return (
    <FullScreen handle={fullScreenHandle}>
      <Div100vh>
        <div className="App" id="App">
          <Header
            fullScreenToggler={fullScreenHandle.enter}
          />
          <Desktop />
        </div>
      </Div100vh>
    </FullScreen>
  )
}

export default App
