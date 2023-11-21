import React from "react";
import Webcam from "react-webcam";

import "./Camera.css";

function WebCamera() {
    return (
        <div className="CameraContainer">
            <Webcam />
        </div>
    );
}

export default WebCamera;