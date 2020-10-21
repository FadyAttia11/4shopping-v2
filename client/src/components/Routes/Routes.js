import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Products from '../Products/Products'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import Account from '../Account/Account'
import Profile from '../Profile/Profile'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/4shopping/" component={Home} />
            <Route path="/4shopping/products" component={Products} />
            <Route path="/4shopping/product" component={Product} />
            <Route path="/4shopping/account" component={Account} />
            <Route path="/4shopping/cart" component={Cart} />
            <Route path="/4shopping/profile" component={Profile} />
        </Switch>
    )
}

export default Routes