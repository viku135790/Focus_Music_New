import React from 'react'
import Home_Header from '../home/Home_Header'
import NavBar from '../reusable_componants/NavBar'
import MusicPlayer from '../home/MusicPlayer'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className='home-page-main-conta'>
      <NavBar />
      <Home_Header />
      <MusicPlayer />
    </div>
  )
}

export default HomePage