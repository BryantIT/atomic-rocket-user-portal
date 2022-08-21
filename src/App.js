import React, { Fragment } from 'react'
// Components
import Header from './components/header/Header'
import MusicPlayer from './components/musicplayer/MusicPlayer'
import './App.css'

function App() {
  return (
    <Fragment>
      <Header />
      <div className='site-content'>
        <MusicPlayer />
      </div>
    </Fragment>
  )
}

export default App
