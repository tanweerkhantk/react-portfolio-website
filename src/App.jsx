import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Skills from './pages/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='font-sans pt-16 flex flex-col min-h-screen'>
    <Navbar />
    <div className='flex-grow'>
      <Routes>
       <Route path='/' element={<Home />}/> 
       <Route path='/about' element={<About />}/> 
       <Route path='/services' element={<Services />}/> 
       <Route path='/skills' element={<Skills />}/> 
       <Route path='/projects' element={<Projects />}/> 
       <Route path='/contact' element={<Contact />}/> 
       
      </Routes>
    </div>
    <Footer />
   </div>
  )
}

export default App
