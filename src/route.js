import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";

const Routes = () => {
    return <Router>
        <Switch>
            <Route exact path="/home">
                <HomePage />
            </Route>
            <Route exact path="/">
                <RegistrationPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
        </Switch>
    </Router>
}
export default Routes