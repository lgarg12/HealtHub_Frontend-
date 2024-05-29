import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import DoctorNavbar from './DoctorNavbar'
import DoctorDashboardLeft from "./DoctorDashboardLeft"
import { MdCalendarMonth } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../services/Operations/authAPI'
import axios from 'axios'

const DoctorDashboard = () => {
  const user = useSelector((state) => state.profile.user);
  const [onlineCnt,setOnlineCnt] = useState(0);
  const [offlineCnt,setOfflineCnt] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    const fetchAppointments = async () => {
      try {
        if(user){
          const response = await axios.get(`http://localhost:8081/api/v1/appointment/doctor/${user.id}`);
          let appointments = response.data.appointments;
          
          let onlineAppointments = 0;
          let offlineAppointments = 0;
    
          for (const appointment of appointments) {
            if (appointment.mode) {
              onlineAppointments++;
            } else {
              offlineAppointments++;
            }
          }
    
          setOfflineCnt(offlineAppointments);
          setOnlineCnt(onlineAppointments);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
    
    return () => clearInterval(interval);
  }, []);
  
  const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const date = dateTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const time = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  
  const [verified, setVerified] = useState(true);
  const handleLogout = () => {
    dispatch(logout(navigate));
  }
  
  return (
    <>
      <Navbar></Navbar>

      <div className=' bg-blue-gray-100 min-h-[10vh] py-5 px-2 flex items-center border-b-2 border-black'>
        <DoctorNavbar />
      </div>

      <div className="flex lg:flex-row  flex-col-reverse">
        <div className="lg:h-[78vh] h-[70vh] lg:w-[30vw] border-r-2 border-black w-full flex flex-col z-10 ">
          <div className="h-[10vh] bg-gray-900 lg:w-[29.9vw] w-full p-2 text-white cursor-pointer">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-mono pb-1">Dashboard</motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-[5vw]">
              <div className="flex items-center gap-2">
                <MdCalendarMonth />
                <h1>{day}</h1>
                <h1>{date}</h1>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <h1>{time}</h1>
              </div>
            </motion.div>
          </div>

          {
            verified ? (
              <div className="min-h-[68vh] bg-blue-gray-100  ">
                <div className="flex">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <DoctorDashboardLeft icon={<FaPeopleGroup size={64} />} text="Patients" count="420" percent={23} ></DoctorDashboardLeft>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}>
                    <DoctorDashboardLeft icon={<FaUserDoctor size={64} />} text="Consultations" count="527" percent={65}></DoctorDashboardLeft>
                  </motion.div>

                </div>



                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white rounded-lg h-[7vh] w-[90%] mt-7 ml-5 shadow-lg flex justify-center items-center text-xl font-mono font-bold">
                  <h2>Offline Appointments - {offlineCnt}</h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="bg-white rounded-lg h-[7vh] w-[90%] mt-7 ml-5 shadow-lg flex justify-center items-center text-xl font-mono font-bold">
                  <h2>Online Appointments - {onlineCnt}</h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-white rounded-lg h-[10vh] w-[50%] lg:mt-[5vh] mt-[3vh] lg:ml-[7vw] ml-[25vw] shadow-lg flex justify-center items-center  ">
                  <Button className="w-[70%] text-lg font-mono font-bold" onClick={handleLogout}>Logout</Button>
                </motion.div>

              </div>
            )
              : (
                <div className='h-[68vh] bg-blue-gray-100'></div>
              )
          }

        </div>


        <div className="lg:mt-0 lg:h-[78vh] lg:w-[70vw]">
          <Outlet />
        </div>

      </div>





    </>
  )
}

export default DoctorDashboard