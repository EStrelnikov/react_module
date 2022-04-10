import React from "react";
import RenderQualitie from "./qualitie";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, onDelete, onBookmark }) => {
    console.log();
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                <RenderQualitie qualitie={user.qualities} key={user._id} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <td>
                <button onClick={() => onBookmark(user._id)}>
                    <Bookmark value={user.bookmark} />
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(user._id)}
                >
                    удалить
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onBookmark: PropTypes.func.isRequired
};
export default User;
