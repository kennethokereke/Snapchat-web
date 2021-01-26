import CloseIcon  from '@material-ui/icons/Close'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { reseatCameraImage, selectCameraImage } from '../features/cameraSlice'
import '../Stylesheet/preview.css'

function Preview() {
    // pulling the data from the redux
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage) {
            history.replace('/')
        }

    }, [cameraImage, history])
    
    //closes the picture
    const closePreview = () => {
        dispatch(reseatCameraImage());
        history.replace('/')
        

    };
    return (
        <div className="preview">
           <CloseIcon onClick = {closePreview} className='preview__close'/>
           
            <img src={cameraImage} alt="images"/>
            
        </div>
    )
}

export default Preview
