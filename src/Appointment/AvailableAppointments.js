import React from 'react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';
import Slots from './Slots';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    
    return (
        <div className='h-screen text-center my-48'>
            <h3 className=' text-secondary text-2xl '>Available Services on: {format(date, 'PP')}</h3>
            <p className='text-xl'>Please select a service.</p>
            <div className='mt-24 grid grid-cols-1 lg:grid-cols-3 mg:grid-cols-2 gap-5 justify-center items-center'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='mt-24 grid grid-cols-1 lg:grid-cols-3 mg:grid-cols-2 gap-5 justify-center items-center'>
                {
                    services.map(service => <Slots
                        key={service._id}
                        service={service}
                    ></Slots>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;