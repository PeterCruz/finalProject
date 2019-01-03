import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Auth from "./components/auth/Auth";

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Auth} />
    </Switch>
);

export default Router;