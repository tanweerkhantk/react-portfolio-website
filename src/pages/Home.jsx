import React, { useEffect, useState } from 'react'
import {FaGithub, FaLinkedin, FaDownload} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Home = () => {
  const roles = [
    "Full Stack Developer",
    "MERN Full Stack Developer",
    "UI/UX Designer",
    "Digital Marketer",
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect (() => {
    const typing = setTimeout(() => {
      if(charIndex < roles[index].length){
        setText((prev) => prev + roles[index][charIndex])
        setCharIndex(charIndex + 1)
      }else{
        setTimeout(() => {
          setText('')
          setCharIndex(0)
          setIndex((prev) => (prev + 1) % roles.length)
        }, 1500)
      }
    }, 100)
    return () => clearTimeout(typing)
  }, [charIndex, index])
  return (
    <motion.div
    initial={{ opacity: 0, y: 50}}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.8}}
    className='min-h-screen flex flex-col justify-center items-center text-center p-6 bg-linear-to-r from-blue-100 to-purple-100'
    >
      <h1 className='text-5xl font-bold mb-4'>Hi, I'm <span className='text-green-500'>Tanweer Khan</span></h1>
      <h2 className='text-2xl mb-4 text-blue-600 dark:text-blue-400 h-8 font-bold'>
        {text}|
      </h2>
      <p className='max-w-xl mb-6'>
        I build scalable web applications with modern technologies like React JS, Node JS, Express JS, MongoDB
        & Tailwind CSS
      </p>
      <div className='flex gap-4 mb-6'>
        <button className='bg-black text-white px-6 rounded cursor-pointer'>
         <Link to="/projects">Projects</Link> 
        </button>
        <button className='border px-6 py-2 rounded flex items-center cursor-pointer gap-2'>
          <FaDownload /> Resume
        </button>
      </div>
      <div className='flex gap-6 text-2xl'>
        <FaGithub />
        <FaLinkedin />
      </div>

      
    </motion.div>
  )
}

export default Home
