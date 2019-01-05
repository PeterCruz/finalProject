import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Auth from "./components/auth/Auth";
import Register from "./components/Home/Register";

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Auth} />
        <Route exact path='/signup' component={Register} />
    </Switch>
);

export default Router;