import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    aboutDetails: {
        marginBottom: "1.7rem"
        
    },
  }));

function AboutDetails(props) {
    const classes = useStyles();

    return (
        <div className={classes.aboutDetai}>
            <Typography className={classes.aboutDetails} variant="subtitle1" component="p">
                Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div>
        </div>
    );
}

export default AboutDetails;