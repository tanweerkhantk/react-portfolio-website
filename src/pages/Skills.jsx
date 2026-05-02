import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa'
import { title } from 'framer-motion/client'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
          { name: "HTML", level: "95%"},
          { name: "CSS", level: "90%"},
          { name: "Javascript", level: "90%"},
          { name: "Bootstrap", level: "85%"},
          { name: "Tailwind CSS", level: "80%"},
          { name: "React JS", level: "90%"},
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
          { name: "Node JS", level: "85%"},
          { name: "Express JS", level: "90%"},
          { name: "Mongo DB", level: "85%"},
      ],
    },
    {
      title: "Tools & Design",
      icon: <FaTools />,
      skills: [
          { name: "CorelDraw", level: "90%"},
          { name: "Photoshop", level: "85%"},
      ],
    },
  ]
  
  return (
    <div className='min-h-screen p-10 bg-linear-to-br from-blue-100 via-purple-100 to-pink-100'>
      <h2 className='text-4xl font-bold mb-12 text-center'>Skills 🚀</h2>
    <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
      {skillCategories.map((category, i) => (
        <motion.div
        key={i}
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: i * 0.2}}
        className='backdrop-blur-xl bg-white/40 border border-white/20 shadow-xl rounded-2xl p-6'>
          <div className='flex items-center gap-3 mb-6 text-blue-500 text-2xl'>
            {category.icon}
            <h3 className='font-semibold text-lg'>
              {category.title}
            </h3>
          </div>

          <div className='space-y-5'>
            {category.skills.map((skill, index) => (
              <div key={index}>
                <div className='flex justify-between mb-1'>
                  <span className='text-gray-800'>{skill.name}</span>
                  <span className='text-gray-600'>{skill.level}</span>
                </div>
              
          
          
          <div className='w-full bg-gray-300 h-3 rounded-full overflow-hidden'>
            <motion.div
            initial={{width: 0}}
            whileInView={{width: skill.level}}
            transition={{duration: 1}}
            className='h-3 bg-blue-500 rounded-full'>
            </motion.div>
          </div>
          </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <div className='text-center mt-16 max-w-2xl mx-auto'>
      <p className='text-gray-700 backdrop-blur-2xl bg-white/20 p-5 rounded-2xl'>
        I continuously improve my skills by building react-world projects and
        learning modern technologies for highly skilled Full Stack Developer 
        and deliver high-quality solutions.
      </p>
    </div>
    </div>
  )
}

export default Skills
