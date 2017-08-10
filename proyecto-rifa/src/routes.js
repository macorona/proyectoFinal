import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './contenedores/Home';

export default function Routes(){

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )

}
