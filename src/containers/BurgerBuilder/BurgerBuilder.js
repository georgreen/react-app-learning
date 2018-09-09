import React, {Component} from 'react';

import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
  salad: 20,
  meat: 40,
  cheese: 30,
  bacon: 10
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 60,
    purchable: false,
    purchasing: false,
    show: false
  };

  purchableHandler = ingredients => {
    return Boolean(Object.values(ingredients).reduce((sum, el) => sum + el, 0));
  }

  showOrderHandler = _ => {
    console.log("order is clicked...")
    this.setState({purchasing: !{...this.state}['purchasing']});
  }

  checkOutBurger = _ => {
    alert("You bought a burger");
  }

  ingredientMutipler = (type, mul) => {
    if(mul === -1 && !this.state.ingredients[type]) return

    const updatedCount = this.state.ingredients[type] + mul;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + mul * INGREDIENTS_PRICE[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients,
      purchable: this.purchableHandler(newIngredients)
    });
  }

  render() {
    const modal = this.state.purchasing
    ?
      <Modal
        show = {this.state.purchasing}
        clickBackdrop = {this.showOrderHandler}>
        <OrderSummary
          purchaseCompleted = {this.checkOutBurger}
          purchaseCancaled = {this.showOrderHandler}
          ingredients = {this.state.ingredients}/>
      </Modal>
    : null;

    return (
      <Aux>
        {modal}
        <Burger ingredients = {this.state.ingredients}/>
        <BurgerControl
          orderHandler = {this.showOrderHandler}
          price = {this.state.totalPrice}
          purchable = {this.state.purchable}
          currentValue = {this.state.ingredients}
          ingredientMutipler = {this.ingredientMutipler}
        />
      </Aux>
  );
  }
}

export default BurgerBuilder;
