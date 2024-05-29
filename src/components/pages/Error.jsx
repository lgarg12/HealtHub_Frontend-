import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center h-[100vh] w-full'>
            <div className="flex items-center justify-center px-2 md:px-0 h-[60vh]">
                <div className=' p-[2vh]'>
                    <p className="text-[8vw] lg:text-[2vw] font-semibold text-black">404 error</p>
                    <h1 className="mt-3 text-[6vw] lg:text-[3vw] font-semibold text-gray-800 md:text-3xl">
                        We can&apos;t find that page
                    </h1>
                    <p className="mt-4 text-[6vw] lg:text-[2vw] text-gray-500">
                        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                    </p>
                    <div className="mt-6 flex items-center space-x-3">
                        <button
                            onClick={() => navigate(-1)}
                            type="button"
                            className="text-[5vw] lg:text-[1.5vw] inline-flex items-center rounded-md border border-black px-5 py-4 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <FaArrowRightLong size={16} className="mr-2" />
                            Go back
                        </button>
                        <button
                            type="button"
                            className="text-[5vw] lg:text-[1.5vw] rounded-md bg-black px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error