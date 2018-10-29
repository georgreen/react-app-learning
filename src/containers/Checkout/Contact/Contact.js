import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Contact.css';
import axios from '../../../axios-orders';
import Input from  '../../../components/UI/Input/Input';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  constructor(props) {
    super(props);
    this.state.ingredients = props.location.ingredients;
    this.state.totalPrice = props.location.totalPrice;
    console.log("state: ", this.state);
    console.log("props: ", props);
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({loading: true});

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        email: 'test@data.com',
        address: '123144'
      },
      delivery: 'fastest'
    };

    axios.post('/oders.json', order)
      .then(response => console.log(response))
      .catch(error => console.log('Error: ', error))
      .finally(_ => {
        this.setState({loading: false});
        this.props.history.push("/burger-builder");
      });
  }

  render() {
    const formElements = Object.keys(this.state.orderForm).map(key => {
      return (
        <Input
          key={key}
          elementType={this.state.orderForm[key].elementType}
          elementConfig={this.state.orderForm[key].elementConfig}
          value={this.state.orderForm[key].value} />
      );
    });

    const form = this.state.loading
      ? <Spinner />
      : (
        <form>
          {formElements}
          <Button  type="Success" clicked = {this.orderHandler}>ORDER</Button>
        </form>
      );

    return (
      <section className={classes.Contact}>
        <h4>Enter your Contact information</h4>
        {form}
      </section>
    );
  }
}

export default Contact;
