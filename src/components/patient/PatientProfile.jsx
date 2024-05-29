import React, { useState,useEffect } from 'react'
import { Card, CardHeader, CardBody, Typography, Avatar, Input, } from "@material-tailwind/react";
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/Operations/authAPI';
import { useNavigate } from 'react-router-dom';
import { List, ListItem } from "@material-tailwind/react";
import axios from 'axios';

const PatientProfile = () => {
  const user = useSelector((state) => state.profile.user);
  const [name, SetName] = useState(`${user.firstName} ${user.lastName}`);

  const [image, SetImage] = useState(user?.profileImg);
  // console.log(user)

  const cardHeaderStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [updating, setUpdating] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);
  const [reports, setReports] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 
    

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    setUpdating(true);
    axios.post(`http://localhost:8081/api/v1/personal-info/profile-pic/${user.id}`, formData)
      .then(response => {
        // console.log(response);
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
        setUpdating(false);
      });
  };

    
    useEffect(() => {
        // Fetch the reports when the component mounts
        const fetchReports = async () => {
            try {
                // Make a GET request to fetch reports for the specific patient
                const response = await axios.get(`http://localhost:8081/api/v1/report/patient/${user.id}`);
                // Set the reports in state
                setReports(response.data);
            } catch (err) {
                // Handle errors and set the error state
                setError(err);
            } finally {
                // Set loading to false when the request is completed
                setLoading(false);
            }
        };

        fetchReports();
    }, []);  

  return (
    <div className={`profile flex lg:flex-row flex-col-reverse overflow-y-scroll lg:gap-0 gap-8 pb-4`}>


      <motion.div
        initial={{ scale: 0, height: 0 }}
        animate={{ scale: 1, height: "70vh" }}
        transition={{ duration: 0.5 }}
        className=' flex justify-center items-center lg:w-[50%] h-full w-[100%] '>
        <Card
          shadow={false}
          className="relative grid h-[70vh] w-full max-w-[28rem] items-start  overflow-hidden p-4"
        >

          <div>
            <h4 className='my-1'>Change Profile Picture</h4>
            <div
              style={{
                border: '2px dashed #ccc',
                borderRadius: '10px',
                padding: '20px',
                width: '200px',
                margin: '20px auto',
                cursor: 'pointer',
              }}
              onClick={() => document.getElementById('profileImageInput').click()}
            >

              {image ? (
                <img
                  src={user?.gender == 'Male' ? 'https://i.ibb.co/74cXTYF/Male-Profile-Icon.png' : 'https://i.ibb.co/FXGmr2K/Female-Profile-Icon.jpg'}
                  alt="Profile Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className={updating ? "cursor-wait" : "cursor-pointer"}
                />
              ) : (
                <div style={{ color: '#666' }}>Click to upload profile image</div>
              )}
            </div>

            <input
              type="file"
              id="profileImageInput"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleFileChange}
              disabled={updating}
            />
          </div>

          <div className=' mt-[-4vh]'>
            <h4 className='my-[2vh]'>Previous Reports</h4>
            <Card className="w-[70%] ml-auto mr-auto ">
              <List className='text-sm'>
                {
                  reports.data && reports.data.map( (report, index) => (
                    <ListItem key={report.id} selected={selected === index} onClick={() => { setSelectedItem(4); navigate(`/report/${report.id}`); }}>
                    Report {report.id}
                  </ListItem>
                  ))
                }
              
      
            
              </List>
            </Card>
          </div>


        </Card>
      </motion.div>

      <motion.div
        initial={{ scale: 0, height: 0 }}
        animate={{ scale: 1, height: "70vh" }}
        transition={{ duration: 0.5 }}
        className=' flex justify-center items-center lg:w-[50%]'>
        <Card
          shadow={false}
          className="relative grid h-[70vh] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className={`absolute inset-0 m-0 h-full w-full rounded-none`}
            style={cardHeaderStyle}
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography variant="h5" className="mb-4 text-gray-400">
              {name}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              className="mb-6 font-bold hover:scale-[1.1] hover:text-gray-500 leading-[1.5]"
            >
              <button onClick={handleLogout}>Log Out</button>
            </Typography>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src={image != undefined ? image : (user?.gender === 'Male' ? 'https://i.ibb.co/74cXTYF/Male-Profile-Icon.png' : 'https://i.ibb.co/FXGmr2K/Female-Profile-Icon.jpg')}
            />
          </CardBody>
        </Card>
      </motion.div>

    </div>

  )
}

export default PatientProfile