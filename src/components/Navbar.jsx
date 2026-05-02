import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme =  localStorage.getItem("theme")

        if(savedTheme) {
            return savedTheme === "dark"
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
    })
    const location = useLocation()



   
    useEffect(() => {
        if(darkMode){

            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    },[darkMode])

    const navLink = (path, name) => (
        <Link
        to={path}
        onClick={() => setIsOpen(false)}
        className={`hover:text-blue-400 ${location.pathname === path ? "text-blue-400 font-semibold" : ""}`}>
            {name}
        </Link>
    )
  return (
    <nav className='bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:text-white shadow fixed w-full top-0 z-50'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
            <h1 className='text-xl font-bold'>Portfolio</h1>

            <div className='hidden md:flex items-center space-x-6'>
                {navLink("/", "Home")}
                {navLink("/about", "About")}
                {navLink("/services", "Services")}
                {navLink("/skills", "Skills")}
                {navLink("/projects", "Projects")}
                {navLink("/contact", "Contact")}

                <button onClick={() => setDarkMode(!darkMode)} className='cursor-pointer'>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            <div className='md:hidden flex items-center gap-4'>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun/> : <FaMoon/>}
                </button>
                <div onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes className='cursor-pointer'/> : <FaBars className='cursor-pointer'/>}
                </div>
            </div>
        </div>

        {isOpen && (
            <div className='md:hidden flex flex-col items-center gap-4 pb-4'>
                {navLink("/", "Home")}
                {navLink("/about", "About")}
                {navLink("/services", "Services")}
                {navLink("/skills", "Skills")}
                {navLink("/projects", "Projects")}
                {navLink("/contact", "Contact")}
            </div>
        )}


    </nav>
  )
}





export default Navbar
