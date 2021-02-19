import './style.js';
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import headerStyle from './style';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search/Search';


const useStyles = makeStyles((theme) => headerStyle(theme));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Montecha task
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}