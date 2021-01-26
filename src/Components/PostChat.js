import { Avatar } from '@material-ui/core'
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ReactTimeago from 'react-timeago'
import { db } from '../Config/firebase'
import { selectImage } from '../features/appSlice'
import '../Stylesheet/PostChat.css'

function PostChat({id, username, timestamp, read, imageUrl, profilePic}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const open = (e) => {
        e.preventDefault()
        if(!read) {
            dispatch(selectImage(imageUrl))
            db.collection("posts").doc(id).set(
                {
                read: true,
            }, 
            { merge: true })
            history.push('/chat/view')
        }
    }

    return (

        <div onClick={open} className="chat">
       <Avatar className="chat__avatar" src={profilePic}/>
       <div className="chat__info">
           <h4>{username}</h4>
           <p style={{fontSize: 9}}>
               {!read && "Tap to view -"}{" "} 
           <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>


       </div>
       {!read && <StopRoundedIcon className="chats__readIcon"/>}
            
        </div>
    )
}

export default PostChat
