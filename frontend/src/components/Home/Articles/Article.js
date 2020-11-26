import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    articleImage: props => ({
        boxSizing:"border-box"

    }),
    imageElement: {
        maxWidth:"560px",
        maxHeight:"510px"
    },
    articleLayout: props => ({
        width: "100%",
        padding: "0 120px",
        display: "flex",
        justifyContent: props.data.flexPosition,
        marginBottom: "4rem",
        marginTop: "3rem"
    }),
    articleText:{
        marginLeft: "10%",
        maxWidth: "340px"
    },
    headingArticle:{
        marginBottom: "1rem"
    }
    
  }));


function Article(props) {
    const classes = useStyles(props);


    return (
            <Grid className={classes.articleLayout} item>
                <Box className={classes.articleImage}>
                    <img className={classes.imageElement} src={props.data.image} />
                </Box>
                <Box className={classes.articleText}>
                    <Typography className={classes.headingArticle} variant="h4" component="h4">
                        {props.data.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">
                        {props.data.text}
                    </Typography>
                </Box>
            </Grid>
    );
}

export default Article;