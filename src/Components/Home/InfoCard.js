import React from 'react';

const InfoCard = ({ img, cardTitle, cardTexts, bgclassName }) => {
    return (
        <div className={` card lg:card-side bg-base-100 shadow-xl text-white px-4 ${bgclassName} `}>
            <figure className='p-5'>
                <img src={img} alt="Album"></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardTexts}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;