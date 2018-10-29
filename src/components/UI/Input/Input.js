import React from 'react';
import classes from './Input.css';

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case('input'):
      inputElement = <input
                        className = {classes.InputElement}
                        {...props.elementConfig}
                        value = {props.value}
                        />;
      break;
    case('textarea'):
      inputElement = <textarea
                        className = {classes.InputElement}
                        {...props.elementConfig}
                        value = {props.value}
                        />;
      break;
    case('select'):
      inputElement = <select
                        className = {classes.InputElement}
                        value={props.value}
                        >
                          {
                            props.elementConfig.options.map(elem => (
                              <option key={elem.value} value={elem.value}>
                                {elem.displayValue}
                              </option>
                            )
                            )
                          }
                    </select>
      break;
    default:
      inputElement = <input
                        className = {classes.InputElement}
                        {...props.elementConfig}
                        value = {props.value}
                        />;
  }

  return (
    <section className = {classes.Input}>
      <label className = {classes.Label}>{props.label}</label>
      {inputElement}
    </section>
  );
}

export default input;
