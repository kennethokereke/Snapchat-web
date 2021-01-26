import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectSelectedImage } from '../features/appSlice'
import '../Stylesheet/ChatView.css'

function ChatView() {
    const selectedImage = useSelector(selectSelectedImage)
    const History = useHistory()
   
    useEffect(() => {
        if(!selectedImage) {
            exit();
        }
       
    }, [selectedImage])
     
    const exit = (e) => {
        e.preventDefault()
        History.replace('/chat')

    }
    return (
        <div className='chatview'>
            <img src={selectedImage} onClick={exit} alt="" />
            
            
        </div>
    )
}

export default ChatView
