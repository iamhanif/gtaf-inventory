import React from 'react';

const Button = ({ name, icon }) => {
    return (
        <div className='flex items-center gap-2.5'>
            <h2>{name}</h2>
            {icon}
        </div>
    );
};

export default Button;