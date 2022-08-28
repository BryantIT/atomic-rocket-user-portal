import React, { Fragment } from 'react'
// Components
import MusicPlayer from '../components/musicplayer/MusicPlayer'
import Albums from '../components/albums/Albums'

const Home = () => {
  return (
    <Fragment>
      <MusicPlayer />
      <Albums />
    </Fragment>
  )
}

export default Home
