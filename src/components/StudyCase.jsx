import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { injectIntl, FormattedMessage } from 'react-intl';
import LanguageContext, {  } from "../context/LangContext";
import ReactMarkdown from 'react-markdown';

const StudyCase = ({ intl }) => {
    let { studyCase } = useParams();
    studyCase = studyCase.replace(':', '').split('-')[0];
    const content = intl.formatMessage({ id: `${studyCase}.title` }) + "\n\n" + intl.formatMessage({ id: `${studyCase}.content` });
    const [message, setMessage] = useState(content) ;
    const contxt = useContext(LanguageContext);
    useEffect(() => setMessage(content),[contxt,studyCase])
    
    return (
        <>
            <ReactMarkdown source={message} />
        </>
    )
    
};

export default injectIntl(StudyCase)

