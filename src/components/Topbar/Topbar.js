import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Button, colors, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
const useStyles = makeStyles(theme => ({
  // root: {
  //   boxShadow: 'none',
  //   background: theme.palette.white,
  //   borderBottom: `1px solid ${colors.grey[200]}`,
  // },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Dancing Script, cursive",
    fontWeight: "700",
    color: "white",

    fontSize: theme.spacing(3),
    '& span': {
      padding: theme.spacing(1)
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 
  login: {
    textTransform: "lowercase",
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),

    borderColor: theme.palette.text.main,
    fontFamily: "Nunito, sans-serif",
    fontWeight: "400",
    color: "white"
  }
}));

const Topbar = props => {

  const classes = useStyles();

  return (
    <AppBar color="transparent" className={classes.root} elevation={1}>
    <Toolbar className={classes.toolbar} >
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        {/* <MenuIcon /> */}
      </IconButton>
      <Typography variant="h6" className={classes.title} color="textPrimary">
        theBest<span>24</span>
      </Typography>
      <Link to={ROUTES.SIGN_IN}>
        <Button color="textPrimary" variant="outlined" size="small" className={classes.login}>einloggen</Button>
      </Link>

    </Toolbar>
  </AppBar>
  );
};

export default Topbar;
