import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Music from './components/music/Music';
import Festivals from './components/festivals/Festivals';
import Contact from './components/contact/Contact';




function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Music />
    <Festivals />
    <Contact />
    </>
  );
}

export default App;
