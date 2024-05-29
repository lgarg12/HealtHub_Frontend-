import React from "react";
import {
    Typography,
    Button,
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createAppointment } from "../../services/Operations/apppointmentAPI";


const AppointmentBookingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.appointment.loading );

    const offlineoptions= [
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Get a conformation mail"
        },
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Link will be shared"
        },
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Average duration 20-25 minutes"
        },
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Easier solution"
        },
    ]

    const onlineoptions = [
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Get a confirmation mail"
        },
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Address with timming will be shared"
        },
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Doctor will be avaliable at that time"
        },
        {
            icon: (
                <TiTick
                    className="h-5 w-5 text-blue-gray-900"
                />
            ),
            info: "Better for major problems"
        },

    ]

    const appointmentFee = useSelector((state) => state.appointment.appointmentsFee);
    const appointmentTimeing = useSelector((state) => state.appointment.appointmentTimeing);
    const appointmentBetween = useSelector((state) => state.appointment.appointmentBetween);
    console.log({appointmentBetween,appointmentTimeing});

    const handleAppointmentBooking = (mode) => {
        if(mode){
            dispatch(createAppointment(appointmentBetween.patientId,appointmentBetween.doctorId,'',appointmentTimeing.date,true,appointmentTimeing.startingTime,appointmentTimeing.endingTime,'',navigate));
            console.log("booked online meeting");
        } else {
            dispatch(createAppointment(appointmentBetween.patientId,appointmentBetween.doctorId,'',appointmentTimeing.date,false,appointmentTimeing.startingTime,appointmentTimeing.endingTime,'',navigate));
            console.log("booking appointment offline");
        }
    }


    return (
        <section className="py-12 px-8">
            <div className="container mx-auto">
                <Typography color="blue-gray" className="mb-4 font-bold text-lg">
                    Book Appointment
                </Typography>

                <Typography variant="h1" color="blue-gray" className="mb-4 !leading-snug lg:!text-4xl !text-2xl max-w-2xl">
                    Select the option which is more feasiable to You.
                </Typography>
                <Typography variant="lead" className="mb-10 font-normal !text-gray-500 max-w-xl">
                    You can choose from online as well as offline appointments.
                </Typography>
                <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl">
                 
                 <motion.div
                 initial={{ opacity: 0, scale: 0.3 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, power: easeIn, delay: 0.3 }}
             >
                 <Card
                     variant="gradient"
                     color="white"
                     className=" border-2 border-black"
                 >
                     <CardHeader
                         floated={false}
                         shadow={false}
                         color="transparent"
                         className="!m-0 p-6"
                     >
                         <Typography
                             variant="h2"
                             color="blue-gray"
                             className="capitalize font-bold mb-1"
                         >
                             online
                         </Typography>
                         <Typography
                             variant="small"
                             className="font-normal !text-gray-500"
                         >
                         Solve you doubts at your home
                         </Typography>
                         <Typography
                             variant="h3"
                             color="blue-gray"
                             className="mt-4 flex gap-1 !text-4xl"
                         >
                             ₹ {appointmentFee} 
                             <Typography
                                 as="span"
                                 color="blue-gray"
                                 className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
                             >
                             Session
                             </Typography>
                         </Typography>
                     </CardHeader>
                     <CardBody className="pt-0">
                         <ul className="flex flex-col gap-3 mb-6">
                             {onlineoptions.map((option, key) => (
                                 <li
                                     key={key}
                                     className="flex items-center gap-3 text-gray-700"
                                 >
                                     {option.icon}
                                     <Typography
                                         variant="small"
                                         className="font-normal text-inherit"
                                     >
                                         {option.info}
                                     </Typography>
                                 </li>
                             ))}
                         </ul>
                      
                             <button
                                className= {`w-full bg-black text-white py-2 rounded-lg ${!loading ? "cursor-pointer" : "cursor-wait"}`}
                                onClick={() => handleAppointmentBooking(true)}
                                disabled = {loading}
                             >
                                
                                 Book Now
                             </button>
                
                     </CardBody>
                 </Card>
             </motion.div>

             <motion.div
             initial={{ opacity: 0, scale: 0.3 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, power: easeIn, delay: 0.3 }}
         >
             <Card
                 variant="gradient"
                 color="white"
                 className=" border-2 border-black"
             >
                 <CardHeader
                     floated={false}
                     shadow={false}
                     color="transparent"
                     className="!m-0 p-6"
                 >
                     <Typography
                         variant="h2"
                         color="blue-gray"
                         className="capitalize font-bold mb-1"
                     >
                         offline
                     </Typography>
                     <Typography
                         variant="small"
                         className="font-normal !text-gray-500"
                     >
                        book offline appointments
                     </Typography>
                     <Typography
                         variant="h3"
                         color="blue-gray"
                         className="mt-4 flex gap-1 !text-4xl"
                     >
                         ₹ {appointmentFee} 
                         <Typography
                             as="span"
                             color="blue-gray"
                             className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
                         >
                         Session
                         </Typography>
                     </Typography>
                 </CardHeader>
                 <CardBody className="pt-0">
                     <ul className="flex flex-col gap-3 mb-6">
                         {offlineoptions.map((option, key) => (
                             <li
                                 key={key}
                                 className="flex items-center gap-3 text-gray-700"
                             >
                                 {option.icon}
                                 <Typography
                                     variant="small"
                                     className="font-normal text-inherit"
                                 >
                                     {option.info}
                                 </Typography>
                             </li>
                         ))}
                     </ul>
                  
                     <button
                     className={`w-full bg-black text-white py-2 rounded-lg ${!loading ? "cursor-pointer" : " cursor-wait"}`}
                     disabled = {loading}
                     onClick={() => handleAppointmentBooking(false)}
                    >
                     Book Now
                    </button>
            
                 </CardBody>
             </Card>
         </motion.div>
              
                </div>
                <Typography variant="small" className="mt-10 font-normal !text-gray-500">
                    *Once the booking is done it cant be refunded after 1 Hour of booking.
                </Typography>
                <Button
                    fullWidth
                    variant="gradient"
                    color="gray"
                    className="lg:w-[20vw]  my-5"
                    onClick={() => { navigate(-1) }}
                >
                    Go Back
                </Button>
            </div>
        </section>
    )
}

export default AppointmentBookingPage