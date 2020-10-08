import React from 'react';

import classes from './Styles.module.css';

const draweToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default draweToggle;
