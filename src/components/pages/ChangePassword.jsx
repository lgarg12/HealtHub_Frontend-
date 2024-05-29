import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useForm } from 'react-hook-form';


const ChangePassword = () => {
    const {register, handleSubmit} = useForm();
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/auth/change-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.username,
                    oldPassword: data.oldPassword,
                    newPassword: data.newPassword,
                    confirmNewPassword: data.confirmPassword
                })
            });
            
            if (!response.ok) {
                console.error('Error:', response.statusText);
            } else {
                console.log('Password changed successfully');
                navigate('/login');
                toast.success('Password Changed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h1 className=' leading-[10vh] text-[10vh] text-center lg:text-[15vh] lg:leading-[15vh] tracking-[-2vw] mr-4 font-extrabold  font-mono '>HH</h1>
                        <div className="mb-2 flex justify-center">
                            <h1 className="italic text-center text-3xl font-bold mb-2 text-black">Welcome to Health Hub</h1>
                        </div>
                        <h2 className="text-center text-2xl leading-tight text-black">
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 ">
                            Don&apos;t have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </p>

                        <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-5">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Email address{' '}
                                    </label>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 0.9 }}
                                        className="mt-2">
                                        <input
                                            {...register('username')}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            value={email}
                                            placeholder="Email"
                                            onChange={(e) => (setEmail(e.target.value))}
                                        ></input>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Old Password{' '}
                                    </label>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 1.1 }}
                                        className="mt-2">
                                        <input
                                            {...register('oldPassword')}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            value={oldPassword}
                                            placeholder="Old Password"
                                            onChange={(e) => (setOldPassword(e.target.value))}
                                        ></input>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            {' '}
                                            New Password{' '}
                                        </label>
                                    </div>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 1.3 }}
                                        className="mt-2">
                                        <input
                                         {...register('newPassword')}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="newPassword"
                                            placeholder="New Password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        ></input>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                >
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Confirm Password{' '}
                                    </label>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 1.5 }}
                                        className="mt-2">
                                        <input
                                            {...register('confirmPassword')}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            value={confirmNewPassword}
                                            placeholder="Confirm New Password"
                                            onChange={(e) => (setConfirmNewPassword(e.target.value))}
                                        ></input>
                                    </motion.div>
                                </motion.div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Change Password <FaArrowRightLong className="ml-2" size={16} />
                                    </button>
                                </div>

                            </div>
                        </form>
                        <div className="mt-3 space-y-3">


                            <div>
                                <button
                                    onClick={() => navigate("/")}
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 z-[-10]"
                                >
                                    Back To Home Page <FaHome className='ml-2' size={16} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default ChangePassword;
