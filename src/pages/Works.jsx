import React, { useState, useEffect, useContext } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import LanguageContext, {  } from "../context/LangContext";
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from "react-router-dom";

const Works = ({ intl }) => {
    let { studyCase } = useParams();
    let list = [];
    let li = [];
    const content = intl.formatMessage({ id: "works.title" }) + "\n\n" + intl.formatMessage({ id: "works.content" });
    const [message, setMessage] = useState(content) ;
    const contxt = useContext(LanguageContext);
    
    for (let [key, value] of Object.entries(intl.messages)  ) {
        key = key.split('.')[0];
        if (key != 'about' && key != 'home' && key != 'works' && !list.includes(key) ) {list.push(key);}
    }
    list.map(
        (key,index) => {li.push(<li><Link key={index} to={`/works/:${key}-study-case`}>{ key }</Link></li>); }
        );    
    
    useEffect(() => {setMessage(content)},[contxt]);
    
    return (
        <>
            <ReactMarkdown source={message} />
            <ul>
            {/*<li><Link to={`/works/:${key}-study-case`}>{key}</Link></li>*/}
                {li}
            </ul>
        </>
                );
    
};

export default injectIntl(Works) 