import React from 'react'
import {motion} from "framer-motion"
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleChng = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    if(!res.ok){
      throw new Error("Error while sending message")
    }


    const data = await res.json()
    toast.success(data.message || "Message send successfully")
    setForm({name: "", email: "", mobile: "", message: ""})
  }
    

    
   catch(error){
    console.log(error)
    toast.error(error.message || "Error while sending message")
   } finally{
    setLoading(false)
   }
  }
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 p-10'>
      <h2 className='text-4xl font-bold text-center mb-10'>
        Contact
      </h2>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>
        <motion.div
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x:0}}
        className='bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg'>
          <h3 className='text-2xl font-semibold mb-6'>
            Get in Touch
          </h3>
          <p className='text-gray-700 mb-6'>
            Feel free to reach out for meeting or projects
          </p>
          <div className='space-y-4 text-gray-700'>
            <div className='flex items-center gap-3'>
              <FaMapMarkerAlt className='text-blue-500'/>
              <span>Mumbai, Maharashtra, India</span>
            </div>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt className='text-blue-500'/>
              <span>+91 98765 43210</span>
            </div>
            <div className='flex items-center gap-3'>
              <FaEnvelope className='text-blue-500'/>
              <span>web@gmail.com</span>
            </div>
          </div>

          <div className='flex gap-6 mt-6 text-2xl'>
            <FaGithub className='cursor-pointer hover:text-blue-500'/>
            <FaLinkedin className='cursor-pointer hover:text-blue-500'/>
          </div>
        </motion.div>

        {/* <motion.form
        initial={{opacity: 0, x:50}}
        whileInView={{opacity:1, x:0}}
        className='bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg space-y-4'> */}
          <form onSubmit={handleSubmit} className='bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg space-y-4'>
          <input
          name='name'
          onChange={handleChng}
          value={form.name}
          className='w-full p-3 border rounded bg-transparent'
          placeholder='Name'
          type='text' required />
          <input
          name='email'
          onChange={handleChng}
          value={form.email}
          className='w-full p-3 border rounded bg-transparent'
          placeholder='Email'
          type='email' required />
          <input
          name='mobile'
          onChange={handleChng}
          value={form.mobile}
          className='w-full p-3 border rounded bg-transparent'
          placeholder='Contact'
          type='tel' required/>
          <textarea 
          name='message'
          onChange={handleChng}
          value={form.message}
          className='w-full p-3 border rounded bg-transparent'
          rows="5"
          placeholder='Message' required/>

          <button
          disabled={loading}
          className='w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition'>
            {loading ? "Sending..." : "Send Message"}
          </button>
          </form>
        {/* </motion.form> */}
      </div>

      <div className='max-w-6xl mx-auto mt-16'>
        <h3 className='text-2xl font-semibold mb-4 text-center'>
          Location
        </h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241318.22867176824!2d72.71354061439699!3d19.081434215789436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1777723124672!5m2!1sen!2sin" 
        className='w-full h-[300px] rounded-xl border-0' 
        loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Contact
