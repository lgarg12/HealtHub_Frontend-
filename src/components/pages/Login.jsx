import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../services/Operations/authAPI';
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const initialMotion = {y: 40, sacle : 0, opacity : 0};
    const finalMotion = {y : 0, scale : 1,opacity : 1};
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(login(data.email,data.password,navigate));
    }
    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <motion.h1 initial={{scale : 0}} animate ={{scale : 1}} transition ={{duration : 0.5}} className=' leading-[10vh] text-[10vh] text-center lg:text-[15vh] lg:leading-[15vh] tracking-[-2vw] mr-4 font-extrabold  font-mono '>HH</motion.h1>
                        <div className="mb-2 flex justify-center">
                            <motion.h1 
                            initial={initialMotion} animate={finalMotion} transition={{duration : 0.3}} className="italic text-center text-3xl font-bold mb-2 text-black">Welcome to Health Hub</motion.h1>
                        </div>
                        <motion.h2 initial={initialMotion} animate={finalMotion} transition={{duration : 0.4}} className="text-center text-2xl leading-tight text-black">
                            Log in to your account
                        </motion.h2>
                        <motion.p initial={initialMotion} animate={finalMotion} transition={{duration : 0.5}} className="mt-2 text-center text-sm text-gray-600 ">
                            Don&apos;t have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </motion.p>
                        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mt-8">
                            <div className="space-y-5">
                                <motion.div initial={initialMotion} animate={finalMotion} transition={{duration : 0.6}} >
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Email address{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            id='email'
                                            {...register("email", { required: true })}
                                        ></input>
                                    </div>
                                </motion.div>
                                <div>
                                <motion.div initial={initialMotion} animate={finalMotion} transition={{duration : 0.7}} className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Password{' '}
                                        </label>
                                        <h1 className="text-sm font-semibold text-black hover:underline -mt-1">
                                            {' '}
                                            <Link to={"/forgot-password/token"}>Forgot password?</Link>
                                        </h1>
                                        <h1 className="text-sm font-semibold text-black hover:underline -mt-1">
                                            {' '}
                                            <Link to={"/change-password"}>Change password!</Link>
                                        </h1>
                                    </motion.div>

                                    <motion.div initial={initialMotion} animate={finalMotion} transition={{duration : 0.8}} className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            id='password'
                                            {...register("password", { required: true })}
                                        ></input>
                                    </motion.div>
                                </div>
                                <div>
                                    <motion.button initial={initialMotion} animate={finalMotion} transition={{duration : 0.9}}
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Get started <FaArrowRightLong className="ml-2" size={16} />
                                    </motion.button>
                                </div>
                            
                            </div>
                        </form>
                        <div className="mt-3 space-y-3">

                            <div>
                                    <motion.button initial={initialMotion} animate={finalMotion} transition={{duration : 0.9, delay : 0.4}}
                                    onClick={() => navigate("/")}
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 z-[-10]"
                                    >
                                        Back To Home Page <FaHome className='ml-2' size={16}/>
                                    </motion.button>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login