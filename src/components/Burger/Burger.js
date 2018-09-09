import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredeint/BurgerIngredient';

const Burger = props => {
  let trasformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])]
        .map((_, index) => <BurgerIngredient type={ingredientName}
          key = {ingredientName + index}/>
        )}
      )
    .reduce((prevValue, curreValue) => prevValue.concat(curreValue), []);

  if (trasformedIngredients.length === 0) {
    trasformedIngredients = <p> Please choose Ingredients </p>;
 }

  return (
    <section className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {trasformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </section>
  );
};

export default Burger;
