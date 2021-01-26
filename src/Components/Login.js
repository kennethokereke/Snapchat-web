import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../Config/firebase';
import { login } from '../features/appSlice';
import '../Stylesheet/Login.css'

function Login() {
    const dispatch = useDispatch();

    const signIn = () => { 
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
            })
            )
        }).catch(error => alert(error.message))
     }
    return (
        <div className="Login">
        <div className="login_container">
            <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="Snapchat"/>
            <Button variant='outlined' onClick={signIn}>Sign in</Button>
        </div>
            
        </div>
    )
}

export default Login
