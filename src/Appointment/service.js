import React from 'react';

const Service = ({ service }) => {

    const { name, slots } = service;
    
    return (
        <div className= "  border-gray-100 border lg:max-w-lg mx-auto card w-96 bg-base-100 shadow-xl">
            <div className="card-body  ">
                <h2 className="text-xl font-semibold text-secondary text-center">{name}</h2>
                
                
            </div>
        </div>
    );
};

export default Service;