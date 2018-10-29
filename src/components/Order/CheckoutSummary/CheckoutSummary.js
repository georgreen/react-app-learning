import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = props => {
  return(
    <section className = {classes.CheckoutSummary}>
      <h3>Hope you enjoy the Burger!</h3>
      <section style = {{width: '100%', margin: 'auto', height: '300px'}}>
        <Burger ingredients = {props.ingredients}/>
      </section>
      <Button clicked = { props.checkoutCancel } type = "Danger" > CANCEL </Button>
      <Button clicked = { props.checkoutComplete} type = "Success" > CONTINUE </Button>
    </section>
  );
}

export default CheckoutSummary;
