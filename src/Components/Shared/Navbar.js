import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from '../../firebase.init';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const location = useLocation();
    const menuItems =
        <>
            <li className={`${("/Home" === location.pathname || "/" === location.pathname ? "bg-accent rounded-xl text-white" : "")}`}><Link className=" link-hover" to="/Home">Home</Link></li>
            <li className={`${("/About" === location.pathname && "bg-accent rounded-xl text-white")}`}>  <Link className=" link-hover" to="/About">About</Link></li>
            <li className={`${("/Appointment" === location.pathname && "bg-accent rounded-xl text-white")}`}><Link className=" link-hover" to="/Appointment">Appointment</Link></li>
            <li className={`${("/Reviews" === location.pathname && "bg-accent rounded-xl text-white")}`}><Link className=" link-hover" to="/Reviews">Reviews</Link></li>
            <li className={`${("/Contact" === location.pathname && "bg-accent rounded-xl text-white")}`}><Link className=" link-hover" to="/Contact">Contact Us</Link></li>

            <li
                className={`${("/login" === location.pathname && "link-hover bg-accent rounded-xl text-white")}`}
            >
                {
                    user ? <Link onClick={logout} to="/" className=" link-hover capitalize">Sign Out</Link>
                        : <Link className=" link-hover" to="/login">Login</Link>
                }
            </li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='./' className="btn btn-ghost normal-case text-2xl mx-auto lg:mx-5"> Doctor's Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu mx-1 menu-horizontal p-0 font-semibold">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;