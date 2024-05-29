import React, { useEffect, useState } from 'react'
import { Textarea } from "@material-tailwind/react";
import logo from "../../assets/logo/default.png"
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const PrevReport = () => {

    const [image, SetImage] = useState("https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1818581771.1714327882&semt=sph");
    const [info, setInfo] = useState();

    const isSmallScreen = useMediaQuery('(max-width: 600px)')

    const {reportId} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/api/v1/report/${reportId}`)
           .then(res => {
                setInfo(res.data.report)
            })
           .catch(err => {
                console.log(err)
            })
    },[])

    console.log(info)

    return (
        <div className='bg-[#CFD8DB] h-[100vh] w-full flex justify-center items-center'>
            <div className='profile overflow-scroll bg-white h-[85vh] w-[90vw] rounded-xl shadow-2xl p-6'>
                <img src={logo} alt="" width={200} className='ml-auto mr-auto' />
                <h1 className='mt-4'>By Doctor : Dr. {info && info.doctor.firstName}  {info && info.doctor.lastName}</h1>
                <h1 className='mt-4'>Date : {info && info.createdAt.split("T")[0]}</h1>
                <h1 className='mt-4'>Subject : {info && info.subject} </h1>
                <h1 className='mt-4'>Mode : {info && info.mode ? "Online" : "Offline"}</h1>
                <div>
                    <h1 className='mt-4'>Summary : </h1>
                    <div className="w-full mt-4">
                        <Textarea label={info && info.summary}  disabled />
                    </div>
                </div>
                <div>
                    <h1 className='mt-4'>Medicines Prescribed : </h1>
                    <div className="w-full mt-4">
                        <Textarea label={info && info.prescription == null ? "none" : info && info.prescription}  disabled />
                        {info && info.prescriptionPhoto ? (
                            <img
                                src={info && info.prescriptionPhoto
                                }
                                alt="Profile Preview"
                                style={{
                                    border: '2px dashed #ccc',
                                    borderRadius: '20px',
                                    padding: '20px',
                                    width: isSmallScreen ? "90vw" :'30vw',
                                    margin: '20px auto',
                                    cursor: 'pointer',
                                  }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PrevReport