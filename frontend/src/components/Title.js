import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const font =  "'Xanh Mono', monospace";


const useStyles = makeStyles((theme) => ({
    title: {
      fontFamily: font,
    },
    titleBox: {
        display: "flex",
        justifyContent: "center",
        marginTop: "3rem",

    }
  }));

function Title() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.titleBox}>
                <Typography className={classes.title} variant="h1" component="h1">
                    Pierko
                </Typography>
            </Box>
        </div>
    );
}

export default Title;