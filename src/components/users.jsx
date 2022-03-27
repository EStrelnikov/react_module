import React, { useState } from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter((user) => user._id !== userId))
    }
    const renderPhrase = (number) => {
        let arrNumber = String(number).split('');
        if (number === 0) {
            return (
                <span className={`badge bg-danger`}>
                    {'Никто с тобой не тусанет'}
                </span>
        )}
        if (
            (arrNumber.length >= 1 && 
            arrNumber[arrNumber.length - 1] > 1 &&
            arrNumber[arrNumber.length - 1] < 5 &&
            arrNumber[arrNumber.length - 2] > 1) ||
            (arrNumber.length === 1 &&
            arrNumber[arrNumber.length - 1] > 1 &&
            arrNumber[arrNumber.length - 1] < 5)
            ) {
            return (
                <span className={`badge bg-primary`}>
                    { number + ' человека тусанут с тобой сегодня'}
                </span>
        )} else {
            return (
                <span className={`badge bg-primary`}>
                    {number + ' человек тусанет с тобой сегодня'}
                </span>
            )
        }
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