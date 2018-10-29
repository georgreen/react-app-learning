import React, {Component} from 'react';

import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

const INGREDIENTS_PRICE = {
  salad: 20,
  meat: 40,
  cheese: 30,
  bacon: 10
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 60,
    purchable: false,
    purchasing: false,
    show: false,
    loading:false,
    error:false
  };

  componentDidMount() {
    axios.get('/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {
        this.setState({error: error});
      })
  }

  purchableHandler = ingredients => {
    return Boolean(Object.values(ingredients).reduce((sum, el) => sum + el, 0));
  }

  showOrderHandler = _ => {
    this.setState({purchasing: !{...this.state}['purchasing']});
  }

  checkOutBurger = _ => {
    this.setState({loading: true});
    this.props.history.push({pathname: '/checkout',
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice
    });
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
        {!this.state.loading
          ? <OrderSummary
              purchaseCompleted = {this.checkOutBurger}
              purchaseCancaled = {this.showOrderHandler}
              ingredients = {this.state.ingredients}/>
          : <Spinner/>
        }
      </Modal>
    : null;

    const burgerInfo = this.state.ingredients
      ? (<Aux>
          <Burger ingredients = {this.state.ingredients}/>
          <BurgerControl
            orderHandler = {this.showOrderHandler}
            price = {this.state.totalPrice}
            purchable = {this.state.purchable}
            currentValue = {this.state.ingredients}
            ingredientMutipler = {this.ingredientMutipler}
          />
      </Aux>
      )
      : !this.state.error
        ? <Spinner/>
        : <p style = {{textAlign: 'center'}}> Error while loading burger state </p>

    return (
      <Aux>
        {modal}
        {burgerInfo}
      </Aux>
  );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
