import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "E-commerce App",
    desc: "Full Stack MERN ecommerce app with authentication and payments.",
    img: "https://miro.medium.com/1*VMVKGNTxc7lVEgce5uxd_Q.jpeg",
  },
  {
    title: "Todo App",
    desc: "CRUD app with registration and login system and REST API.",
    img: "https://miro.medium.com/1*VMVKGNTxc7lVEgce5uxd_Q.jpeg",
  },
  {
    title: "Portfolio Website",
    desc: "Personal responsive portfolio using React JS and Tailwind CSS.",
    img: "https://miro.medium.com/1*VMVKGNTxc7lVEgce5uxd_Q.jpeg",
  },
]

const Projects = () => {
  return (
    <div className='min-h-screen p-10 bg-white dark:bg-gray-900'>
      <h2 className='text-4xl font-bold mb-10 text-center dark:text-white mt-4'>Projects</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {projects.map((p, i) => (
          <motion.div
          key={i}
          whileInView={{scale: 1.05}}
          className='bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow'>
            <img src={p.img} alt={p.title} className='w-full h-48 object-cover' />
            <div className='p-5'>
              <h3 className='text-xl font-bold mb-2 dark:text-white'>
                {p.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                {p.desc}
              </p>
              <div className='flex gap-4'>
                <button className='flex items-center gap-2 bg-black text-white px-4 rounded'>
                  <FaGithub /> Code
                </button>
                <button className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded dark:text-white'>
                  <FaExternalLinkAlt /> Live
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
