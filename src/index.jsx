import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import RouterCustom from './components/RouterCustom';

import LanguageContext, { LanguageProvider } from "./context/LangContext";


const App = () => {
    
    
    return (
        <>
            
                
                     <h1>Webistic</h1>
                     <RouterCustom />
                    
                
                
            
        </>
        );
  };


ReactDOM.render(
    <LanguageProvider>
    <App />
    </LanguageProvider>
  , document.querySelector("#root"));