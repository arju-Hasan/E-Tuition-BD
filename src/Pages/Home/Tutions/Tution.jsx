import React from 'react';
import TutionCard from './TutionCard';
import { NavLink } from 'react-router';

const Tution = () => {
    return (
        <div>
            <div className="mb-0">        
                <h2 className='text-2xl md:text-4xl font-bold text-center pt-8 underline underline-offset-2 decoration-primary decoration-4 text-secondary'>
                <span 
                className='text-primary font-extrabold'>R</span>echient <span 
                className='text-primary font-extrabold'>T</span>utions <span 
                className='text-primary font-extrabold'>H</span>ere
                </h2>
                <div className='grid grid-cols-3 p-0 items-center'>
                    <p className='order-1'></p>
                    <p className='text-center text-info md:text-xl p-2 order-2'>Here are few of the Verified Students</p>
                    <NavLink to='/tuitions' className='order-3 pr-4 text-end btn-c btn-c-sm mx-auto '>View All</NavLink>
                </div>               
                {/* <p className='text-center text-info md:text-xl p-2'>Here's how it works for Tutors</p> */}
            </div>
            <TutionCard />
        </div>
    );
};

export default Tution;