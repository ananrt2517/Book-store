import './style.js';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';
import { Container } from "@material-ui/core";
import homeStyle from "./style";

const useStyles = makeStyles(homeStyle);

export default function Home() {
    
    const { books, isLoading } = useSelector(state => state)
    const classes = useStyles();

    const handleImage = (item) => {
        if(item.isbn) 
            return `http://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg`;
        else if (item.lccn)
            return `http://covers.openlibrary.org/b/lccn/${item.lccn[0]}-M.jpg`;
        else if (item.oclc)
            return `http://covers.openlibrary.org/b/oclc/${item.oclc[0]}-M.jpg`;
        else if (item.olid)
            return `http://covers.openlibrary.org/b/olid/${item.olid[0]}-M.jpg`;
        else 
            return 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
    }

    return (
        <Container className={classes.root}>
            {isLoading && <Spinner/>}
            <div className={classes.bookCard}>
                {books && books.docs?.map(item => 
                    <Card
                        book_key={item.key}
                        key={item.key}
                        title={item.title} 
                        author={item && <div>{item.author_name}</div>} 
                        firstPublichYear={item.first_publish_year}
                        image={handleImage(item)}/>
                )}
            </div>
        </Container>
    )
}
