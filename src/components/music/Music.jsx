import React from 'react'
import './MusicStyles.css'

const Music = () => {
  return (
    <div name='music' className='music'>
    <div className='container'>
    <div className='top'>
    <h1>MUSIC ON DEMAND</h1>
    </div>
    <div className='bottom'>
    <button className='btn btn-dark'>Music</button>
    <button className='btn'>Listen</button>
    </div>
    </div>
    </div>
  )
}

export default Music