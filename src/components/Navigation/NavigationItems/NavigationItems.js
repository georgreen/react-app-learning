import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const items = [
  {
    name: 'Burger Builder',
    link: '/burger-builder'
  },
  {
    name: 'Orders',
    link: '/orders'
  },
];

const NavigationItems = props => {
  return (
      <ul className = {classes.NavigationItems}>
      {
        items.map(item => (
          <NavigationItem
            key = {item.name}
            link = {item.link}>
            {item.name}
          </NavigationItem>)
        )
      }
      </ul>
    );
}

export default NavigationItems;
