import React from "react";

const SearchBar = () => {
    return (
        <div className="input-group flex-wrap">
            <input
                type="text"
                className="form-control"
                placeholder="Поиск ..."
                aria-label="Имя пользователя"
                aria-describedby="addon-wrapping"
            />
        </div>
    );
};

export default SearchBar;
