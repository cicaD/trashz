"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import UniversalButton from '../Buttons/UniversalButton';
import "./Map.css"
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
import MarkerWithPopup from './MarkerWithPopup';
import mockedMarkersData from '../../mockups/markers_data.json';

const Map = () => {
    const [mapCenter, setMapCenter] = useState([47.46863, 19.15359]);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [mapMarkers, setMapMarkers] = useState([]);


    function getMarkers(userId) {
        return mockedMarkersData;
    }


    useEffect(() => {
        const markers = getMarkers("User1");
        //  alert(markers[0].lang);
        setMapMarkers(markers);
    }, []);


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

            <UniversalButton onTouchStart={getCurrentLocation} onClick={getCurrentLocation} text="Pick my location" />

// Reading allready saved markers in DB
            {mapMarkers.map((item) => (
                <MarkerWithPopup visible={item} position={[item.lang, item.long]} popupImages={item.images} markerIconColor="red" markerPositionCallBack={() => ""} />
            ))}
// Handling positioning of current marker
            <MarkerWithPopup visible={markerPosition} position={markerPosition} markerIconColor="blue" markerPositionCallBack={setMarkerPosition} />
        </MapContainer>
    );
};

export default Map;
