import React from 'react';
import { Link } from "react-router-dom";
import LanguageContext, {  } from "../context/LangContext";

const Navbar = () => {

    return (
        <>
            <nav>
                <ul><LanguageContext.Consumer>
                    {(value) => (
                    <li>
                        <button onClick={value.toggle}>{value.language}</button>
                    </li>
                    )}
                    
                  </LanguageContext.Consumer>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/works`}>Works</Link></li>
                </ul>
                
            </nav>
        </>
        );
}
export default Navbar