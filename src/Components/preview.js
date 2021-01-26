import TextfieldIcon from '@material-ui/icons/TextFields'
import CloseIcon  from '@material-ui/icons/Close'
import CreateIcon from '@material-ui/icons/Create'
import NoteIcon from '@material-ui/icons/Note'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import CropIcon from '@material-ui/icons/Crop'
import TimerIcon from '@material-ui/icons/Timer'
import SendIcon from '@material-ui/icons/Send'

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
           <div className="preview__toolBarRight">
               <TextfieldIcon/>
               <CreateIcon/>
               <NoteIcon/>
               <MusicNoteIcon/>
               <AttachFileIcon/>
               <CropIcon/>
               <TimerIcon/>
           </div>
           
            <img src={cameraImage} alt="images"/>
            <div className="preview__footer">
                <h2>Send now</h2>
                <SendIcon fontSize="small" className="preview__sendIcon"/>
            </div>
            
        </div>
    )
}

export default Preview
