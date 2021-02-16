import './style.js';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookRequest } from '../../store/actions'
import { makeStyles } from '@material-ui/core/styles';
import homeStyle from "./style";
import { Container, Paper } from "@material-ui/core";

const useStyles = makeStyles(homeStyle);

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const books = useSelector(state => state.books)
    

    useEffect(() => {
        dispatch(getBookRequest())
        console.log('state ====> ', books)
    }, [books])

    return (
        <Container className={classes.root}>
            
        </Container>
    )
}
