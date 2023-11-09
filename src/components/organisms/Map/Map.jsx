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
        <MapContainer key={mapCenter.toString()} center={mapCenter} zoom={13} style={{ height: '90vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <CustomButton className="custom-button" onTouchStart={getCurrentLocation} onClick={getCurrentLocation} text="Pick my location" />
            <MarkerHandler visible={markerPosition} position={markerPosition} />
        </MapContainer>

    );
};

export default Map;
