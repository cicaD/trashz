"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import CustomButton from './CustomButton';
import "./Map.css"
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

const Map = () => {
    const [mapCenter, setMapCenter] = useState([47.46863, 19.15359]);
    const [markerPosition, setMarkerPosition] = useState(null);
    const paris18 = 'https://images.unsplash.com/photo-1589805054722-c407021fa8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';
    const pin = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
    const pinMB = L.icon({
        iconUrl: pin,
        iconSize: [24, 41],
        iconAnchor: [0, 44],
        popupAnchor: [12, -40],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });



    useEffect(() => {
        //  getCurrentLocation();
    }, []);

    function MarkerHandler({ position, visible }) {
        const map = useMapEvents({
            click(e) {
                // map.locate();
                setMarkerPosition(e.latlng);
                console.log('Map clicked');
            },
        })

        return visible && (
            <Marker position={position} icon={pinMB}>
                <Popup>
                    <p className="popup">Position: {position.lat}  {position.lng}</p>
                    <img className="popup_img" src={paris18} alt="Sacré-Coeur" />
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
            <MarkerHandler visible={markerPosition} position={markerPosition} />
        </MapContainer>

    );
};

export default Map;
