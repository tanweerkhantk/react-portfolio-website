import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaPaintBrush, FaMobileAlt } from 'react-icons/fa'

const Services = () => {
  const services = [
      {
        icons: <FaCode />,
        title: "Frontend Development",
        desc: "Building responsive and modern user interface using React, Tailwind CSS and Javascript."
      },
      {
        icons: <FaServer />,
        title: "Backend Development",
        desc: "Developing secure and scalable REST APIs using Node JS, Express and MongoDB."
      },
      {
        icons: <FaPaintBrush />,
        title: "UI/UX Design",
        desc: "Design clean, user-friendly and visually appealing interfaces for better user experience."
      },
      {
        icons: <FaMobileAlt />,
        title: "Responsive Design",
        desc: "Creating mobile-first designs that work across all devices and screen."
      },
    ]
  return (
    <div className='min-h-screen bg-gray-100 py-15 px-6'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl text-center font-bold'>Services</h2>
        <p className='text-gray-600 mt-2'>What I can do for you</p>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {services.map((service, i) => (
          <motion.div
          key={i}
          whileHover={{scale: 1.05}}
          className='bg-white p-6 rounded-xl shadow text-center'>
            <div className='flex justify-center items-center text-4xl text-blue-500 mb-4'>
              {service.icons}
            </div>
            <h3 className='text-xl font-semibold mb-2'>
              {service.title}
            </h3>
            <p className='text-gray-600 text-sm'>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className='max-w-5xl mx-auto mt-16'>
        <h3 className='text-3xl font-bold text-center mb-10'>
          Working Process
        </h3>

        <div className='grid md:grid-cols-3 gap-8 text-center'>
          {[
            {
              title: "Planning",
              desc: "Understanding your requirements and planning the project structure."
            },
            {
              title: "Development",
              desc: "Building high-quality and scalable applications using modern tech."
            },
            {
              title: "Deployment",
              desc: "Testing, optimizing and deploying your application live."
            },
          ].map((step, i) => (
            <motion.div
            key={i}
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0, y:40}}
            transition={{delay: i * 0.2}}
            className='bg-white p-6 rounded-xl shadow'>
              <h4 className='text-xl font-semibold mb-2'>
                {step.title}
              </h4>
              <p className='text-gray-600 text-sm'>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='text-center mt-20'>
        <h3 className='text-3xl font-bold mb-4'>
          Have a project in mind?
        </h3>
        <p className='text-gray-600 mb-6'>
          Let's work together and build something azaming.
        </p>
        <a href='/contact' className='bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition'>
          Conatct
        </a>
      </div>
    </div>
  )
}

export default Services
