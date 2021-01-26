import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Switch , Route, Link, BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Chat from './Components/Chat';
import ChatView from './Components/ChatView';
import Login from './Components/Login';
import Preview from './Components/preview';
import WebcamCapture from './Components/webcamCapture';
import { selectUser } from './features/appSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()



  return (
       <div className="app">
       <Router>
         {!user ? (
           <Login/>

         ): (
          <div className="App__body">
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

         )}
         
 
      </Router>
      </div>
      

     
    
  );
}

export default App;
