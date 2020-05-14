import React, { useState, useEffect, useContext } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import LanguageContext, {  } from "../context/LangContext";

const Home = ({ intl }) => {
    const [message, setMessage] = useState(intl.formatMessage({ id: "platon.title" }) );
    const contxt = useContext(LanguageContext);
    return (
        <>
            <p>{message}</p>
        </>
    )
    
};

export default injectIntl(Home)