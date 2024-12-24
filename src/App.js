import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Toaster} from 'react-hot-toast'
import MyCart from './components/MyCart'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<MyCart/>}/>
    </Routes>

  <Toaster/>
    </BrowserRouter>
  )
}

export default App