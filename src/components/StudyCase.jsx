import React ,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const StudyCase = () => {
     
    let { studyCase } = useParams();
    studyCase = studyCase.replace(':', '');
    
    return <h1>StudyCase: {studyCase}</h1>;
    
};

export default StudyCase