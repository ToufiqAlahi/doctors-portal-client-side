import React, { useState } from 'react';
import chair from '../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div className="   hero lg:min-h-screen items-center max-w-screen lg:bg-banner-background ">
                <div className="hero-content max-w-screen flex-col lg:flex-row-reverse justify-around ">
                    <img src={chair} className="lg:max-w-xl lg:ml-40 max-w-full  rounded-lg shadow-2xl" alt='chair' />
                    <div className=''>
                        <DayPicker
                            className=' shadow-2xl p-3 border-gray-800  rounded-xl'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                            
                       <p>Date selected: { format(date, 'PP' ) }</p>
                       
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentBanner;