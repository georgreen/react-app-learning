import React from 'react';
import classes from './Backdrop.css';

const Backdrop = props => (
  props.show ? <section
    className = {classes.Backdrop}
    onClick = {props.closeModal}></section> : null
);

export default Backdrop;
