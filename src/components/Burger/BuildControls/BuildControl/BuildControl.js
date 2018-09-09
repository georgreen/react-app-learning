import React from 'react';
import classes from './BuildControl.css';

const BuildControl = props => (
  <section className={classes.BuildControl}>
    <label className={classes.Label}>{props.label}</label>
    <button
      className={classes.Less}
      onClick = {props.deleteIngredient}
      disabled = {!props.buttonState}>Less</button>
    <button
      className={classes.More}
      onClick = {props.addIngredient}>More</button>
  </section>
);


export default BuildControl;
