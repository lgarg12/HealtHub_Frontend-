import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavList() {
  return (
    <>
      <Tabs value="df">
        <TabsHeader className="lg:w-[60vw] w-full">

            <NavLink to={"/doctor/profile"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[20vw] lg:w-[9vw]">
            <Tab value={"Profile"}  className=" text-[3vw] lg:text-lg">Profile</Tab>
            </NavLink>
          
            <NavLink to={"/doctor/info"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[20vw] lg:w-[20vw]">
            <Tab value={"Information"} className=" text-[3vw] lg:text-lg">Personal Information </Tab>
            </NavLink>

            <NavLink to={"/doctor/clinic"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[20vw] lg:w-[20vw]">
            <Tab value={"Clinic_Information"}  className=" text-[3vw] lg:text-lg" >Clinic Information </Tab>
            </NavLink>
         
          
            <NavLink to={"/doctor/appointments"} className="flex items-center hover:text-black hover:font-bold transition-colors w-[20vw] lg:w-[12vw]">
            <Tab value={"Appointments"}  className=" text-[3vw] lg:text-lg">Appointments</Tab>
            </NavLink>
          

          
            <NavLink to={"/doctor/stats"} className="flex items-center hover:text-black hover:font-bold  transition-colors w-[20vw] lg:w-[9vw]">
            <Tab value={"Stats"}  className=" text-[3vw] lg:text-lg">Stats</Tab>
            </NavLink>
          
        </TabsHeader>
      </Tabs>
    </>
  );
}

const DoctorNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const user = useSelector((state) => state.profile.user);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [doctorName, setDoctorName] = useState(`${user.firstName} ${user.lastName}`)

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <NavLink to={"/doctor"} className={"font-mono font-bold"}>Dr. {doctorName}</NavLink>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross1 className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default DoctorNavbar;