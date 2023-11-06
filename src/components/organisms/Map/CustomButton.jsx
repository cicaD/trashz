import React from 'react';

const MapButton = ({ onClick, text }) => {
    return (
        <button className="custom-button" onClick={onClick}>
            {text}
        </button>
    );
};



export default MapButton;