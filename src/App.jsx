import { useEffect } from 'react'
import Aos from 'aos'
import './App.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Experience from './components/UI/Experience';
import Project from './components/UI/Project';

function App() {
  useEffect (() =>{
    Aos.init();
  }, []);
  

  return (
    <>
          <Header/>
            <main>
              <Hero />
              <Experience/>
              <Project />
            </main>
          <Footer/>
    </>

  )
}

export default App
