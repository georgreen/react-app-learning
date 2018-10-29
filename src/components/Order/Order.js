import React from 'react';

import classes from './Order.css';

const Order = props => {
  let ingredients = [];
  for (let name in props.ingredients) {
    ingredients.push({name: name, value: props.ingredients[name]})
  }
  ingredients = ingredients.map(item => (
    <span key={item.name}> {item.name}({item.value}) </span>)
  );
  return (
    <div className = {classes.Order}>
      <p>Ingredients: {ingredients}</p>
      <p>Price: <strong>USD {props.price}</strong></p>
    </div>
  );
}

export default Order;
