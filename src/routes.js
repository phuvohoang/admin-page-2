import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from '../src/Login.js';
import Welcome from './components/Welcome';
import CategoryView from './components/Category/CategoryView';
import ProductManagement from './components/Category/ProductManagement.js'


const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Login}/>
<Route path="/welcome" component={Welcome}/>
<Route path="/categoryiew" component={CategoryView}/>
<Route path="/allproducts" component={ProductManagement}/>
</Switch>
</BrowserRouter>
);

export default Routes;