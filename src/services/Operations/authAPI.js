import { toast } from "react-hot-toast";
import { setLoading } from "../../slices/authSlice";
import { authEndpoints } from '../apis';
import { apiConnector } from "../apiconnector";
import { setToken, setSignupData } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";

const {SIGNUP_API,LOGIN_API,SENDOTP,VERIFY_EMAIL} = authEndpoints;

export function signUp(
    firstName,
    lastName,
    email,
    password,
    role,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {

        const response = await apiConnector("POST", SIGNUP_API, {
            firstName,
            lastName,
            email,
            password,
            role,
            otp
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (response.status != 200) {
          throw new Error(response.data.message)
        }

        toast.success("Signup Successful")
        navigate("/login");
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
    }
}

export function login(
    email,
    password,
    navigate
) {
    return async(dispatch) => {
      dispatch(setLoading(true));
      try{
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        });

        if (response.status != 200) {
          throw new Error(response.data.message)
        }
        
        console.log(response);
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.user));
        localStorage.setItem('user',JSON.stringify(response.data.user));
        localStorage.setItem('token',JSON.stringify(response.data.token));

        toast.success("Login Successful");
        navigate(`/${response.data.user.role.toLowerCase()}/profile`);
      } catch(error){
        console.log("Login API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false));
    }
}

export function sendOtp(
  email,
  navigate
){
  return async (dispatch) => {
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST",SENDOTP,{email});
      
      if (response.status != 200) {
        throw new Error(response.data.message)
      }

      console.log("SENDOTP API RESPONSE............", response)
      toast.success("Email Verification");
      
      navigate('/verifyemail')

    } catch(error){
      console.log("SENDOTP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false));
  }
}

export function logout(navigate) {
  return (dispatch) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    dispatch(setToken(null));
    dispatch(setUser(null)); 

    navigate("/");
  };
}

export const verifyEmailExistence = async (email) => {
  try {
    const response = await apiConnector("GET",VERIFY_EMAIL,{email});
    return response.bool;
  } catch (error) {
    console.error('Error while verifying email:', error);
    throw new Error('Error while verifying email');
  }
};