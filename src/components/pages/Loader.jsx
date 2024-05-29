import gsap from 'gsap';
import React, { useEffect } from 'react'
import { useRef } from 'react'

const Loader = (props) => {
    const ref = useRef(null);
    // console.log(props)

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 })
        if (window.innerWidth < 768) {
            tl.from(".logo", {
                letterSpacing: "0vh",
                duration: 0.75,
                ease: "power4.out",
            })
                .to(".logo", {
                    letterSpacing: "-7.5vh",
                    duration: 1,
                    ease: "power4.in",
                })
                .to(".logo", {
                    letterSpacing: "0vh",
                    duration: 0.75,
                    ease: "power4.out",
                });
        }
        else {
            tl.from(".logo", {
                letterSpacing: "0vh",
                duration: 0.75,
                ease: "power4.out",
            })
                .to(".logo", {
                    letterSpacing: "-10vh",
                    duration: 1,
                    ease: "power4.in",
                })
                .to(".logo", {
                    letterSpacing: "0vh",
                    duration: 0.75,
                    ease: "power4.out",
                });
        }
    }, [])

    return (
        <div ref={ref} className="flex justify-center items-center h-full w-full">
            <div className=' flex flex-col justify-center items-center'>

                <h1 className="logo lg:leading-[35vh] leading-[30vh] text-[25vh] lg:text-[35vh] font-extrabold  font-mono mb-[-3vh] flex justify-center items-center">HH</h1>

                <h1 className="font-mono font-normal text-[5vw] tracking-tighter">Health Hub</h1>
                <h1 className=" italic text-[5vw] text-xl tracking-wide">{props.ans}</h1>
            </div>
        </div>
    )
}

export default Loader