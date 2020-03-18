import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Argo from './login/index';
import Main from './principal';

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Argo}/>
        <Route exact path="/area" component={Main}/>
            
        </Switch>
    </BrowserRouter>
);

export default Routes;