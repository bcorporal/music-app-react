import React from 'react'
import './HomeStyles.css'

const Home = () => {
  return (
    <div name='home' className='Home'>
    <div className='container'>
    <div className='top'>
    <h1>MUSIC IS LIFE</h1>
    </div>
    <div className='bottom'>
    <button className='btn btn-dark'>Music</button>
    <button className='btn'>Listen</button>
    </div>
    </div>
    </div>
  )
}

export default Home