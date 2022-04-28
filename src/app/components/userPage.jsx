import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesList";
const UserPage = ({ userId }) => {
    const [user, setUsers] = useState();
    const history = useHistory();
    const handleBack = () => {
        history.push("/users");
    };
    useEffect(() => {
        api.users.getById(userId).then((data) => setUsers(data));
    }, []);
    if (user) {
        return (
            <div className="cardUser">
                <h1>{user.name}</h1>
                <h3>{"Профессия: " + user.profession.name}</h3>
                <QualitiesList qualities={user.qualities} />
                <div>{"Кол-во встреч: " + user.completedMeetings}</div>
                <h3>{"Рейтинг: " + user.rate}</h3>
                <button
                    className="cardUser_btn"
                    onClick={() => {
                        handleBack();
                    }}
                >
                    Все Пользователи
                </button>
            </div>
        );
    }
    return <div className="loader"> Идет загрузка...</div>;
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
