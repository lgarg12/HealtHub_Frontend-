import { toast } from "react-hot-toast";
import { InformationEndpoints } from '../apis';
import { apiConnector } from "../apiconnector";


const { SAVE_DOCTOR_INFORMATION, SAVE_PATIENT_INFORMATION, SAVE_CLINIC_INFORMATION, GET_DOCTOR_INFORMATION, GET_PATIENT_INFORMATION } = InformationEndpoints;

export function saveDoctorInformation(
    userId,
    data
  ) {
    return async (dispatch) => {
      try {

        const response = await apiConnector("POST", SAVE_DOCTOR_INFORMATION, {
            userId: userId,
            phoneNo: data.phoneNo,
            email: data.email,
            dob: data.dob,
            gender: data.gender,
            bloodGroup: data.bloodGroup,
            pincode: data.pincode,
            building: data.building,
            area: data.area,
            landmark: data.landmark,
            townCity: data.townCity,
            state: data.state,
            education: data.education,
            experience: data.experience,
            specialization: data.specialization,
            medicalField: data.medicalField
        });
  
        console.log("saving API RESPONSE............", response)
  
        if (response.status != 200) {
          throw new Error(response.data.message)
        }

        toast.success("Information Saved");
      } catch (error) {
        console.log("saving API ERROR............", error)
        toast.error("Does not save")
      }
    }
}

export function savePatientInformation(
    userId,
    data
  ) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", SAVE_PATIENT_INFORMATION, {
          userId: userId,
          phoneNo: data.phoneNo,
          dob: data.dob,
          gender: data.gender,
          bloodGroup: data.bloodGroup,
          pincode: data.pincode,
          building: data.building,
          area: data.area,
          landmark: data.landmark,
          townCity: data.townCity,
          state: data.state,
      });

      console.log("saving API RESPONSE............", response)

      if (response.status != 200) {
        throw new Error(response.data.message)
      }
      toast.success("Information Saved");
    } catch (error) {
      console.log("saving API ERROR............", error)
      toast.error("Does not save")
    }
  }
}

export function saveClinicInformation(
  userId,
  data
){
  return async (dispatch) => {
    try{
      const response = await apiConnector("POST",SAVE_CLINIC_INFORMATION,{
        userId: userId,
        name: data.name,
        fee: data.fee,
        openingTime: data.openingTime,
        closingTime: data.closingTime,
        pincode: data.pincode,
        building: data.building,
        area: data.area,
        landmark: data.landmark,
        townCity: data.townCity,
        state: data.state
      });
      
      console.log("saving API RESPONSE............", response)

      if (response.status != 200) {
        throw new Error(response.data.message)
      }

      toast.success("Clinic Information Saved");
    } catch(error){
      console.log("saving API ERROR............", error);
      toast.error("Does not save");
    }
  }
}