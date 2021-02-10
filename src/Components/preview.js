import TextfieldIcon from '@material-ui/icons/TextFields'
import CloseIcon  from '@material-ui/icons/Close'
import CreateIcon from '@material-ui/icons/Create'
import NoteIcon from '@material-ui/icons/Note'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import CropIcon from '@material-ui/icons/Crop'
import TimerIcon from '@material-ui/icons/Timer'
import SendIcon from '@material-ui/icons/Send'
import {v4 as uuid} from 'uuid'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { reseatCameraImage, selectCameraImage } from '../features/cameraSlice'
import { db, storage } from '../Config/firebase'
import firebase from 'firebase'

import '../Stylesheet/preview.css'
import { selectUser } from '../features/appSlice'

function Preview() {
    // pulling the data from the redux
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

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

    const sendPost = () => {
        const id = uuid();
        // now upload data onto firebase
        //get a reference point 
        const uploadTask = storage
        .ref(`posts/${id}`)
        .putString(cameraImage, "data_url");

        uploadTask.on("state_changed ",
         null, 
         (error) =>{
             //ERROR function
           error.message();
        },
        () => {
            //COMPLETE function
            storage
            .ref("posts")
            .child(id)
            .getDownloadURL()
            .then((url) => {
                db.collection('posts').add({
                    imageUrl: url,
                    username: user.username,
                    read: false,
                    profilePic: user.profilePic,
                    //this will give you the server time (how recent is the post)
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),

                })
                history.replace('/chat');

                 
            })

        }
        );

   

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
            <div onClick={sendPost} className="preview__footer">
                <h2>Send now</h2>
                <SendIcon fontSize="small" className="preview__sendIcon"/>
            </div>
            
        </div>
    )
}

export default Preview
