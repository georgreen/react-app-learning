import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {

    render () {
        let ingridient;

        switch(this.props.type) {
            case('bread-bottom'):
                ingridient = <section className={classes.BreadBottom}></section>;
                break;
            case('bread-top'):
                ingridient =(
                    <section className={classes.BreadTop}>
                        <section className={classes.Seeds1}></section>
                        <section className={classes.Seeds2}></section>
                    </section>
                );
                break;
            case('meat'):
                ingridient = <section className={classes.Meat}></section>;
                break;
            case('cheese'):
                ingridient = <section className={classes.Cheese}></section>;
                break;
            case('salad'):
                ingridient = <section className={classes.Salad}></section>;
                break;
            case('bacon'):
                ingridient = <section className={classes.Bacon}></section>;
                break;
            default:
                ingridient = null
        }

        return ingridient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
