import {combineReducers} from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice';
import appointmentReducer from '../slices/appointmentSlice';

const rootReducer  = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    appointment: appointmentReducer,
})

export default rootReducer;