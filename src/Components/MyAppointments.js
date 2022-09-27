import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {

                method: 'GET',

                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res: ', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })  
                .then(data => {
                    setAppointments(data)
                });
        }
    }, [user]);
    // console.log(appointments);
    let index = 1;

    return (
        <div>
            <h1 className="">My Appointments: {appointments.length} </h1>

            <div className="overflow-x-auto pt-10 px-4">
                <table className="table w-full  ">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>NAME</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>SERVICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appointment =>

                                <tr key={index}>
                                    <th> {index++} </th>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                    <td>{appointment.treatment}</td>

                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointments;