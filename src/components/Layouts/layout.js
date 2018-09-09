import React, {Component} from 'react';

import Aux from '../../hoc/aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css'

class Layout extends Component {
  state = {
    showDrawer: false
  }

  handleShowDrawer = _ => {
    console.log('Closing backdrop');
    this.setState( prevState => {
      return {showDrawer: !prevState.showDrawer};
    })
  }

  render() {
    const sideDrawer = this.state.showDrawer
    ? <SideDrawer
      open = {this.state.showDrawer}
      toggleDrawer = {this.handleShowDrawer}/>
    : null;

    return (
      <Aux>
        <Toolbar toggleDrawer = {this.handleShowDrawer}/>
        {sideDrawer}
        <main className = {classes.Layout}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
