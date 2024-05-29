import React, { useEffect, useState } from 'react';
import { Avatar, Alert } from "@material-tailwind/react";
import { IoIosStarOutline } from "react-icons/io";
import Chart from 'react-apexcharts';
import { motion } from "framer-motion";
import axios from 'axios';
import { useSelector } from 'react-redux';

const DoctorProfile = () => {
  const user = useSelector((state) => state.profile.user);
  const [doctorData, setDoctorData] = useState();
  const [image, SetImage] = useState(user.profileImg);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [updating, setUpdating] = useState(false)


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/personal-info/doctor/${user.id}`);
        setDoctorData(response.data);
        setIsDataFetched(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsDataFetched(false);
      }
    }

    fetchData();
  }, [user.id]);

  const [verified, setVerified] = useState(true);

  const series = [4000, 2000, 430, 240];
  const options = {
    labels: ['Total Online Patients', 'Total Offline Patients', 'This Months Online Patients', 'This Months Offline Patients'],
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    setUpdating(true);
    axios.post(`http://localhost:8081/api/v1/personal-info/profile-pic/${user.id}`, formData)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          SetImage(response?.data?.user?.profileImg);
          localStorage.setItem('user', JSON.stringify(response?.data?.user));
          setUpdating(false);
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };


  return (
    <div className='lg:h-full h-[57vh]  w-[100%] relative'>
      <h1 className='text-3xl p-5 font-mono h-[10vh] bg-gray-900 text-white'>Your Profile {!verified ? "is not verified " : ""}</h1>
      {verified ? (
        <div>

          <div className='p-5 relative'>
            {!isDataFetched ? <Alert icon={<Icon />} color='amber' className='absolute z-10 top-[3] left-[1] lg:w-[25vw] w-[80vw] '>Please Fill Your Information</Alert> : ""}

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .5 }}
              className=' lg:w-[35vw] w-[90%] rounded-lg shadow-xl lg:h-[18vh] h-[22vh] flex justify-center items-center lg:gap-[4vw] gap-[10vw] p-4 bg-gray-200 cursor-pointer absolute top-[5vh] left-[2vh] font-mono'>
              <label htmlFor="avatarInput" style={{ cursor: 'pointer' }}>

                <Avatar src={image != undefined ? image : (user?.gender === 'Male' ? 'https://i.ibb.co/74cXTYF/Male-Profile-Icon.png' : 'https://i.ibb.co/FXGmr2K/Female-Profile-Icon.jpg')} alt="avatar" size="xxl" withBorder={true}
                  className={`p-0.5 ${updating} ? "cursor-wait" : "cursor-pointer"`} />

                <input
                  type="file"
                  id="avatarInput"
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={updating}
                />
              </label>
              <div className='h-full text-lg '>
                {user?.firstName && user?.lastName && <h1>Dr {user?.firstName} {user?.lastName}</h1>}
                {doctorData?.doctor?.specialization && <h1>{doctorData?.doctor?.specialization}</h1>}
                {doctorData?.address?.building && doctorData?.address?.area && <h1>{doctorData?.address?.building}, {doctorData?.address?.area}</h1>}
                {doctorData?.address?.townCity && doctorData?.address?.state && <h1>{doctorData?.address?.townCity}, {doctorData?.address?.state}</h1>}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='h-[10vh] bg-gray-900 rounded-lg lg:w-[25vw]
             absolute lg:top-[9vh] lg:left-[40vw] top-[32vh] left-[10vw] shadow-xl p-6 text-xl font-mono'>
              <div className='flex items-center gap-4'>
                <h1 className='text-white'>Rating :</h1>
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
                <IoIosStarOutline color='yellow' size={"24px"} />
              </div>
            </motion.div>

            <div className=' absolute lg:top-[27vh] lg:left-[15vw] lg:visible invisible '>
              <Chart options={options} series={series} type="pie" width="550" />
            </div>


          </div>
        </div>


      ) : (
        <div className=' absolute lg:top-[55%] top-[40%] left-[50%]  translate-x-[-50%] w-[60%]'>
          <h1 className='lg:text-4xl text-6xl font-mono font-bold text-center'>Please Verify Your Profile.</h1>
        </div>
      )}

    </div>
  )
}
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}
export default DoctorProfile;
