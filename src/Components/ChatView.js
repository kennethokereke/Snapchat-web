import React, { useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
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
     
    const exit = () => {
       
        History.replace('/chat')
        

    }
    return (
        <div className='chatview'>
            <img src={selectedImage} onClick={exit} alt="" />
            <div className="chatview__timer">

            <CountdownCircleTimer
            isPlaying
            duration={5}
            strokeWidth={6}
            size={50}
            colors={[
                ["#004777", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33]

            ]}
            >
                {/* once it hits 0 it will redirect us back */}
                {({ remainingTime }) => {
                    if (remainingTime === 0) {
                        exit()
                    }
                    return remainingTime
                }}

            </CountdownCircleTimer>

                 

            </div>


            
            
        </div>
    )
}

export default ChatView
