import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Query from './pages/query';
import Gif from './pages/gif';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={Home}/>
                <Route path = "/query/:q" component={Query} forceRefresh={true}/>
                <Route path = "/gif/:id" component={Gif}/>
            </Switch>
        </BrowserRouter>
    )

}