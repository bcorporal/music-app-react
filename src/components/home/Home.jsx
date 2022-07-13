
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import './HomeStyles.css'

const Home = () => {
  return (
    <div name='home' className='Home'>
    <div className='container'>
    <div className='top'>
    <h1>MUSIC ON DEMAND</h1>
    <h2>FROM YOUR FAVORITE ARTIST</h2>
    </div>
<div>
    <form className='form'>
    <div>
    <input type="text" placeholder='Search by Artist' />
    </div>
    <div>
    <button><AiOutlineSearch size={40} className="icon"/></button>
    </div>
    </form>
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