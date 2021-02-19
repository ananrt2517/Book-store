import React, { useState, useEffect } from 'react';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import searchStyle from './style';
import { getBookRequest } from '../../store/actions';
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => searchStyle(theme));

export default function Search() {
    const [term, setTerm] = useState('')
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleQuery = (term) => {
        return term.split(" ").join("+");
    }

    useEffect(() => {
        dispatch(getBookRequest(handleQuery(term)));
    }, [term])
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        onChange={(event) => {
                            if(history.location.pathname === "/")
                                setTerm(event.target.value)
                            else history.push("/");
                        }}
                        value={term}
                        placeholder="Search..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
        </div>
    )
}
