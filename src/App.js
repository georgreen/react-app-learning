import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import Layout from './components/Layouts/layout';
import Aux from './hoc/aux';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <Aux className="App">
        <Layout>
          <Switch>
            <Route path="/burger-builder" component = {BurgerBuilder} />
            <Route path="/orders" component = {Orders} />
            <Route path="/checkout" component = {Checkout} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default withRouter(App);
