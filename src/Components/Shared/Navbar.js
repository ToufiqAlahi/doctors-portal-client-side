import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from '../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);
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

            {
                user &&
                <li className={`${("/dashboard" === location.pathname && "bg-accent rounded-xl text-white")}`}>
                    <Link className=" link-hover" to="/dashboard">Dashboard</Link>
                </li>
            }

            <li className={` mr-8 ${("/login" === location.pathname && "link-hover bg-accent rounded-xl text-white")}`}>
                {
                    user
                        ? <label htmlFor="sign-out-Modal" to="/" className="link-hover capitalize"> Sign Out </label>
                        : <Link className=" link-hover" to="/login">Login</Link>
                }
            </li>

            {
                user && <div className="hidden md:block dropdown dropdown-end md:absolute  md:right-10 top-2">
                    <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                        <div className="">
                            <img referrerPolicy="no-referrer"
                                className=' border-4 border-secondary rounded-full'
                                src={user?.photoURL} alt=" Img" />
                        </div>
                    </label>
                    <ul tabIndex={1} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li className='text-center my-4 text-xl text-semibold text-accent'>{user?.displayName}</li>
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li ><label htmlFor="sign-out-Modal" to="/" className="link-hover capitalize"> Sign Out </label></li>
                    </ul>
                </div>
            }
        </>

    return (
        <div className="navbar bg-base-100 lg:flex items-center lg:pb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-52"> {menuItems} </ul>
                </div>
                <a href='./' className="btn btn-ghost normal-case text-2xl  "> Doctor's Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex  ">
                <ul className="menu mx-4 menu-horizontal p-0 font-semibold "> {menuItems} </ul>
                <div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-full rounded-full">
                            <img referrerPolicy="no-referrer"
                                className=' border-4 border-secondary rounded-full'
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
                        <li ><label htmlFor="sign-out-Modal" to="/" className="link-hover capitalize"> Sign Out </label></li>
                    </ul>
                </div>
                
            </div>

            {/*/ Sign out MODAL  */}
            <input type="checkbox" id="sign-out-Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className="font-bold text-lg text-secondary">Confirm LogOut</h2>
                    <p className="font-bold text-sm mt-6">Are you sure you want to LogOut?</p>
                    <div className="modal-action">
                        <label onClick={logout} htmlFor="sign-out-Modal" className="btn">Sign out</label>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="sign-out-Modal" className="btn btn-sm font-extrabold text-xl text-white btn-circle hover:bg-secondary absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-side-bar" className="btn btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;