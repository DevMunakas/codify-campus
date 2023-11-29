//React Hooks
import { useState, useEffect } from 'react'

//Reac Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//App Styles 
import './App.css'
//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'


//Components
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'
import Lessons from './components/Lessons/Lessons'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} >
              <Route index element={<Main />} />
              <Route path='Lessons/:id' element={<Lessons />} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
