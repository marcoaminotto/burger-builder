import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientsKey) => {
      return (
        <li key={ingredientsKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingredientsKey}</span>:{' '}
          {props.ingredients[ingredientsKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the folling ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinueHandler}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;