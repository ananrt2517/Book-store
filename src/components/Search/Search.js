import React, { useState, useEffect } from 'react';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import searchStyle from './style';
import { getBookRequest } from '../../store/actions';
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => searchStyle(theme));

export default function Search() {
    const [term, setTerm] = useState('')
    const classes = useStyles();
    const dispatch = useDispatch();

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
                        onChange={(event) => setTerm(event.target.value)}
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
