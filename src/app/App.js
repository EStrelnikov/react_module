import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NavBar from "./components/NavBar";
import users from "./layouts/users";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" exact component={users} />
                <Route path="/login" component={Login} />
                <Route path="/" exect component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
