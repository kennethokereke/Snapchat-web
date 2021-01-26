import { Avatar } from '@material-ui/core'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import SearchIcon from '@material-ui/icons/Search'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/firebase'
import '../Stylesheet/Chat.css'
import PostChat from './PostChat'

function Chat() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //give me the latest database snapchat
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),

            }))))

    }, []
    )
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar"/>
                <div className="chats__search">
                    <SearchIcon />
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
            
        </div>

    )
}

export default Chat
