import React from 'react';

const LinkButton = ({ label, onClick }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        onClick();
        // Your script execution logic here
        console.log('Button clicked! Script executed.');
        event.stopPropagation();
    };

    return (
        <a href="#" onClick={handleClick}>
            {label}
        </a>
    );
};

export default LinkButton;