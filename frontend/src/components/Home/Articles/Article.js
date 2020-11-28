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
        maxHeight:"510px",
        '@media (max-width: 535px)': {
        maxWidth:"100%",
          },
    },
    articleLayout: props => ({
        width: "100%",
        padding: "0 120px",
        display: "flex",
        justifyContent: props.data.position,
        marginBottom: "4rem",
        marginTop: "3rem",
        '@media (max-width: 978px)': {
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "1rem",
            marginTop: "1rem",
            padding: "0 80px",
          },
          '@media (max-width: 535px)': {
              padding: "0 0"
          }
    }),
    articleText:{
        marginLeft: "10%",
        maxWidth: "340px",
        marginTop: "2rem",
        '@media (max-width: 978px)': {
            marginLeft: 0,
            maxWidth: "450px",
            textAlign: "center"
          },
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
                    <img className={classes.imageElement} src={props.data.article_image} />
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