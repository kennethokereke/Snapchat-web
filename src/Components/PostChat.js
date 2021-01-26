import { Avatar } from '@material-ui/core'
import StopRoundedIcon from '@material-ui/icons/StopRounded'
import React from 'react'
import ReactTimeago from 'react-timeago'
import '../Stylesheet/PostChat.css'

function PostChat({id, username, timestamp, read, imageUrl, profilePic}) {
    return (
        <div className="chat">
       <Avatar className="chat__avatar" src={profilePic}/>
       <div className="chat__info">
           <h4>{username}</h4>
           <p style={{fontSize: 9}}>Tap to view - {" "} <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>


       </div>
       {!read && <StopRoundedIcon className="chats__readIcon"/>}
            
        </div>
    )
}

export default PostChat
