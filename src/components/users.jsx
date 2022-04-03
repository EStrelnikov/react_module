import React from "react";
import User from "./user";

const Users = (props) => {
    return (
        <>
            { props.lenght > 0 ?
                <table className="table">
                    <thead key="thead">
                        <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {props.users.map( user => (
                                < User 
                                    {...user}
                                    key={user._id}
                                    onDelete={props.onDelete}
                                    onBookmark={props.onBookmark} 
                                />))}
                    </tbody>
                </table> : ''
            }    
        </>
    );
}

export default Users;