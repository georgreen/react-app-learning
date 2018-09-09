import React, {Component} from 'react';
import Aux from '../../hoc/aux';
import Button from '../UI/Button/Button';

class OrderSummary extends Component {

  componentWillUpdate() {
    console.log("updating .....");
  }

  render() {
    const ingredientList = Object.keys(this.props.ingredients)
      .map( (ingredientKey) => (
          <li key = {ingredientKey}>
            <span style = {{textTransform: 'capitalize'}}>{ingredientKey}</span>
            {`: ${this.props.ingredients[ingredientKey]}`}
          </li>
        )
      );

    return(
      <Aux>
        <p> Order Summary </p>
        <ul>
          {ingredientList}
        </ul>
        <p> Do you want to check out? </p>
        <Button clicked = {this.props.purchaseCancaled} type="Danger">CANCEL</Button>
        <Button clicked = {this.props.purchaseCompleted} type="Success">CONTINUE</Button>
      </Aux>
    );
  }
}


export default OrderSummary;
