import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';

import classes from './Styles.module.css';

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };
    return (
      <Aux>
        <Toolbar 
          drawerToggleClicked={sideDrawerToggleHandler} 
          isAuth={props.isAuthenticated}  
        />
        <SideDrawer
          isAuth={props.isAuthenticated}  
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
        />
        <div>Backdrop</div>
        <main className={classes.Content}>{props.children}</main>
      </Aux>
    );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps)(Layout);
