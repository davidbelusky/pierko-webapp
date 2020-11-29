import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Article from './Article'
import { useState, useEffect } from 'react';
import {API_URL} from '../../../constants'




const useStyles = makeStyles((theme) => ({
    articlesLayout: {
      maxWidth:"1400px",
      margin: "0 auto",
    },
  }));

export default function Articles() {
    const classes = useStyles();
    const [articles, setArticles] = useState([])

                    
    useEffect(() => {
        fetch(`${API_URL}api/articles/`)
        .then(response => response.json())
        .then(data => {
            setArticles(data)
        })
    },[]);

    return (
        <div className={classes.articlesLayout}>
            <Grid container direction="column" justify="center" alignItems="center">
                {articles.map((item,i) => <Article data={item}/>)}
            </ Grid>
        </div>
    )
}
