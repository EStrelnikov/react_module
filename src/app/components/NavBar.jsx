import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="navbar navbar-light bg-light">
            <div className="container-fluid justify-content-start">
                <li className="nav-item btn btn-sm btn-outline-secondary p-1">
                    <Link className="nav-link" aria-current="page" to="/">
                        Main
                    </Link>
                </li>
                <li className="nav-item btn btn-sm btn-outline-secondary m-1">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item btn btn-sm btn-outline-secondary">
                    <Link className="nav-link" to="/users">
                        Users
                    </Link>
                </li>
            </div>
        </ul>
    );
};

export default NavBar;
