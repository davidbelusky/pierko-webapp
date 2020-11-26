import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import banner from './../images/static/banner.png'

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
        <div>
            <Box className={classes.titleBox}>
            </Box>
        </div>
    );
}

export default Title;