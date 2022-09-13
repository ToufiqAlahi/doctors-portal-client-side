import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from '../../firebase.init';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // console.log(user);
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
        <div className="navbar bg-base-100 lg:flex items-center lg:pb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='./' className="btn btn-ghost normal-case text-2xl  "> Doctor's Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex  ">
                <ul className="menu mx-4 menu-horizontal p-0 font-semibold ">
                    {menuItems}
                </ul>
                {/* <p className=' absolute top-0 right-0'>{user.displayName }</p> */}

            </div>
            {/* <div className='hidden lg:flex flex-col-reverse  absolute top-2 right-4'>
                <p className=' text-sm '>{user?.displayName}</p>
                <img className='rounded-full w-12' src={user?.photoURL} alt="Display Pic" />

            </div> */}

            {
                user ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="">
                            <img referrerPolicy="no-referrer"
                                className='border-4 border-secondary rounded-full'
                                src={user?.photoURL} alt=" Img" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li className='text-center my-4 text-xl text-semibold text-accent'>{user?.displayName}</li>
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={logout} to="/" ><a>Logout</a></li>
                    </ul>
                </div>
                    : null
            }
        </div>
    );
};

export default Navbar;