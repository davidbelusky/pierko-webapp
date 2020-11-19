import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AboutTitle from './AboutText/AboutTitle'
import AboutInfo from './AboutText/AboutInfo'
import AboutDetails from './AboutText/AboutDetails'
import AboutPhoto from './AboutPhoto'


const useStyles = makeStyles((theme) => ({
    aboutMainLayout: {
        height: '100vh',
        display: 'flex',
        justifyContent:'center',
    },
    aboutSecondLayout:{
        height:"100%",
        width:"70%",
        display:"flex"

    },
    textLayout:{
        marginTop:"5rem",

        width:"50%",
        height:"100%",
    },
    photoLayout:{
        width:"50%",
        height:"100%"
        
    }
  }));


function About(props) {
    const classes = useStyles();

    return (
        <div className={classes.aboutMainLayout}>
            <div className={classes.aboutSecondLayout}>
                <div className={classes.textLayout}>
                    <AboutTitle />
                    <AboutInfo />
                    <AboutDetails />
                </div>
                <div className={classes.photoLayout}>
                    <AboutPhoto />
                </div>
            </div>
        </div>
    );
}

export default About;