import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { gsap } from "gsap"

const HeroA = () => {

    useEffect(() => {
        const tl = gsap.timeline({ pause: true, delay: 0.1 })
        
        if (window.innerWidth < 768) {
            tl.to(".logo_name",{
                flexDirection : "column",
                delay : 0.2
            })
            tl.from(".letter_a", {
                opacity: 0,
                x : "-15vw",
                duration : 0.5
            }, "a")
            tl.from(".letter_b", {
                opacity: 0,
                x : "40vw",
                duration : 0.5
            },"a")
            tl.to(".letter_a , .letter_b", {
                x : 0,
                opacity: 1,
            },"a")
            tl.to(".letter_b", {
               marginLeft : "20vw"
            }, "a")
            tl.to(".logo_name", {
                fontSize: "12vh", 
                lineHeight: "12vh",
                height: "12vh",
                gap: "2vh",
                duration: 0.5,
                letterSpacing: "0vh",
                top: "70%", 
            })
        } 
        //desktop
        else {

            tl.from(".letter_a , .letter_b", {
                opacity: 0
            }, "a")
            tl.to(".letter_a , .letter_b", {
                marginTop: 0,
                duration: 0.7,
                opacity: 1
            }, "a")
           
            tl.to(".logo_name", {
                fontSize: "28vh",
                lineHeight: "28vh",
                height: "28vh",
                gap: "4vh",
                duration: 0.5,
                letterSpacing: "0vh",
                top: "84%",
            })
        }
    }, [])
    

    return (
        <div className='h-[91vh] relative'>
            <div className=' w-[95%] mx-[2.5%] h-[60vh] absolute flex flex-wrap lg:gap-[1.25%] gap-[0.5] font-bold lg:mt-0 mt-[10%]'>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col coll lg:h-[75%] lg:w-[19%] h-[50%] w-[40%]">
                    <div className='h-[20%] w-full flex justify-center items-end text-center  lg:text-lg  text-[1.5vh]'>Video Call Solution</div>

                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c1 flex justify-center items-center'>
                                   <img src="/src/assets/doctorCall.png" alt="" width={200} />
                        </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col coll h-[75%] w-[19%] lg:block hidden">
                    <div className='h-[20%] w-full flex justify-center items-end text-lg'>Book Apointment</div>
                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c2 flex justify-center items-center'>
                                   <img src="src/assets/book.png" alt="" width={200} />
                        </motion.div>
                </motion.div>

                <motion.div
                    style={{ clipPath: 'polygon(0 90%, 100% 90%, 100% 100%, 0 100%)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                    transition={{ duration: 0.4, delay: 1.5 }}

                    className="col lg:h-[80%] lg:mt-[5%] lg:w-[19%] bg-blue-400 cursor-pointer border-2  h-[20%] w-[20%] mt-[85%]">
                    <div className='logo_img h-full w-full flex justify-center items-center text-[13vw] font-mono font-extrabold'>HH</div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col colr h-[75%] w-[19%] lg:block hidden">
                    <div className='h-[20%] w-full flex justify-center items-end text-lg '>RealTime Apointment Status</div>
                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c3 flex justify-center items-center'>
                              <img src="src/assets/timeStat.png" alt="" width={200}/>
                        </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }} className="col colr lg:h-[75%] lg:w-[19%] h-[50%] w-[40%]">
                    <div className='h-[20%] w-full flex justify-center items-end lg:text-lg text-[1.5vh]'>Find Doctors Near Me</div>
                    <motion.div
                        style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 20%, 0 20%)' }}
                        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.3, delay: 2 }}
                        className='h-[80%] w-full bg-cover c c4 flex justify-center items-center'>
                              <img src="src/assets/docTeam.png" alt="" width={200} />
                        </motion.div>
                </motion.div>

            </div>

            <div className="logo_name flex lg:text-[8vh] text-[6vh] font-mono font-bold tracking-wider absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center  leading-[8vh] h-[8vh]overflow-hidden  ">
                <div className="letter flex ">
                    <h1 className='letter_a lg:mt-[10vh] mt-0 '>HEALTH</h1>
                </div>
                <div className="letter flex ml-4">
                    <h1 className='letter_b lg:mt-[-3vh]'>HUB</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroA