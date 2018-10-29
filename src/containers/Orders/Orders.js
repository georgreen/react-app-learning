import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
  state = {
    orders:[],
    loading: false
  }

  componentDidMount() {
    axios.get('oders.json')
    .then(res => {
      const fetchedOrders = [];
      console.log("response from firebase: ", res.data);
      for(let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        });
      }
      this.setState({loading: false, orders: fetchedOrders});
    })
    .catch(_ => {
      this.setState({loading: false});
    })
  }

  render() {
    const orders = this.state.orders.map( item => (
      <Order key={item.id} ingredients={item.ingredients} price={item.price}/>)
      );
    return (
      <div>
        {orders}
      </div>
    );
  }
}


export default withErrorHandler(Orders, axios);
