import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Input } from "@material-tailwind/react";
import DoctorInfoBox from './DoctorInfoBox';
import { motion } from "framer-motion";
import Loader from "./Loader";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAppointmentTimeing } from '../../slices/appointmentSlice';


const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [address, setAddress] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState(getTodayDate());
  const [startingTime, setStartingTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [appointments,setAppointments] = useState();
  

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const doctorCategories = Array.from(new Set(doctors.map(d => d.specialization)));

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/v1/appointment/${date}/${startingTime}`); 
      setAppointments(response.data.appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };
  

  useEffect(() => {
    let filtered = doctors.filter(doctor => {
      if (category != '' && doctor.specialization !== category) {
        return false;
      }
      if (doctorName != '' && !doctor.user.firstName.toLowerCase().includes(doctorName.toLowerCase())) {
        return false;
      }
      return true;
    });

    if(city != '' || state != ''){
      let filterAddress = address.filter(a => {
        if(city != '' && a.townCity != city){
          return false;
        }
        if(state != '' && a.state != state){
          return false;
        }
        return true;
      });
  
      const Ids = filterAddress.map(a => a.id);
      filtered = filtered.filter(doctor => Ids.includes(doctor.clinic.addressId));
    }


    setFilteredDoctors(filtered);
  },[category,state,city,doctorName]);



  useEffect(() => {
    if(startingTime != '' && endingTime != '' && date != ''){
      dispatch(setAppointmentTimeing({date,startingTime,endingTime}));
    }

    fetchAppointments();
    
    let filter = filteredDoctors;
    if(appointments){
      const filterDoctors = filteredDoctors;

      if (appointments) {
        const doctorsWithoutAppointments = filterDoctors.filter(doctor => {
          return !appointments.some(appointment => appointment.doctorId === doctor.userId);
        });

        setFilteredDoctors(doctorsWithoutAppointments);
      }
    }
    
  },[date,startingTime,endingTime]);


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/doctor/info'); 
        setDoctors(response.data);
        setFilteredDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
  
    fetchDoctors();
  }, []);
  
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const addressIds = filteredDoctors.map(d => d.clinic.addressId);
        const response = await axios.get('http://localhost:8081/api/v1/address/list', { params: { addressIds } });
        setAddress(response.data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };
  
    fetchAddresses();
  }, [filteredDoctors]);



  return (
    <div>
      <Navbar />

      <div className='minh-[100vh] w-full'>
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, power: "easeIn" }}
          className="lg:h-[10vh] h-[30vh] my-5 flex flex-wrap items-center lg:justify-evenly justify-center gap-3 p-2">
          <h1 className="font-mono text-lg font-extrabold">Categories:</h1>
          {doctorCategories.map((categoryItem, index) => (
            <button
              key={index}
              className={`rounded-md border border-black px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white font-mono ${category === categoryItem ? 'bg-black text-white' : 'text-black'
                }`}
              onClick={() => { setCategory(categoryItem) }}
            >
              {categoryItem}
            </button>
          ))}
        </motion.div>

        <div className='bg-rose-500 lg:h-[90vh] h-[150vh] flex lg:flex-row flex-col-reverse p-4 lg:gap-2 gap-8'>

          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.8, power: "easeIn" }}
            className='doctor-appointment-box bg-blue-300 lg:w-[70%] w-[99%] h-[60%] lg:h-full rounded-3xl lg:ml-0 ml-[1%] p-6 flex gap-3 flex-wrap  overflow-x-scroll justify-evenly scroll-smooth'>

            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, index) => (
                <DoctorInfoBox key={index} doctor={doctor} />
              ))
            ) : (
              <Loader ans={"Sorry, no doctors avaliable."}/>
            )}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.8, power: "easeIn" }}
            className=' border-2 border-black lg:w-[30%] w-[99%]  lg:h-full h-[40%] bg-white flex flex-col items-center pt-8 lg:gap-8 gap-5 lg:ml-0 ml-[1%]'>

            <h1 className=' text-lg font-bold'>Search for In-Clinic Appointment </h1>

            <div className='w-[75%]'>
              <Input value={state} label="State" onChange={(e) => { setState(e.target.value) }} />
            </div>
            <div className='w-[75%]'>
              <Input value={city} label="City" onChange={(e) => { setCity(e.target.value) }} />
            </div>
            <div className='w-[75%]'>
              <Input variant="standard" label="Category" placeholder="Category" onChange={(e) => { setCategory(e.target.value) }} value={category} />
            </div>
            <div className='w-[75%]'>
              <Input variant="standard" value={doctorName} label="Search by doctors name" placeholder="name" onChange={(e) => { setDoctorName(e.target.value) }} />
            </div>
            <div className='w-[75%] mt-4'>
              <Input type="date" name="date" value={date}
                min={getTodayDate()} label="Date" onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <div className='w-[75%]'>
              <div className="flex">
                <div className="mr-2">
                  <label htmlFor="startTime">Start Time:</label>
                  <input type="time" id="startingTime" name="startTime" value={startingTime} className='border-[1px] rounded-md border-black p-3 text-sm' onChange={(e) => { setStartingTime(e.target.value)}} />
                </div>
                <div>
                  <label htmlFor="endTime">End Time:</label>
                  <input type="time" id="endingTime" name="endTime" value={endingTime} className='border-[1px] rounded-md border-black p-3 text-sm' onChange={(e) => { setEndingTime(e.target.value)}} />
                </div>
              </div>
            </div>

            <div className=' h-[5vh] w-[75%] font-semibold  text-xl items-center lg:flex' hidden>
              <h1>Total search result :  {filteredDoctors.length}</h1>
            </div>

          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Appointment