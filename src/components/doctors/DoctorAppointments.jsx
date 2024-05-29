import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, } from "@material-tailwind/react";
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const DoctorAppointments = () => {
  const navigate = useNavigate();
  const user  = useSelector((state) => state.profile.user);
  const [appointments,setAppointments] = useState([]);
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Online",
      value: "online",
    },
    {
      label: "Offline",
      value: "offline",
    },
  ];

  const TABLE_HEAD = ["Member", "Type", "Date", "Time"];



  const [verified, setVerified] = useState(true);
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortedResults, setSortedResults] = React.useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleTabSelect = (value) => {
    setSelectedTab(value);
  };

  console.log("Appointments - ",appointments)
  console.log("Search term - ", searchTerm)

  useEffect(() => {
    let filteredResults = [...appointments];

    if (searchTerm) {
      filteredResults = filteredResults.filter((row) =>
        row.patient.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTab === "online") {
      filteredResults = filteredResults.filter((row) => row.mode);
    } else if (selectedTab === "offline") {
      filteredResults = filteredResults.filter((row) => !row.mode);
    }

    setSortedResults(filteredResults);
  }, [selectedTab, searchTerm]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if(user){
          const response = await axios.get(`http://localhost:8081/api/v1/appointment/doctor/${user.id}`);
          setAppointments(response.data.appointments);
          setSortedResults(response.data.appointments);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    
    fetchAppointments();
  }, []);

  return (

    <>
      {verified ? (
        <div className='h-full w-[100%]'>
          <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none ">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}>
                  <Tabs value="all" className="w-full md:w-max">
                    <TabsHeader>
                      {TABS.map(({ label, value }) => (
                        <Tab key={value}
                          onClick={() => handleTabSelect(value)}
                          value={value} className='lg:w-[12vw] w-[33%]'>
                          &nbsp;&nbsp;{label}&nbsp;&nbsp;
                        </Tab>
                      ))}
                    </TabsHeader>
                  </Tabs>

                </motion.div>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-72">
                  <Input
                    label="Search"
                    icon={<FaSearch className="h-5 w-5" />}
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </motion.div>
              </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedResults && sortedResults.map(
                    ({ img, name, startingTime,endingTime,mode, date, doctor, patient }, index) => {
                      const isLast = index === sortedResults.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <motion.tr
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          key={index}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={patient && patient.profileImg ? patient.profileImg : patient.gender != 'Male' ? 'https://i.ibb.co/FXGmr2K/Female-Profile-Icon.jpg': 'https://i.ibb.co/74cXTYF/Male-Profile-Icon.png'} alt={patient.firstName} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {patient && patient.firstName}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {patient && patient.email}
                                </Typography>
                              </div>
                            </div>
                          </td>

                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={mode ? "online" : "offline"}
                                color={mode ? "green" : "blue-gray"}
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date}
                            </Typography>
                          </td>

                          <td>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {startingTime + ' to ' + endingTime}
                              {mode ?
                                <button onClick={() => navigate(`/call/${doctor.firstName}-${doctor.id}/${patient.firstName}-${patient.id}/doc`)}>
                                  <span className='text-blue-600 hover:text-blue-800 ml-4'>{"join video link"}</span>
                                </button>
                                :
                                <button onClick={() => navigate(`/report/write/${name}`)}>
                                  <span className='text-blue-600 hover:text-blue-800 ml-4'>{"write review"}</span>
                                </button>
                              }
                            </Typography>
                          </td>
                          {/* <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td> */}
                        </motion.tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )
        :
        (
          <div className=' absolute lg:top-[55%] top-[40%] left-[50%]  translate-x-[-50%] w-[60%]'>
            <h1 className='lg:text-4xl text-6xl font-mono font-bold text-center'>Please Verify Your Profile.</h1>
          </div>
        )
      }
    </>

  )
}

export default DoctorAppointments