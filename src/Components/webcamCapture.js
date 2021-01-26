import React, { useCallback, useRef} from 'react'
import Webcam from 'react-webcam'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import {setCameraImage} from '../features/cameraSlice'
import { useHistory } from 'react-router-dom';
import '../Stylesheet/webcamCapture.css'

const videoContraints = {
    width: 250,
    height: 400,
    facingMode: "user"
}


function WebcamCapture() {
    const webcamRef = useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()
  
    const capture = useCallback(
        () => {

            // this gives us an image
            const imageSrc = webcamRef.current.getScreenshot();
            dispatch(setCameraImage(imageSrc))
            history.push("/preview")
        

        },
        [webcamRef],
    )
    return (
        <div className='webcamCapture'>
            <Webcam
            audio ={false}
            height={videoContraints.height}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoContraints}

            />

            <RadioButtonUncheckedIcon
            className='webcamCapture__button'
            onClick={capture}
            fontSize='large'
            
            />
           
            
        </div>
    )
}

export default WebcamCapture



