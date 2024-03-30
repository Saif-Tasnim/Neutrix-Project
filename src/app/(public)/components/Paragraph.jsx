import React from 'react';

const Paragraph = ({children}) => {
    return (
        <p className='text-sm'>
            {children}
        </p>
    );
};

export default Paragraph;