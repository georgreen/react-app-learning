import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const items = [
  {name: 'Burger Builder', active: true, link: '/'},
  {name: 'Checkout', active: false, link: '/'},
];

const NavigationItems = props => (
  <ul className = {classes.NavigationItems}>
  {
    items.map(item => (
      <NavigationItem
        key = {item.name}
        link = {item.link}
        active = {item.active}>
        {item.name}
      </NavigationItem>)
    )
  }
  </ul>
);

export default NavigationItems;
