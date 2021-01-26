import React from 'react';
import {Switch , Route, Link, BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Preview from './Components/preview';
import WebcamCapture from './Components/webcamCapture';

function App() {
  return (
       <div className="app">
       <Router>
          <div className="App__body">
        <Switch>
       
          <Route exact path="/preview">
            <Preview/>

          </Route>
          
          <Route exact path="/">
             {/* Camera */}
       <WebcamCapture/>
           </Route>
         
        </Switch>
        </div>
 
      </Router>
      </div>
      

     
    
  );
}

export default App;
