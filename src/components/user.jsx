import React from "react";
import RenderQualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
    return (
        <tr key={props._id}>
        <td>{props.name}</td>
        <td>
            < RenderQualitie qualitie= {props.qualities} /> 
        </td>
        <td>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate} /5</td>
        <td>
            <button
                onClick={() => props.onBookmark(props._id)}
            >
                < Bookmark value={props.bookmark} />
            </button>
        </td>
        <td>
            <button 
                className="btn btn-danger" 
                onClick={() => props.onDelete(props._id)}
            >
                delete
            </button>
        </td>
    </tr>
    )
};

export default User;