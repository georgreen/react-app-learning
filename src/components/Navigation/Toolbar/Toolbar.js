import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleSideDrawer from '../SideDrawer/ToggleSideDrawer/ToggleSideDrawer'

const Toolbar = props => (
  <header className = {classes.Toolbar}>
    <ToggleSideDrawer  toggleDrawer = {props.toggleDrawer} />
      <Logo height="80%"/>
    <nav className = {classes.DesktopOnly} >
      <NavigationItems/>
    </nav>
  </header>
);

export default Toolbar;
