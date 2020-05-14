import React from 'react';
import { Link } from "react-router-dom";
import LanguageContext, {  } from "../context/LangContext";
import fr_flag from '../assets/img/fr_flag.png';
import en_flag from '../assets/img/en_flag.png';

const Navbar = () => {

    return (
        <>
            <nav>
                <ul><LanguageContext.Consumer>
                    {(value) => (
                    <li>
                        <button onClick={value.toggle}>{value.language === 'fr' ? <img src={ fr_flag } alt="fr flag" width={50} height={30} /> : <img src={ en_flag } alt="en flag" width={50} height={30} /> }</button>
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