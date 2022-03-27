import React, { useState } from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter((user) => user._id !== userId))
    }
    const renderPhrase = (number) => {
        return (
            <span className={`badge bg-${number > 0 ? 'primary' : 'danger' }`}>
                { number === 0 ? 'Никто с тобой не тусанет' : 
                       number === 1 || number > 4 ? number + ' человек тусанет с тобой сегодня' :
                            number + ' человека тусанут с тобой сегодня'}
            </span>
        )
    }
    return (
        <>
            <h1>{renderPhrase(users.length)}</h1>
            { users.length > 0 ?
                <table className="table">
                    <thead key="thead">
                        <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {users.map((user,index) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.qualities.map(quality => (
                                    <span className={`badge m-1 bg-${quality.color}`} key={quality._id}>{quality.name}</span>
                                ))}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate} /5</td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table> : ''
            }    
        </>
    );
};

export default Users;