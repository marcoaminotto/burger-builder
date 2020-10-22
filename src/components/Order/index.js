import React from 'react';

import classes from './Styles.module.css';

const Order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>Price: <strong>USD 5.15</strong></p>
  </div>
)

export default Order;