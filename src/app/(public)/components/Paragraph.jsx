import React from 'react';

const Paragraph = ({children}) => {
    return (
        <p className='text-base lg:text-sm whitespace-nowrap'>
            {children}
        </p>
    );
};

export default Paragraph;