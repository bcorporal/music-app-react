
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

<div class="wrap">
    <form action="/" method="get">
    <label htmlFor="header-search">
        <span className="visually-hidden"></span>
    </label>
    <input
        type="text"
        id="header-search"
        placeholder="Search by artist"
        name="s" 
    />
    <button type="submit">Search</button>
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