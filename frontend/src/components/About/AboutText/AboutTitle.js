import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    aboutTitle: {
        fontSize:"4rem"
    },
  }));

function AboutTitle(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.aboutTitle} variant="h1" component="h1">
                About me
            </Typography>
        </div>
    );
}

export default AboutTitle;