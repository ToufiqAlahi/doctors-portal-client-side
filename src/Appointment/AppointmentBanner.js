import React from 'react';
import chair from '../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div>
            <div className="mb-44 hero max-h-screen items-center lg:bg-banner-background">
                <div className="lg:h-[calc(100vh-100px)] px-3 lg:px-0  flex justify-center items-center gap-24 flex-col lg:flex-row-reverse ">
                    <img src={chair} className="lg:max-w-xl lg:ml-40 max-w-full  rounded-lg shadow-2xl" alt='chair' />
                    <div className=''>
                        <DayPicker
                            className='scale-110 lg:scale-100 text-center lg:min-h-[345px] lg:min-w-[345px] bg-opacity-25 bg-[#c3d2dc] shadow-2xl p-8 border-gray-800  rounded-2xl'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                       
                       
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentBanner;