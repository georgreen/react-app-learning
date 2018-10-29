import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contact from './Contact/Contact';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1
    }
  }

  componentDidMount() {
    if (this.props.location.ingredients) {
      this.setState({ ingredients: this.props.location.ingredients});
    }
  }

  checkoutCancel = () => {
    this.props.history.goBack();
  }

  checkoutComplete = () => {
    console.log("clicked..")
    this.props.history.push({
      pathname: this.props.match.url + '/contact-data',
      ingredients: this.state.ingredients,
      totalPrice:this.props.location.totalPrice}
    );
  }

  render() {
    return(
      <div>
        <section>
          <CheckoutSummary
          ingredients = {this.state.ingredients}
          checkoutCancel = {this.checkoutCancel}
          checkoutComplete = {this.checkoutComplete}
          />
        </section>
        <Route path={this.props.match.url + '/contact-data'} component = {Contact}/>
      </div>
    );
  }
}

export default Checkout;
