import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointmentsFee: {},
  appointmentTimeing: {},
  appointments: {},
  appointmentBetween: {},
  loading: false,
};


const appointmentSlice = createSlice({
    name: "appointment",
    initialState: initialState,
    reducers: {
      setAppointmentsFee(state, action) {
        state.appointmentsFee = action.payload;
      },
      setAppointmentTimeing(state, action) {
        state.appointmentTimeing = action.payload;
      },
      setAppointments(state,action){
        state.appointments = action.payload;
      },
      setAppointmentBetween(state,action){
        state.appointmentBetween = action.payload;
      },
      setLoading(state, action) {
        state.loading = action.payload;
      },
    },
});

export const { setAppointmentTimeing, setLoading, setAppointmentsFee, setAppointments, setAppointmentBetween } = appointmentSlice.actions;

export default appointmentSlice.reducer;