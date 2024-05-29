import React, { useRef, useState } from 'react'
import Chart from "react-apexcharts";

const Stats = () => {
  const [selectedOption, setSelectedOption] = useState('all_info');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const patients = ({
    options: {
      chart: {
        id: "Patient-chart"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    },
    series: [
      {
        name: "Patients",
        data: [30, 40, 50, 30, 40, 60, 60, 60, 80, 90, 30, 30]
      }
    ]
  })

  const income = ({
    options: {
      chart: {
        id: "Income-chart"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    },
    series: [
      {
        data: [12000, 16000, 20000, 12000, 16000, 24000, 24000, 24000, 32000, 36000, 12000, 12000]
      }
    ]
  })

  const offline_vs_online = ({
    options: {
      chart: {
        id: "Patient-chart"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    },
    series: [
      {
        name : "Offline",
        data: [12,10,8,6,4,2,4,6,8,10]
      },
      {
        name : "Online",
        data: [2,4,6,8,10,12,14,16,18,20]
      }
    ]
  })



  return (
    <div className='h-full w-[100%] overflow-hidden'>
      <h1 className='text-3xl p-5 font-mono h-[10vh] bg-gray-900 text-white'>Your Statics</h1>
      <div className='h-[90%] w-full  p-4 flex-col gap-4'>
        <div className="w-72 mb-[5vh] font-mono border-b-2 border-l-2 border-black ">
          <select
            label="Select Information"
            value={selectedOption}
            onChange={handleOptionChange}
            className='p-3'
          >
            <option value="all_info">Select Type</option>
            <option value="patients">Patients</option>
            <option value="income">Income</option>
            <option value="offline_vs_online">Offline vs Online Patients</option>
          </select>
        </div>

        {selectedOption === 'patients' && <Chart options={patients.options} series={patients.series} type="bar" height={400} />}

        {selectedOption === 'income' && <Chart options={income.options} series={income.series} type="area" height={400} />}

        {selectedOption === 'offline_vs_online' && <Chart options={offline_vs_online.options} series={offline_vs_online.series} type="area" height={400} />}

      </div>

    </div>
  )
}

export default Stats