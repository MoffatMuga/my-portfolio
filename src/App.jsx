import { useEffect } from 'react'
import Aos from 'aos'
import './App.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Experience from './components/UI/Experience';

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
            </main>
          <Footer/>
    </>

  )
}

export default App
