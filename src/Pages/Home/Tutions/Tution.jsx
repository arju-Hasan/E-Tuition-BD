import React from 'react';
import TutionCard from './TutionCard';

const Tution = () => {
    return (
        <div>
            <div className="mb-3">        
                <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
                <span 
                className='text-primary font-extrabold'>R</span>echient <span 
                className='text-primary font-extrabold'>T</span>utions <span 
                className='text-primary font-extrabold'>H</span>ere
                </h2>               
                {/* <p className='text-center text-info md:text-xl p-2'>Here's how it works for Tutors</p> */}
            </div>
            <TutionCard />
        </div>
    );
};

export default Tution;