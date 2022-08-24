import React from 'react';

const InfoCard = ({img, cardTitle, cardTexts, bgClass}) => {
    return (
        <div class={` card lg:card-side bg-base-100 shadow-xl text-white px-4 ${bgClass} `}>
            <figure className='p-5'>
                <img src={img} alt="Album"></img>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardTexts}</p>
                {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;