import React, { useState, useEffect, useContext } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import LanguageContext, {  } from "../context/LangContext";
import ReactMarkdown from 'react-markdown';

const Home = ({ intl }) => {
    const content = intl.formatMessage({ id: "home.title" }) + "\n\n" + intl.formatMessage({ id: "home.content" });
    const [message, setMessage] = useState(content) ;
    const contxt = useContext(LanguageContext);
    useEffect(() => setMessage(content),[contxt])
    return (
        <>
            <ReactMarkdown source={message} />
        </>
    )
    
};

export default injectIntl(Home)