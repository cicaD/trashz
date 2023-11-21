
const MapButton = ({ onClick, onTouchStart, text }) => {
    return (
        <button className="custom-button" onTouchStart={onTouchStart} onClick={onClick}>
            {text}
        </button>
    );
};

export default MapButton;