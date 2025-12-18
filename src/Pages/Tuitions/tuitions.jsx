import React from 'react';
import TutionCard from '../Home/Tutions/TutionCard';

const tuitions = () => {
    return (
        <div>
            <div className="mb-3">        
                <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
                <span 
                className='text-primary font-extrabold'>A</span>ll <span 
                className='text-primary font-extrabold'>T</span>utions <span 
                className='text-primary font-extrabold'>H</span>ere
                </h2>
                              
              
            </div>
            <TutionCard />
        </div>
    );
};

export default tuitions;