import React, { createContext, useState, useEffect } from 'react';
import messagesFr from '../translation/fr';
import messagesEn from '../translation/en';
import { IntlProvider } from 'react-intl';

const messages = {
        fr: messagesFr,
        en: messagesEn
    };


const LanguageContext = createContext('fr');



export const LanguageProvider = (props) => {
    
    const [language, setLanguage] = useState(localStorage.getItem("lang") || 'fr');
    const toggle = () => language === 'fr' ? setLanguage('en') : setLanguage('fr');
    useEffect(() => {localStorage.setItem("lang", language)});
    
    return (
        <>
            <LanguageContext.Provider
              value={{
                language,
                toggle,
              }}
            >
               <IntlProvider locale={language} messages={messages[language]}> 
                    {props.children}
                </IntlProvider>
            </LanguageContext.Provider>
        </>
        );
}
export default LanguageContext