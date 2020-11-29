import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AboutTitle from './AboutText/AboutTitle'
import AboutInfo from './AboutText/AboutInfo'
import AboutDetails from './AboutText/AboutDetails'
import AboutPhoto from './AboutPhoto'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { aboutTextAnimate } from './../../variants'
import { motion } from 'framer-motion'



const useStyles = makeStyles((theme) => ({
    aboutMainLayout: {
        height: '100vh',
        display: 'flex',
        justifyContent:'center',
    },
    aboutSecondLayout:{
        height:"100%",
        width:"70%",
        display:"flex",
        '@media (max-width: 1015px)': {
            width:"90%"
          },
        '@media (max-width: 894px)': {
            justifyContent: "center",
            width:"100%"
          }

    },
    textLayout:{
        marginTop:"5rem",
        width:"50%",
        height:"100%",
        '@media (max-width: 894px)': {
            width:"80%",
            marginTop:"3rem"

          }
    },
    photoLayout:{
        width:"50%",
        height:"100%"
    }
  }));


function About(props) {
    const classes = useStyles();
    const hidePhoto = useMediaQuery('(min-width:894px)');


    return (
        <div className={classes.aboutMainLayout}>
            <div className={classes.aboutSecondLayout}>
                <motion.div className={classes.textLayout}
                variants={aboutTextAnimate}
                initial="hidden"
                animate="show"
                >
                    <AboutTitle />
                    <AboutInfo />
                    <AboutDetails />
                </motion.div>
                { hidePhoto &&
                <div className={classes.photoLayout}>
                    <AboutPhoto />
                </div>
                }
            </div>
        </div>
    );
}

export default About;