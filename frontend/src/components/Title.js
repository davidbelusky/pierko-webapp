import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import banner from './../images/static/banner.png'
import { titleAnimate } from './../variants'
import { motion } from 'framer-motion'


const font =  "'Xanh Mono', monospace";


const useStyles = makeStyles((theme) => ({
    title: {
      fontFamily: font,
    },
    titleBox: {
        display: "flex",
        justifyContent: "center",
        height:"100px",
        backgroundImage: `url(${banner})`,

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

    }
  }));

function Title() {
    const classes = useStyles();

    return (
        <motion.div
        variants={titleAnimate}
        initial="hidden"
        animate="show"
        >
            <Box className={classes.titleBox}>
            </Box>
        </motion.div>
    );
}

export default Title;