import React, { useEffect, useState } from "react";
import { Card, Alert, Typography, Input, Checkbox, Button, } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveDoctorInformation } from "../../services/Operations/personal_InformationAPI";
import axios from "axios";


const DoctorInfo = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const [data,setData] = useState();
  const [isDataFetched, setIsDataFetched] = useState(false);

  const onClickSubmit = (data) => {
    dispatch(saveDoctorInformation(user.id, data));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/personal-info/doctor/${user.id}`);
        setData(response.data);
        localStorage.setItem('user',JSON.stringify(response.data.user));
        setValue("phoneNo", response.data.user.phoneNo);
        setValue("dob", response.data.user.dob);
        setValue("gender", response.data.user.gender);
        setValue("bloodGroup", response.data.user.bloodGroup);
        setValue("pincode", response.data.address.pincode);
        setValue("building", response.data.address.building);
        setValue("area", response.data.address.area);
        setValue("landmark", response.data.address.landmark);
        setValue("townCity", response.data.address.townCity);
        setValue("state", response.data.address.state);
        setValue("education", response.data.doctor.education);
        setValue("experience", response.data.doctor.experience);
        setValue("specialization", response.data.doctor.specialization);
        setValue("medicalField", response.data.doctor.medicalField);
        setIsDataFetched(true);
      } catch (error) {
        setIsDataFetched(false);
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  },[user,setValue])

  return (
    <div
      className='h-[70vh] w-full'>
      <h1 className='text-3xl p-5 font-mono h-[10vh] bg-gray-900 text-white '>Your Information</h1>

      <div
        className="h-[67vh] w-full flex justify-center lg:px-[1vw] px-[3vw] ">
        <form className="mt-8 mb-2 w-full sm:w-96 overflow-y-scroll lg:pb-[3vh] pb-[10vh] docInputForm flex-grow px-2 docInfo" onSubmit={handleSubmit(onClickSubmit)}>
          <div className="mb-1 flex flex-col gap-4">
          {
              !isDataFetched ? <Alert color="amber" icon={<Icon />}>Please fill your Personal Information</Alert> : ""
            }

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone Number
            </Typography>
            <Input
              type="tel"
              size="lg"
              placeholder="9999888777"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("phoneNo", { required: true })}
            />
            {errors.phoneNo && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Profile Photo
            </Typography>
            <Input
              type="file"
              size="lg"
              {...register("profilePhoto")}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              DOB
            </Typography>
            <Input
              type="date"
              size="lg"
              {...register("dob", { required: true })}
            />
            {errors.dob && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Gender
            </Typography>
            <select
              name="gender"
              id="gender"
              {...register("gender", { required: true })}
              size="lg"
              className="border border-gray-400 focus:!border-t-gray-900 p-3 rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Blood Group
            </Typography>
            <select
              name="bloodGroup"
              id="bloodGroup"
              {...register("bloodGroup", { required: true })}
              size="lg"
              className="border border-gray-400 focus:!border-t-gray-900 p-3 rounded-lg"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {errors.bloodGroup && <span>This field is required</span>}


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Pincode
            </Typography>
            <Input
              type="number"
              size="lg"
              placeholder="Pincode"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("pincode", { required: true })}
            />
            {errors.pincode && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Building/House no./Flat/Other
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="building"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("building", { required: true })}
            />
            {errors.building && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Area
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="area"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("area", { required: true })}
            />
            {errors.area && <span>This field is required</span>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Landmark
            </Typography>
            <Input
              type='text'
              size="lg"
              placeholder="landmark"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("landmark")}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Town City
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="towncity"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("townCity")}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              State
            </Typography>
            <Input
              type='text'
              size="lg"
              placeholder="state"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("state")}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Education
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Education"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("education")}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Degree
            </Typography>
            <Input
              type="file"
              size="lg"
              {...register("degree")}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Experience
            </Typography>
            <Input
              type="number"
              size="lg"
              placeholder="Experience in Years"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("experience")}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Speciality
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Specialty In Field"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("specialization")}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Medical Field
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Medical Fields"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("medicalField")}
            />

          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </div >

    </div >
  )
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export default DoctorInfo