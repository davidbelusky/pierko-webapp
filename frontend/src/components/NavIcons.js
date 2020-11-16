import React from 'react';
import Box from '@material-ui/core/Box';
import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
// Select all childs of social box
    socialBox: {
        "& svg": {
            color:"black",
            marginLeft:"0.8rem"
        },
      flex:1,
      display: "flex",
      justifyContent: "right"
    },
  }));

function NavIcons() {
    const classes = useStyles();

    return (
        <Box className={classes.socialBox}>
            <Facebook />
            <Instagram />
            <Twitter />
            <YouTube />
        </Box>
    );
}

export default NavIcons;