import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    infoLayout: {
        marginTop:"0.7rem",
        marginBottom:"1.5rem"
    },
  }));

function AboutInfo(props) {
    const classes = useStyles();

    return (
        <div className={classes.infoLayout}>
            <Typography className={classes.aboutInfo} variant="h5" color="textSecondary" component="h5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting text. 
            </Typography>
            
        </div>
    );
}

export default AboutInfo;