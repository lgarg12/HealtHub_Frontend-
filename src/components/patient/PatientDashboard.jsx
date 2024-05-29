import React from 'react'
import { Tabs, TabsHeader, Tab, } from "@material-tailwind/react";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';

const PatientDashboard = () => {
    return (
        <>
            <Navbar />
            <div className=' bg-blue-gray-100 min-h-[100vh] w-full p-5 '>


                <div >
                    <Tabs value="df">
                        <TabsHeader className="lg:w-[80vw] w-full lg:ml-[10vw] ml-[0vw] lg:mt-[5vh] mt-[3vh] ">

                            <NavLink to={"/patient/profile"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab className='lg:text-lg text-sm' value={"Profile"}>Profile</Tab>
                            </NavLink>

                            <NavLink to={"/patient/info"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab className='lg:text-lg text-sm' value={"Information"}>Information </Tab>
                            </NavLink>

                            <NavLink to={"/patient/appointments"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab className='lg:text-lg text-sm' value={"Appointments"}>Appointments</Tab>
                            </NavLink>

                            <NavLink to={"/patient/stats"} className="flex items-center hover:text-black hover:font-bold  transition-colors w-[25vw] lg:w-[20vw]">
                                <Tab className='lg:text-lg text-sm' value={"Stats"}>Stats</Tab>
                            </NavLink>

                        </TabsHeader>
                    </Tabs>
                </div>

                <div className='min-h-[70vh] lg:w-[80vw] w-full  ml-[0vw] lg:ml-[10vw] mt-[5vh] patient-outlet  rounded-xl'>
                    <Outlet></Outlet>
                </div>

            </div>
        </>
    )
}

export default PatientDashboard