import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-side-bar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className=' text-2xl font-bold text-secondary '>Welcome to your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-side-bar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li> <Link to={"/dashboard"}>My Appointments</Link> </li>
                    <li> <Link to={"/dashboard/review"}> My Reviews </Link> </li>
                    <li> <Link to={"/dashboard/history"}> My History </Link> </li>
                    <li> <Link to={"/dashboard/users"}> All Users </Link> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;