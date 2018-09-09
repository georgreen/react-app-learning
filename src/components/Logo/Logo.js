import React from 'react';
import classes from './Logo.css';
import logoImage from '../../assets/images/burger-logo.png';

const Logo = props => (
  <figure className = {classes.Logo} style = {{height: props.height}}>
    <img src={logoImage} alt="logo"/>
  </figure>
);

export default Logo;
