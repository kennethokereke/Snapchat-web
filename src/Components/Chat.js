import { Avatar } from '@material-ui/core'
import  RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import SearchIcon from '@material-ui/icons/Search'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../Config/firebase'
import { selectUser } from '../features/appSlice'
import '../Stylesheet/Chat.css'
import PostChat from './PostChat'
import { useHistory } from 'react-router-dom'
import { reseatCameraImage } from '../features/cameraSlice'

function Chat() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        //give me the latest database snapchat
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot =>
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),

            }))))

    }, []
    )

    const takeSnap = () => {
        dispatch(reseatCameraImage())
        history.push("/")


}

const logouts = () => {
    auth.signOut().then(()=> {
        console.log('logged out')
        
      }).catch((error) => {
        console.log(error.message)
      })
  
}
    return (
        <div className="chats">
            <div className="chats__header">

                <Avatar 
                src={user.profilePic} 
                onClick={logouts} 
                className="chats__avatar"/>

                
                <div className="chats__search">
                    <SearchIcon className="chats__searchIcon" />
                    <input placeholder='Friends' type="text" />
                </div>
                <ChatBubbleIcon className="chats__chatIcon" />
            </div>
            <div className="chats__posts" >
              {posts.map(({id, data: {profilePic, username, timestamp, imageUrl,read}}) => 
              (
                    <PostChat
                    key={id}
                    id={id}
                    username={username}
                    timestamp={timestamp}
                    imageUrl={imageUrl}
                    read={read}
                    profilePic={profilePic}
                    />

              ))}
            </div>
            <RadioButtonCheckedIcon
            className='chats__takePicIcon'
            onClick={takeSnap}
            fontSize='large'
            />

           
            
        </div>


    )
}

export default Chat

