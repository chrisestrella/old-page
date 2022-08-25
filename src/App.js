import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact';
// import { Controller, Scene } from 'react-scrollmagic';


function App() {

  return (
    <>
      <div id="trigger"></div>
      <Navbar />
      <Header />
      <Projects />
      <Contact />
    </>
  );
}

export default App;