import React from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const initial = { y: "-9vh" }
  const subinitial = { y: "-3vh", opacity: 0 }
  const subfinal = { y: "0vh", opacity: 1 }
  const subtrans = { delay: 0.4 }
  const final = { y: "0vh" }
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.profile.user);
  

  return (
    <motion.div initial={initial} animate={final} transition={{ duration: 0.3, ease: "easeIn" }} className='h-[24vh] px-4 flex flex-wrap justify-center items-center border-b-2 border-black lg:h-[9vh] lg:justify-between '>

      <h1 onClick={() => navigate("/")} className='bg-blue-400 p-2 lg:p-1 lg:ml-7 ml-0 font-extrabold font-mono text-5xl lg:text-4xl cursor-pointer'>HH</h1>

      <motion.div initial={subinitial} animate={subfinal} transition={subtrans} className='flex gap-6 flex-wrap justify-evenly lg:gap-[6vw] text-2xl cursor-pointer font-mono lg:p-0 p-4'>

        <NavLink to={"/"} className='hover:font-extrabold lg:m-0 mx-4'>Home</NavLink>
        <NavLink to={"/about"} className='hover:font-extrabold lg:m-0 mx-4'>About</NavLink>
        <NavLink to={"/appointment/all"} className='hover:font-extrabold'>Appointment</NavLink>
        {
          token && <NavLink to={`/${user?.role}/profile`} className='hover:font-extrabold'>Dashboard</NavLink> 
        }
        {
          !token && <NavLink to="/login" className='hover:font-extrabold'>Login</NavLink>
        }
      </motion.div>
      
      <NavLink to={"/contact"} className='lg:mr-7 font-extrabold font-mono text-2xl cursor-pointer lg:mb-0 mb-8 '>Contact</NavLink>
    </motion.div>
  )
}

export default Navbar