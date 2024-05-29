import React from 'react'
import Chart from 'react-apexcharts';
import { useMediaQuery } from 'react-responsive';

const PatientStats = () => {
  const appointment_count = {
    series: [4, 5],
    options: {
      labels: ["Online", "Offline"],
      colors: ['#FF4560',  '#008FFB' ],
    },
  }
  const appointment_frequency = ({
    options: {
      chart: {
        id: "Appointment-chart"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      colors: ['#FF4560',  '#008FFB' ],
    },
    series: [
      {
        name: "Offline",
        data: [1,1,0,0,0,0,0,0,,1,1,1]
      },
      {
        name: "Online",
        data: [0,0,0,0,1,1,1,0,1,0,0,0]
      },
    ]
  })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const width = isMobile ? 325 : 500;
  return (
    <div className='p-5 lg:flex flex-col lg:gap-3 lg:flex-row rounded-xl'>

      <div className=' border-2 border-black rounded-2xl lg:h-[65vh] lg:w-[50%] h-[33vh] w-[100%] flex justify-center items-center flex-col gap-4 lg:mb-0 mb-2  bg-white '>
        <h1 className='font-mono text-xl'>Appointment Frequency</h1>
        <Chart options={appointment_frequency.options} series={appointment_frequency.series} type="line" width={width} />
      </div>

      <div className=' border-2 border-black rounded-2xl lg:h-[65vh] lg:w-[50%] h-[33vh] w-[100%] flex justify-center items-center flex-col gap-4  bg-white '>
        <h1 className='font-mono text-xl'>Total Appointments</h1>
        <Chart options={appointment_count.options} series={appointment_count.series} type="pie" width={width}/>
      </div>
    </div>
  )
}

export default PatientStats