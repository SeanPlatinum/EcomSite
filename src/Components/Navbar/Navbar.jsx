import React from 'react';
import { AppBar, Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import {CallMissedSharp, ShoppingCart} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Logo from './ecomlogo.png';
import useStyles from './NavbarStyles';
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className= {classes.appBar} color = "inherit">
      <Toolbar>
        <Typography variant="h6" className= {classes.title} color ="inherit">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src= {Logo} style={{width: '50px'}}/>
              SeanCommerce.js
          </Link>
        </Typography>
        <div className={classes.grow}>
          <div className={classes.button}>
            <IconButton color="inherit">
              <Badge badgeContent ={2} color='Secondary'></Badge>
              <Link to="/cart">
                <ShoppingCart />
              </Link>
            </IconButton>
          </div>
        </div>
       
      </Toolbar>
    </AppBar>
  );
}

export default Navbar