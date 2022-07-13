import React from 'react'
import './HomeStyles.css'

const Home = () => {
  return (
    <div name='home' className='Home'>
    <div className='container'>
    <div className='top'>
    <h1>MUSIC ON DEMAND</h1>
    <h2>FROM YOUR FAVORITE ARTIST</h2>
    </div>
    <div className='bottom'>
    <button className='btn btn-dark'>Apple Music</button>
    <button className='btn'>Spotify</button>
    </div>
    </div>
    </div>
  )
}

export default Home