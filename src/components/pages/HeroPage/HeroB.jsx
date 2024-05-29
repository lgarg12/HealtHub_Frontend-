import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const HeroB = () => {
  const doctorFields = [
    {
      title: "General Medicine",
      description: "Diagnosing and treating a wide range of medical conditions.",
      link: "src/assets/medicines.png",

    },
    {
      title: "Specialized Medicine",
      description: "Focusing on specific areas like cardiology, neurology, gastroenterology, or dermatology.",
      link: "src/assets/smedicine.png",
    },

    {
      title: "Pediatrics",
      description: "Specializing in the healthcare of infants, children, and adolescents.",
      link: "src/assets/childHealth.png",
    },

    {
      title: "Obstetrics and Gynecology",
      description: "Providing comprehensive healthcare services for women, including prenatal care, childbirth, and gynecological concerns.",
      link: "src/assets/womenHealth.png",
    }
  ];

  const problems = [
    { 
      title: 'Depression or anxiety',
      link : "src/assets/depression.png"
     },

    { 
      title: 'Period doubts or Pregnancy',
      link : "src/assets/pregnancy.png"
     },

    { 
      title: 'Cold, cough or fever',
      link : "src/assets/cough.png",
     },

    { 
      title: 'Skin problems',
      link : "src/assets/skinProb.png"
     },

  ];

  const navigate = useNavigate();


  return (
    <div className='my-[15vh]'>

      <div className='lg:h-[60vh] h-[150vh] my-[10vh] w-full px-[5vw] '>

        <div className='h-[20%] text-xl lg:text-3xl font-mono leading-0 lg:leading-[5vh]'>
          <h1>Book for in-clinic consultation.</h1>
          <h2>Top, High-skilled doctors.</h2>
        </div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.7, power: "easeIn" }}
          className='lg:h-[76%] h-[90%] lg:mt-[1%] mt-[-15vh] flex flex-wrap gap-5 justify-evenly'>

          {doctorFields.map((doc, index) => (
            <div key={index} className='w-full sm:w-[45%] md:w-[30%] lg:w-[20%] bg-[#fde047] rounded-xl cursor-pointer' onClick={() => navigate(`/appointment/${doc.title}`)}>
              <div className="h-[70%] w-full flex justify-center items-center">
                <img src={doc.link} alt="" width={200} />
              </div>

              <div className="h-[30%] flex flex-col pt-1 border-t-2 border-black px-2 bg-white">
                <h4 className='text-lg font-bold'>{doc.title}</h4>
                <h5 className='text-sm text-gray-500'>{doc.description}</h5>
              </div>
            </div>
          ))}

        </motion.div>
      </div>


      <div className='lg:h-[50vh] h-[150vh] lg:my-[5vh] mb-[-15vh] w-full px-[5vw]  flex-col  justify-center items-center '>

        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.7, power: "easeIn" }}
          className='lg:h-[76%] h-[25%] w-full mt-[1%] flex flex-wrap lg:gap-5  lg:justify-evenly '>

          {problems.map((problem, index) => (
            <div key={index} className='h-[100%] w-full lg:w-[20%] rounded-xl cursor-pointer mb-[-6vh]'>
              <div className="h-[60%] lg:h-[75%] w-full flex justify-center items-center bg-[#080F0F] rounded-t-xl shadow-2xl">
                <img src={problem.link} alt="" width={200} />
              </div>
              <div className="h-[15%] rounded-b-xl flex flex-col justify-center items-center pt-1 border-2 border-black px-2 bg-white">
                <h4 className='lg:text-lg text-md '>{problem.title}</h4>
              </div>
            </div>
          ))}

        </motion.div>

        <div className='lg:h-[20%] h-[5%] mt-[90vh] text-right text-md lg:text-3xl text-lg font-mono leading-0 lg:leading-[5.5vh] lg:mt-[6vh] flex flex-col items-end '>
          <h2>Consult top doctors online.</h2>
          <h1>Private online consultations with verified doctors.</h1>
        </div>

      </div>

    </div>
  )
}

export default HeroB