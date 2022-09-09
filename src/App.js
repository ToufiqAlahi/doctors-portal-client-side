import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
// import Footer from './Components/Shared/Footer';
import Appointment from './Appointment/Appointment';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Appointment" element={<Appointment />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
