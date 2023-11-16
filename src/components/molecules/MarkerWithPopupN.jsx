
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
    const previewMarkersData = [
        {
            lang: "47.50677284554991",
            long: "19.118614196777347",
            images: [0, 1, 2]
        },
        {
            lang: "47.49019440742913",
            long: "19.083938598632816",
            images: [3, 6]
        },
        {
            lang: "47.69019440742913",
            long: "19.183938598632816",
            images: [7, 8, 9]
        },
    ];


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
                <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkersData[0].images[0] + '/200/300'} alt={picuresURL + previewMarkersData[0].images[0] + '/200/300'} />
                <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkersData[0].images[1] + '/200/300'} alt="Sacré-Coeur" />
                <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkersData[0].images[2] + '/200/300'} alt="Sacré-Coeur" />
                <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkersData[0].images[0] + '/200/300'} alt="Sacré-Coeur" />
                <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkersData[0].images[1] + '/200/300'} alt="Sacré-Coeur" />
            </Popup>
        </Marker>
    )
}

export default MarkerWithPopup;