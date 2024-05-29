import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {motion} from "framer-motion"

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const About = () => {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=' min-h-[100vh] w-[100vw]'>
      <Navbar></Navbar>
      <motion.div initial={{scale : 0.4, opacity : 0}} animate={{scale : 1, opacity : 1}} transition={{duration : 0.3, delay : 0.5}} className='min-h-[80vh] w-full p-[5vh]'>
        <Accordion open={alwaysOpen}>
          <AccordionHeader className=' font-mono' onClick={handleAlwaysOpen}>Who Are We?</AccordionHeader>
          <AccordionBody className=" italic flex flex-col gap-3">
            <p>
              Health Hub is a comprehensive healthcare management platform designed to streamline and enhance the healthcare experience for both doctors and patients. With its user-friendly interface and robust features, Health Hub facilitates efficient scheduling, communication, and coordination between healthcare providers and patients.
            </p>
            <p>
              For doctors, Health Hub offers advanced tools for managing appointments, timetables, and patient records. Doctors can easily set and adjust their schedules, ensuring optimal utilization of their time and resources. The platform provides real-time updates and notifications, enabling doctors to stay informed about appointment status changes, emergencies, and patient needs.
            </p>
            <p>
              Patients benefit from Health Hub's intuitive interface, which allows them to conveniently book appointments, track their position in the queue, and receive timely updates about their appointments. The virtual waiting room feature reduces physical congestion and wait times, enhancing the overall patient experience. Additionally, Health Hub prioritizes patient privacy and security, ensuring that personal health information is handled with the utmost confidentiality.
            </p>
            <p>
              With its emphasis on accessibility, efficiency, and communication, Health Hub revolutionizes healthcare delivery by empowering both doctors and patients to connect and collaborate seamlessly. Whether scheduling appointments, managing medical records, or receiving timely updates, Health Hub ensures a smooth and personalized healthcare experience for all users.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader className=' font-mono' onClick={() => handleOpen(1)}>
            Our Privacy Policy.
          </AccordionHeader>
          <AccordionBody className=" italic">
            At Health Hub, we take your privacy seriously and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our platform. We collect only the information necessary to provide you with our services and improve your experience. This may include personal information such as your name, contact details, medical history, and appointment records. We use industry-standard security measures to safeguard your data and prevent unauthorized access or disclosure. We do not sell or share your personal information with third parties without your consent, except as required by law or to fulfill our contractual obligations. By using Health Hub, you consent to the collection and use of your information as described in our Privacy Policy.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader className=' font-mono' onClick={() => handleOpen(2)}>
            Our Terms of Service.
          </AccordionHeader>
          <AccordionBody className=" italic">
            Welcome to Health Hub! Our Terms of Service govern your use of our platform and outline the rights and responsibilities of both users and Health Hub. By accessing or using our platform, you agree to comply with these terms and conditions. Our Terms of Service cover various aspects, including user conduct, account registration, intellectual property rights, and limitations of liability. We strive to provide accurate and reliable information, but we cannot guarantee the completeness, accuracy, or reliability of the content on our platform. You agree to use Health Hub at your own risk and acknowledge that we are not liable for any damages or losses arising from your use of our services. We reserve the right to update or modify these terms from time to time, and it is your responsibility to review them periodically. Your continued use of Health Hub constitutes acceptance of any changes to the Terms of Service.
          </AccordionBody>
        </Accordion>
      </motion.div>
      <Footer></Footer>
    </div>
  )
}

export default About