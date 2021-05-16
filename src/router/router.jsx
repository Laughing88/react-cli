import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import Index from '../view/index';
import Login from '../view/login';
import Register from '../view/register';

const Routes = () =>(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>    
        </Switch>  
    </HashRouter>
);

export default Routes;