import './UniversalButton.css';

const UniversalButton = ({ label, onClick }) => {

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default behavior on touch events
        onClick();
        // Your click event logic here
        console.log('Button clicked!');
        event.stopPropagation();

    };

    return (
        <button className="universalButton" onClick={handleClick} onTouchStart={handleClick}>
            {label}
        </button>
    );
};

export default UniversalButton;
