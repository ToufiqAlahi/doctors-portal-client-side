import React from 'react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';
import Slots from './Slots';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Shared/Loading/Loading';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState({});
    const formatedDate = format(date, 'PP');
    const { data: services, isLoading , refetch} = useQuery(['available', formatedDate ], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-screen text-center my-48'>
            <h3 className=' text-secondary text-2xl '>Available Services on: {format(date, 'PP')}</h3>
            <p className='text-xl'>Please select a service.</p>
            <div className='mt-24 grid grid-cols-1 lg:grid-cols-3 mg:grid-cols-2 gap-5 justify-center items-center'>
                {
                    services?.map(service => <Service
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
                        setTreatment={setTreatment}
                    ></Slots>)
                }

            </div>
            {treatment && <BookingModal
                date={date}
                setTreatment={setTreatment}
                treatment={treatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );

};

export default AvailableAppointments;