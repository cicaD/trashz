"use client"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import CustomButton from './CustomButton';
import "./Map.css"
import "leaflet/dist/leaflet.css"
import L from 'leaflet';
// import goldMarkerIcon from '../../../assets/images/marker-icon-gold.png';
import MarkerWithPopupN from '../../molecules/MarkerWithPopupN';



const Map = () => {
    const [mapCenter, setMapCenter] = useState([47.46863, 19.15359]);
    const [markerPosition, setMarkerPosition] = useState(null);
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


    useEffect(() => {
        //  getCurrentLocation();
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
            <CustomButton className="custom-button" onTouchStart={getCurrentLocation} onClick={getCurrentLocation} text="Pick my location" />
            <MarkerWithPopupN visible={previewMarkersData[0]} position={[previewMarkersData[0].lang, previewMarkersData[0].long]} markerIconColor="red" markerPositionCallBack={() => ""} />
            <MarkerWithPopupN visible={previewMarkersData[1]} position={[previewMarkersData[1].lang, previewMarkersData[1].long]} markerIconColor="red" markerPositionCallBack={() => ""} />
            <MarkerWithPopupN visible={markerPosition} position={markerPosition} markerIconColor="blue" markerPositionCallBack={setMarkerPosition} />
        </MapContainer>

    );
};

export default Map;
