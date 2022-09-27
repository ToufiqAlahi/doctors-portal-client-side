import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Appointment from './Appointment/Appointment';
import SignUp from './Components/Login/SignUp';
import RequireAuth from './Components/Login/RequireAuth';
import Loading from './Components/Shared/Loading/Loading';
import { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard';
import MyAppointments from './Components/MyAppointments';
import MyReview from './Components/MyReview';
import MyHistory from './Components/MyHistory';
import Users from './Components/Users';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {
        loading
          ? (<Loading></Loading>)

          : (<div className='mx-auto'>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<RequireAuth><About /></RequireAuth>} />
              <Route path="Appointment" element={<RequireAuth> <Appointment /> </RequireAuth>} />
              <Route path="dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>} >
                <Route index element={ <MyAppointments></MyAppointments> }></Route>
                <Route path='review' element={ <MyReview></MyReview> }></Route>
                <Route path='history' element={ <MyHistory></MyHistory> }></Route>
                <Route path='users' element={ <Users></Users> }></Route>
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
            <ToastContainer />
          </div>)
      }
    </>
  );
}
export default App;
