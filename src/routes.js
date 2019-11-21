import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './Views/home.js';
import NewOrder from './Views/newOrder';
// import UpdateCategory from './Views/UpdateCategory';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={NewOrder} />
        {/* <Route exact path='/details/:id' component={Details} /> */}
        {/* <Route exact path='/update/:id' component={UpdateCategory} /> */}
    </Switch>
    </BrowserRouter>
);

export default Routes;