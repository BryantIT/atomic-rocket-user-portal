import React, { Fragment } from 'react'
// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FourOhFour from './components/errors/FourOhFour'
// Pages
import Home from './pages/Home'
import AlbumPage from './pages/AlbumPage'
import AlbumsPage from './pages/AlbumsPage'
import ArtistPage from './pages/ArtistPage'
import BlogsPage from './pages/BlogsPage'
import BlogPage from './pages/BlogPage'
// Router
import { Routes, Route } from 'react-router-dom'
// Styles
import './App.css'

function App() {
  return (
    <Fragment>
      <Header />
      <div className='site-content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/album' element={<AlbumPage />} />
        </Routes>
        <Routes>
          <Route path='/albums' element={<AlbumsPage />} />
        </Routes>
        <Routes>
          <Route path='/artist' element={<ArtistPage />} />
        </Routes>
        <Routes>
          <Route path='/blogs' element={<BlogsPage />} />
        </Routes>
        <Routes>
          <Route path='/blog' element={<BlogPage />} />
        </Routes>
      </div>
      <Footer />
      <FourOhFour />
    </Fragment>
  )
}

export default App
