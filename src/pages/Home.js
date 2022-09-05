import React, { Fragment } from 'react'
// Components
import MusicPlayer from '../components/musicplayer/MusicPlayer'
import AlbumsPreview from '../components/albums/AlbumsPreview'
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
      <AlbumsPreview />
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
