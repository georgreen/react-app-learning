import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/aux';

const SideDrawer = props => {
  const attachedClasses = props.open
    ? [classes.SideDrawer, classes.Open]
    : [classes.SideDrawer, classes.Close];

  return (
    <Aux>
     <Backdrop
          show = {props.open}
          closeModal = {props.toggleDrawer}/>
      <section className = {attachedClasses.join(' ')}>
        <div className = {classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </section>
    </Aux>
  );
}

export default SideDrawer;
