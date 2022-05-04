import React from "react";
// import Users from "./layouts/users";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NavBar from "./components/NavBar";
import usersList from "./components/usersList";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" exact component={usersList} />
                <Route path="/login" component={Login} />
                <Route path="/" exect component={Main} />
                {/* <Redirect from="/" to="/users" /> */}
            </Switch>
        </>
    );
}

export default App;
