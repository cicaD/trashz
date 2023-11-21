import Webcam from "react-webcam";
import { Box } from '@mui/material'
import { useCallback, useRef, useState } from "react";

import "./Camera.css";

const globalVideoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: "user"
};



function CameraPage() {
    const [image, setImage] = useState(null);
    const webcamRef = useRef(null);
    var imageSrc = null;

    const videoConstraints = {
        width: 420,
        height: 420,
        facingMode: "user",
    };


    async function captureImage() {
        console.log('CameraRef: ' + webcamRef);
        imageSrc = await webcamRef.current.getScreenshot();
        //  console.log('ImageSrc: ' + imageSrc);
        setImage(imageSrc);
    };

    return (
        <Box className="PageContainer">
            <Webcam className="webCamera"
                audio={false}
                mirrored={true}
                height={"60%"}
                width={"60%"}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <div className="buttonsContainer">
                <button onClick={() => { }}>Flip camera</button>
                <button onClick={captureImage}>Capture photo</button>
            </div>
            <div className="imagePreviewContainer">
                {image === null ? (<></>) : (<img clasName="previewImage" src={image} height={"20pc"} width={"20pc"} alt="screenshot"></img>)}
            </div>
        </Box>
    );
}

export default CameraPage;