
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import marker from '../assets/placer.svg';

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

function MarkerWithPopupN({ position, visible, color = "blue", markerIcon = myIcon, images = [], setMarkerPosition }) {
    const marker = new L.icon({
        iconUrl: require('../assets/images/marker-icon-' + color + '.png'),
        popupAnchor: [-0, -0],
        iconSize: [32, 45],
    });


    const map = useMapEvents({
        click(e) {
            // map.locate();
            setMarkerPosition(e.latlng);
            console.log('Marker location' + e.latlng);
        },
    })

    return visible && (
        <Marker position={position} icon={marker}>
            <Popup>
                <p className="popup">Position: {position.lat}  {position.lng}</p>
                <img className="popup_img" width="80px" height="80px" src={""} alt="Sacré-Coeur" />

            </Popup>
        </Marker>
    )
}

export default MarkerWithPopupN;