import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-center'>
        <div>
          <h2 className='text-xl font-bold mb-2'>Tanweer Khan</h2>
          <p className='text-gray-400'>
            Passionate Full Stack Developer building modern web apps.
          </p>
        </div>
        <div>
          <h3 className='font-semibold mb-2'>Quick Links</h3>
          <ul className='space-y-1 text-gray-400'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold mb-2'>Follow</h3>
          <div className='flex justify-center md:justify-center gap-4 text-xl'>
            <FaGithub />
            <FaLinkedin />
            <FaEnvelope />
          </div>
        </div>
      </div>
      <p className='text-center text-gray-500 mt-8 text-sm'>
        Copyright &copy; {new Date().getFullYear()} Tanweer Khan. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
