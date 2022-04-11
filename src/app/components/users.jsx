import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, lenght, onDelete, onBookmark }) => {
    const count = lenght;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    let userCrop = paginate(users, currentPage, pageSize);
    if (count / currentPage < currentPage) {
        handlePageChange(currentPage - 1);
    } else if (count === 4) {
        userCrop = users;
    }
    return (
        <>
            {count > 0 && (
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
                        {userCrop.map((user) => (
                            <User
                                user={user}
                                key={user._id}
                                onDelete={onDelete}
                                onBookmark={onBookmark}
                            />
                        ))}
                    </tbody>
                </table>)
            }
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    lenght: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onBookmark: PropTypes.func.isRequired
};
export default Users;
