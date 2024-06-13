import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="inline-block w-12 h-12">
                <svg className="w-full h-full text-indigo-600 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" fill="white" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Spinner;
