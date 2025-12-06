import React from 'react';

import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = ({ className}) => {
    return (
        <Link to="/">
            <div className='flex items-end'>
                <img className={`w-40 h-8 xl:w-70 xl:h-14 block ${className}`} src={logo} alt="logo" />
                {/* <h3 className="text-3xl font-bold -ms-2.5">zapShift</h3> */}
            </div>
        </Link>
    );
};

export default Logo;