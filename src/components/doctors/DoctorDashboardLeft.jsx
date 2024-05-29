import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { FaCaretSquareDown } from "react-icons/fa";
  import { FaCaretSquareUp } from "react-icons/fa";
  import { motion } from "framer-motion"

const DoctorDashboardLeft = ({icon,text,count,percent}) => {
    const curper = 45 - percent;
  return (
    <div >
        <Card className="mt-5 ml-2 lg:h-[25vh] lg:w-[14vw] w-[47vw]">
      <CardBody>
       <div className="mb-2 text-gray-900">{icon}</div>
        <h5 className='text-black font-bold text-lg'>{text}</h5>
        <h3 className='text-gray-700 font-bold text-lg'>{count}</h3>
      </CardBody>
      <CardFooter className="mt-[-5vh]">
      <Typography className='flex items-center gap-3'>
            {curper > 0 ? <FaCaretSquareUp color='green'/> : <FaCaretSquareDown color='red'/>}
            {curper > 0 ? curper : curper*-1 }% Last 7 Days.
        </Typography>
      </CardFooter>

    </Card>
    </div>
  ) 
}

export default DoctorDashboardLeft