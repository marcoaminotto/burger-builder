import React from 'react';

import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import Logo from '../../Logo';

import classes from './Styles.module.css';

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth}/>
    </nav>
  </div>
);

export default toolbar;