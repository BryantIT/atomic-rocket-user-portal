import React, { Fragment } from 'react'
// Components
import MusicPlayer from '../components/musicplayer/MusicPlayer'
import Albums from '../components/albums/Albums'
import Artists from '../components/artists/Artists'
import EventsList from '../components/eventsList/EventsList'

const Home = () => {
  return (
    <Fragment>
      <MusicPlayer />
      <Albums />
      <Artists />
      <EventsList />
    </Fragment>
  )
}

export default Home
