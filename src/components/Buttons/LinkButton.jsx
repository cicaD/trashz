import React from 'react';

const LinkButton = ({ label, onClick }) => {
    const handleClick = () => {
        onClick();
        // Your script execution logic here
        console.log('Button clicked! Script executed.');
    };

    return (
        <a href="#" onClick={handleClick}>
            {label}
        </a>
    );
};

export default LinkButton;