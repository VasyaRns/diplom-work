import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <svg className="visually-hidden" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                     viewBox="0 0 48 48">
                    <path fill="currentColor"
                          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                        <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                                          values="0 12 12;360 12 12"/>
                    </path>
                </svg>
            </div>
        </div>
    );
};

export default Spinner;
