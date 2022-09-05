import React, { Fragment } from 'react'
// Components
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import FourOhFour from './components/errors/FourOhFour'
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
      </div>
      <Footer />
      <FourOhFour />
    </Fragment>
  )
}

export default App
