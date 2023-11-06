"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import CustomButton from './CustomButton';
import "./Map.css"
import "leaflet/dist/leaflet.css"
const Map = () => {
    const [mapCenter, setMapCenter] = useState([47.46863, 19.15359]);
    const [markerPosition, setMarkerPosition] = useState(null);

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
            <Marker position={position}>
                <Popup> <div> Position: {position.lat}  {position.lng}</div>  </Popup>
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
        <MapContainer center={mapCenter} zoom={13} style={{ height: '90vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <CustomButton className="custom-button" onClick={getCurrentLocation} text="Pick my location" />
            <MarkerHandler visible={markerPosition} position={markerPosition} />


        </MapContainer>

    );
};

export default Map;
