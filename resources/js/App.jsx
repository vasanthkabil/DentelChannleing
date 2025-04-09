

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../css/app.css';


import Createbutton from './components/Createbutton.jsx';
import Login from './pages/Login.jsx';


const rootElement = document.getElementById('react-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
    
       
 
   <Createbutton />
  
    
    
    );
   
}



