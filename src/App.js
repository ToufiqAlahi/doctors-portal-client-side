import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
