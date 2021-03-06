import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop';

import classes from './Styles.module.css';

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
