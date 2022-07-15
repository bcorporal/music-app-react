
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import './HomeStyles.css'
import axios from 'axios'


const getInfo = {
  method: 'GET',
  url: 'https://theaudiodb.p.rapidapi.com/searchalbum.php',
  params: {s: 'drake'},
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
  }
};

axios.request(getInfo).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});


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
    <button><AiOutlineSearch size={40} className="icon" onClick={getInfo}/></button>
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