import React, { useState, useEffect, useContext } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import LanguageContext, {  } from "../context/LangContext";
import ReactMarkdown from 'react-markdown';

const About = ({ intl }) => {
    const content = intl.formatMessage({ id: "about.title" }) + "\n\n" + intl.formatMessage({ id: "about.content" });
    const [message, setMessage] = useState(content) ;
    const contxt = useContext(LanguageContext);
    useEffect(() => setMessage(content),[contxt])
    return (
        <>
            <ReactMarkdown source={message} />
        </>
    )
    
};

export default injectIntl(About)
