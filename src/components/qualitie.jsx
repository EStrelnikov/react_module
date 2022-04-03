import React from "react";

const RenderQualitie = (props) => {
    
    return  (
        props.qualitie.map(q => (<span key={q._id} className={`badge m-1 bg-${q.color}`}>{q.name}</span>))
    )
};

export default RenderQualitie;