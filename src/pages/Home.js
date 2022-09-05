import React, { Fragment } from 'react'
// Components
import MusicPlayer from '../components/musicplayer/MusicPlayer'
import Albums from '../components/albums/Albums'
import Artists from '../components/artists/Artists'
import EventsList from '../components/eventsList/EventsList'
import Gallery from '../components/gallery/Gallery'
import Blog from '../components/blog/Blog'
import RecentProducts from '../components/products/RecentProducts'
import Contact from '../components/contact/Contact'
import Newsletter from '../components/newsletter/Newsletter'

const Home = () => {
  return (
    <Fragment>
      <MusicPlayer />
      <Albums />
      <Artists />
      <EventsList />
      <Gallery />
      <Blog />
      <RecentProducts />
      <Contact />
      <Newsletter />
    </Fragment>
  )
}

export default Home
