import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Speed from './components/speed/Speed';
import Throttle from './components/throttle/Throttle';
import Contact from './components/contact/Contact';



function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Speed />
    <Throttle />
    <Contact />
    </>
  );
}

export default App;
