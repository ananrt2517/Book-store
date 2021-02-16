import './style.js';
import React from 'react';
import { AppBar,  Toolbar, IconButton, Typography, InputBase  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, Search as SearchIcon} from '@material-ui/icons';
import headerStyle from './style';
import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => headerStyle(theme));

export default function Header() {
  const classes = useStyles();

  const state = useSelector(state => state)

   console.log(state)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}