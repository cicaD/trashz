"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import CustomButton from './CustomButton';
import "./Map.css"
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import goldMarkerIcon from '../../../assets/images/marker-icon-gold.png';
import blueMarkerIcon from '../../../assets/images/marker-icon-blue.png';
import redMarkerIcon from '../../../assets/images/marker-icon-red.png';


const Map = () => {
    const [mapCenter, setMapCenter] = useState([47.46863, 19.15359]);
    const [markerPosition, setMarkerPosition] = useState(null);
    const paris18 = 'https://images.unsplash.com/photo-1589805054722-c407021fa8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
    const pin = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
    const picuresURL = "https://picsum.photos/id/";


    const getMarkerIcon = (color) => {
        //  const markerIcon = color + 'MarkerIcon';
        const markerIcon = require('../../../assets/images/marker-icon-' + color + '.png');
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

    const pinMB = L.icon({
        //iconUrl: require('../assets/images/marker-icon-' + "red" + '.png'),
        //   iconUrl: pin,
        iconUrl: goldMarkerIcon,
        iconSize: [24, 41],
        iconAnchor: [0, 44],
        popupAnchor: [12, -40],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });

    //  https://fastly.picsum.photos/id/0/5000/3333.jpg
    //  https://picsum.photos/id/3/200/300

    const previewMarkers = [
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

    const previewMarkersEmpty = [
    ];

    useEffect(() => {
        //  getCurrentLocation();
    }, []);


    function MarkerWithPopup({ position, visible, markerIconColor }) {

        const markerIcon = getMarkerIcon(markerIconColor);
        const map = useMapEvents({
            click(e) {
                // map.locate();
                setMarkerPosition(e.latlng);
                console.log('Marker location' + e.latlng);
            },
        })

        return visible && (
            <Marker position={position} icon={markerIcon}>
                <Popup>
                    <p className="popup">Position: {position.lat}  {position.lng}</p>
                    <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkers[0].images[0] + '/200/300'} alt={picuresURL + previewMarkers[0].images[0] + '/200/300'} />
                    <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkers[0].images[1] + '/200/300'} alt="Sacré-Coeur" />
                    <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkers[0].images[2] + '/200/300'} alt="Sacré-Coeur" />
                    <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkers[0].images[0] + '/200/300'} alt="Sacré-Coeur" />
                    <img className="popup_img" width="80px" height="80px" src={picuresURL + previewMarkers[0].images[0] + '/200/300'} alt="Sacré-Coeur" />

                </Popup>
            </Marker>
        )
    }

    const getCurrentLocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setMapCenter([latitude, longitude]);
                    setMarkerPosition([latitude, longitude]);
                },
                (error) => {
                    console.error('Error getting current location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported in this browser.');
        }
    };

    return (
        <MapContainer key={mapCenter.toString()} center={mapCenter} zoom={13} style={{ height: '90vh', width: '100%' }} attributionControl={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CustomButton className="custom-button" onTouchStart={getCurrentLocation} onClick={getCurrentLocation} text="Pick my location" />
            <MarkerWithPopup visible={previewMarkers[0]} position={[previewMarkers[0].lang, previewMarkers[0].long]} markerIconColor="red" />
            <MarkerWithPopup visible={previewMarkers[1]} position={[previewMarkers[1].lang, previewMarkers[1].long]} markerIconColor="red" />
            <MarkerWithPopup visible={previewMarkers[2]} position={[previewMarkers[2].lang, previewMarkers[2].long]} markerIconColor="red" />

            <MarkerWithPopup visible={previewMarkersEmpty[1]} position={[previewMarkers[1].lang, previewMarkers[1].long]} markerIconColor="red" />
            <MarkerWithPopup visible={markerPosition} position={markerPosition} markerIconColor="blue" />

        </MapContainer>

    );
};

export default Map;
