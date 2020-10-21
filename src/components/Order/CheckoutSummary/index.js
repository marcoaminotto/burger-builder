import React from 'react';

import Burger from '../../Burger';
import Button from '../../UI/Button';

import classes from './Styles.module.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked>Cancel</Button>
      <Button btnType="Success" clicked>Continue</Button>
    </div>
  );
}

export default CheckoutSummary;