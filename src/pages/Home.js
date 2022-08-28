import React, { Fragment } from 'react'
// Components
import MusicPlayer from '../components/musicplayer/MusicPlayer'
import Albums from '../components/albums/Albums'
import Artists from '../components/artists/Artists'

const Home = () => {
  return (
    <Fragment>
      <MusicPlayer />
      <Albums />
      <Artists />
    </Fragment>
  )
}

export default Home
