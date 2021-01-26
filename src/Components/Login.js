import React from 'react'
import '../Stylesheet/Login.css'

function Login() {
    const signIn = () => {  }
    return (
        <div className="Login">
        <div className="login_container">
            <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="Snapchat"/>
            <button varient='outline' onClick={signIn}>Sign in</button>
        </div>
            
        </div>
    )
}

export default Login
