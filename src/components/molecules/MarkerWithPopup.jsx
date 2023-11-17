
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const getMarkerIcon = (color) => {
    const markerIcon = require('../../assets/images/marker-icon-' + color + '.png');
    return L.icon({
        iconUrl: markerIcon,
        iconSize: [24, 41],
        iconAnchor: [0, 44],
        popupAnchor: [12, -40],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });
}

function MarkerWithPopup({ position, visible, markerIconColor, markerPositionCallBack, popupImages = [] }) {
    const markerIcon = getMarkerIcon(markerIconColor);
    const picuresURL = "https://picsum.photos/id/";

    const map = useMapEvents({
        click(e) {
            // map.locate();
            markerPositionCallBack(e.latlng);
            console.log('Marker location' + e.latlng);
        },
    })

    return visible && (
        <Marker position={position} icon={markerIcon}>
            <Popup>
                <p className="popup">Position: {position.lat}  {position.lng}</p>
                {popupImages.map((item) => (
                    <img className="popup_img" width="80px" height="80px" src={picuresURL + item + '/200/300'} alt="No image" />
                ))}
            </Popup>
        </Marker>
    )
}

export default MarkerWithPopup;