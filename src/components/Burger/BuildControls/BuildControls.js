import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'}
]

const BuildControls = props => {
  const quantityAdded = 1;
  return (
      <section className = {classes.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => (
          <BuildControl
            key = {ctrl.label}
            type = {ctrl.type}
            label = {ctrl.label}
            buttonState = {props.currentValue[ctrl.type]}
            addIngredient = {() => props.ingredientMutipler(ctrl.type, quantityAdded)}
            deleteIngredient = {() => props.ingredientMutipler(ctrl.type, -quantityAdded)}
          />)
        )}
        <button
          onClick = {props.orderHandler}
          className = {classes.OrderButton}
          disabled = {!props.purchable}>Order Now!</button>
      </section>
    );
}

export default BuildControls;
