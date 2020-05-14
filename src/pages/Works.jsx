import React from 'react';
import { Link, useParams } from "react-router-dom";

const Works = () => {
    let { studyCase } = useParams();
   
    
    return (
        <>
            <h1>Works</h1>
            <ul>
                <li><Link to={`/works/:test1`}>Test</Link></li>
                <li><Link to={`/works/:test2`}>Test</Link></li>
                <li><Link to={`/works/:test3`}>Test</Link></li>
            </ul>
        </>
                );
    
};

export default Works