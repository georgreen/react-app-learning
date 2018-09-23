import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/aux';

const Modal = props => (
  <Aux>
    <Backdrop show = {props.show} closeModal = {props.clickBackdrop}/>
    <section
      className = {classes.Modal}
      style = {{
        transform: props.show ? 'translateY(0)' : 'translateY(-100%)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </section>
  </Aux>
);

export default Modal;
