import React from 'react';
import classes from './ToggleSideDrawer.css';

const ToggleSideDrawer = props => (
    <div className = {classes.DrawerToggle}
         onClick = {props.toggleDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
);

export default ToggleSideDrawer;
