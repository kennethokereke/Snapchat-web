import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Switch , Route, Link, BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Chat from './Components/Chat';
import ChatView from './Components/ChatView';
import Login from './Components/Login';
import Preview from './Components/preview';
import WebcamCapture from './Components/webcamCapture';
import { auth } from './Config/firebase';
import { login, lougout, selectUser } from './features/appSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      } else {
        dispatch(lougout)
      }

    })

  }, [])



  return (
       <div className="app">
       <Router>
         {!user ? (
           <Login/>

         ): (
           <>
           <img className="app__logo" src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt="snapchat" />
          <div className="App__body">
            <div className="app__background">

          
          <Switch>
         
            <Route exact path="/preview">
              <Preview/>
  
            </Route>
  
            <Route exact path="/chat/view" >
              <ChatView/>
  
            </Route>
  
            <Route exact path="/chat" >
              <Chat/>
  
            </Route>
            
            <Route exact path="/">
               {/* Camera */}
         <WebcamCapture/>
             </Route>
           
          </Switch>
          </div>
          </div>
          </>
          

         )}
         
         
 
      </Router>
    
      </div>
      
      

     
    
  );

}

export default App;
