import React, { Fragment } from 'react'
// Components
import MusicPlayer from '../components/musicplayer/MusicPlayer'
import Albums from '../components/albums/Albums'
import Artists from '../components/artists/Artists'
import EventsList from '../components/eventsList/EventsList'
import Gallery from '../components/gallery/Gallery'

const Home = () => {
  return (
    <Fragment>
      <MusicPlayer />
      <Albums />
      <Artists />
      <EventsList />
      <Gallery />
    </Fragment>
  )
}

export default Home
