import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import ImageSlider from './components/imageSlider'
import SideBar from './components/sideBar'
import Article from './components/article'
import TemporaryDrawer from './layout/drawer'
import Heading from './layout/heading'

function App() {

  return (
    <>
    <div className='mainContainer'>
      <Navbar/>
      <TemporaryDrawer/>
      <Heading/>
      <ImageSlider/>
      <SideBar/>
    </div>
    <div className='extraContainer'>
    <Article/>
    </div>
    </>
  )
}

export default App
