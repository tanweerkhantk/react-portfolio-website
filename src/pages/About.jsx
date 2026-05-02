import React from 'react'
import { motion } from 'framer-motion'
import {FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

const About = () => {
  return (
    <div className='min-h-screen bg-gray-100  py-16 px-6'>
      <motion.div
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      className='text-center mb-12'>
        <h2 className='text-4xl font-bold '>About</h2>
        <p className='text-gray-600  mt-2'>
          Go to know more about and journey
        </p>
      </motion.div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        <motion.div
        initial={{opacity: 0, x: -50}}
        whileInView={{ opacity: 1, x: 0}}>
          <img src='https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww' 
          alt="profile"
          className='rounded-2xl shadow-lg'/>
        </motion.div>
        <motion.div
        initial={{opacity: 0, x: 50}}
        whileInView={{ opacity: 1, x: 0}}>
          <h3 className='text-2xl font-semibold mb-4'>
            I' m Tanweer Khan
          </h3>
          <p className='text-gray-700 dark:text-gray-600 mb-4'>
            I am a passionate Full Stack Developer spacializing in MERN Stack.
            I building scalable, user-friendly and modern wen applications.
          </p>
          <p className='text-gray-700 dark:text-gray-600 mb-6'>
            High Skilled Developer and work pn real-world impactful
            projects while continuously improving my skills.
          </p>

          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
              <h4 className='font-bold dark:text-white'>Experience</h4>
              <p className='text-sm text-gray-500'>Fresher / Learning</p>
            </div>
            <div className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
              <h4 className='font-bold dark:text-white'>Projects</h4>
              <p className='text-sm text-gray-500'> 10+ Completed</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='max-w-6xl mx-auto mt-16'>
        <h3 className='text-3xl font-bold mb-8 text-center dark-text-white'>
          Skills
        </h3>

        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {icon: <FaHtml5 />, name: "HTML"},
            {icon: <FaCss3 />, name: "CSS"},
            {icon: <FaJs />, name: "Javascript"},
            {icon: <FaBootstrap />, name: "Bootstrap"},
            {icon: <FaReact />, name: "React JS"},
            {icon: <FaNodeJs />, name: "Node JS"},
            {icon: <FaDatabase />, name: "Mongo DB"},
           
          ].map((skill, i) => (
            <motion.div
            key={i}
            whileInView={{scale: 1.05}}
            className='bg-white flex gap-5 items-center justify-center p-6 rounded-xl text-center'>
              <div className='text-4xl text-blue-500'>
                {skill.icon}
              </div>
              <h4 className='text-3xl font-semibold'>
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='max-w-4xl mx-auto text-center mt-16'>
        <h3 className='text-3xl font-bold mb-6 '>Journey</h3>
        <p className='text-gray-700 dark:text-gray-600'>
          Started journey as a beginner with some coding experience. Now i am building
          full stack applications using modern technologies. I am continuously learning 
          and for professional developer.
        </p>
      </div>
      
    </div>
  )
}

export default About
