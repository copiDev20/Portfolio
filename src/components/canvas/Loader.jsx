import React from 'react';
import spinnerSVG from '../../assets/loader/infinite-spinner.svg';

export const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* Adjust the size as needed using w-x and h-x classes */}
            <img src={spinnerSVG} alt="Loading..." className="w-1/3 h-12" />
        </div>
    );
};