import React, { Fragment } from 'react'
// Components
import Header from './components/header/Header'
import Home from './pages/Home'
// Router
import {
  Routes,
  Route,
} from "react-router-dom";
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
    </Fragment>
  )
}

export default App
