import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Error from './components/pages/Error'
import Hero from './components/pages/HeroPage/Hero'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Appointment from './components/pages/Appointment'
import DoctorDashboard from './components/doctors/DoctorDashboard'
import DoctorProfile from './components/doctors/DoctorProfile'
import DoctorInfo from './components/doctors/DoctorInfo'
import AdminDashboard from './components/admin/AdminDashboard'
import DoctorAppointments from './components/doctors/DoctorAppointments'
import Stats from './components/doctors/DoctorStats'
import PatientDashboard from './components/patient/PatientDashboard'
import PatientAppointments from './components/patient/PatientAppointments'
import PatientInfo from './components/patient/PatientInfo'
import PatientProfile from './components/patient/PatientProfile'
import PatientStats from './components/patient/PatientStats'
import AdminProfile from './components/admin/AdminProfile'
import AdminStats from './components/admin/AdminStats'
import AdminDoctorsList from './components/admin/AdminDoctorsList'
import AdminAllDoctorLists from './components/admin/AdminAllDoctorLists'
import VerifyEmail from './components/pages/VerifyEmail'
import DoctorClinicInfo from './components/doctors/DoctorClinicInfo'
import AppointmentBookingPage from './components/pages/AppointmentBookingPage'
import PatientCall from './components/pages/PatientCall'
import PrevReport from './components/pages/PrevReport'
import WritePatientReport from './components/pages/WritePatientReport'
import ChangePassword from './components/pages/ChangePassword'
import ForgotPassword from './components/pages/ForgotPassword'
import { useSelector } from 'react-redux'


function App() {
  const user = useSelector((state) => state.profile.user);
  
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/change-password' element={<ChangePassword/>} />
          <Route path='/forgot-password/:token' element={<ForgotPassword/>} />
          <Route path='/verifyemail' element={<VerifyEmail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment/:id' element={<Appointment />} />
          <Route path='/book/:id' element={<AppointmentBookingPage />} />


          {
            user?.role === "Doctor" && (
              <Route path='/doctor' element={<DoctorDashboard />}>
                <Route path='profile' element={<DoctorProfile />}></Route>
                <Route path='info' element={<DoctorInfo />}></Route>
                <Route path='appointments' element={<DoctorAppointments />}></Route>
                <Route path='stats' element={<Stats />}></Route>
                <Route path='clinic' element={<DoctorClinicInfo />}></Route>
              </Route>
            )
          }

          {
            user?.role === "Admin" && (
              <Route path='/admin' element={<AdminDashboard />} >
                <Route path={'profile'} element={<AdminProfile />} />
                <Route path={'stats'} element={<AdminStats />} />
                <Route path={'list'} element={<AdminDoctorsList />} />
                <Route path={'alldoctors'} element={<AdminAllDoctorLists />} />
              </Route>
            )
          }

          {
            user?.role === "Patient" &&
            (
              <Route path='/patient' element={<PatientDashboard />} >
                <Route path='appointments' element={<PatientAppointments />}></Route>
                <Route path='info' element={<PatientInfo />}></Route>
                <Route path='profile' element={<PatientProfile />}></Route>
                <Route path='stats' element={<PatientStats />}></Route>
              </Route>
            )
          }
          <Route path='report/:reportId' element={<PrevReport/>}/>
          <Route path='report/write/:reportId' element={<WritePatientReport/>}/>
          <Route path='call/:doctorname/:patientname/:type' element={<PatientCall />}></Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
