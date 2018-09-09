import React, { Component } from 'react';

import Layout from './components/Layouts/layout';
import Aux from './hoc/aux';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {

  render() {
    return (
      <Aux className="App">
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </Aux>
    );
  }
}

export default App;
