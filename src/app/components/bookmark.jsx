import React from "react";

const Bookmark = (props) => {
    const classBookmark = props.value
        ? "bi bi-bookmark-fill"
        : "bi bi-bookmark";
    return <i className={classBookmark}></i>;
};

export default Bookmark;
