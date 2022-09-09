import React from 'react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useState } from 'react';
const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(services.json)
            .then(res => res.json)
        .then (data => setServices)
    },[])
    
    return (
        <div className='h-screen text-center  my-16'>
            <h3 className=' text-secondary text-2xl '>Available Services on: {format(date, 'PP')}</h3>
            <p className='text-xl'>Please select a service.</p>
            
        </div>
    );
};

export default AvailableAppointments;