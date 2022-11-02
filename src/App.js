import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/mainComponent';
import './App.css';
import {
   BrowserRouter,
 } from "react-router-dom";


class App extends Component {
    
      
    
  
   render() {  
      return (
         <div>
           <BrowserRouter>
           <Main/>
           </BrowserRouter>
        </div>
     );
   }
}

// export default App;

export default App;
