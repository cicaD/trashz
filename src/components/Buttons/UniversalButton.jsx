import './UniversalButton.css';

const UniversalButton = ({ label, onClick }) => {

    const handleClick = (event) => {

        event.preventDefault();
        event.stopPropagation();// Prevent default behavior on touch events
        onClick();
        // Your click event logic here
        console.log('Button clicked!');


    };

    return (
        <button className="universalButton custom-button" onClick={handleClick} onTouchStart={handleClick}>
            {label}
        </button>
    );
};

export default UniversalButton;
