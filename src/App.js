import React, { Fragment } from 'react'
// Components
import Header from './components/header/Header'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Fragment>
      <Header />
      <div className='site-content'>
        <Home />
      </div>
    </Fragment>
  )
}

export default App
