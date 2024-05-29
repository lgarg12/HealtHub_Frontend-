import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { setLoading, setAppointments } from "../../slices/appointmentSlice";
import { appointmentEndpoints } from '../apis';

const { CREATE_APPOINTMENT, REMOVE_APPOINTMENT, GET_APPOINTMENTS_BOOKED_BY_PATIENT, GET_APPOINTMENTS_BOOKED_FOR_DOCTOR } = appointmentEndpoints;

export function createAppointment(
    patientId,
    doctorId,
    description,
    date,
    mode,
    startingTime,
    endingTime,
    videoLink,
    navigate
){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",CREATE_APPOINTMENT,{
                patientId,
                doctorId,
                description,
                date,
                mode,
                startingTime,
                endingTime,
                videoLink,
            });

            console.log("CREATE_APPOINTMENT API RESPONSE............", response)
  
            if (response.status != 200) {
                throw new Error(response.data.message)
            }
    
            toast.success("Appointment Booked");
            navigate('/patient/appointments');
        } catch(error){
            console.log("CREATE_APPOINTMENT API ERROR............", error);
            toast.error("Appointment does not booked");
        }
        dispatch(setLoading(false));
    }
}

export function removeAppointment(
    appointmentId
){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("DELETE",`${REMOVE_APPOINTMENT}/${appointmentId}`);
            console.log("REMOVE_APPOINTMENT API RESPONSE............", response)
  
            if (!response.data.success) {
              throw new Error(response.data.message)
            }
        } catch(error){
            console.log("REMOVE_APPOINTMENT API ERROR............", error);
        }
        dispatch(setLoading(false));
    }
}

export function getAppointmentPatient(){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("GET",GET_APPOINTMENTS_BOOKED_BY_PATIENT);
            console.log("GET_APPOINTMENTS_BOOKED_BY_PATIENT API RESPONSE............", response)
  
            if (!response.data.success) {
              throw new Error(response.data.message)
            }
            
            dispatch(setAppointments(response.data));
        } catch(error){
            console.log("GET_APPOINTMENTS_BOOKED_BY_PATIENT API ERROR............", error);
        }
        dispatch(setLoading(false));
    }
}

export function getAppointmentDoctor(){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("GET",GET_APPOINTMENTS_BOOKED_FOR_DOCTOR);
            console.log("GET_APPOINTMENTS_BOOKED_FOR_DOCTOR API RESPONSE............", response)
  
            if (!response.data.success) {
              throw new Error(response.data.message)
            }
            
            dispatch(setAppointments(response.data));
        } catch(error){
            console.log("GET_APPOINTMENTS_BOOKED_FOR_DOCTOR API ERROR............", error);
        }
        dispatch(setLoading(false));
    }
}