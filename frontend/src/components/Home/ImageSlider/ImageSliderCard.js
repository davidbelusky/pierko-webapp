import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() => ({
        card: props => ({
            height: "300px",
            width: "300px",
            backgroundImage: `url(${props.imagePath})`,
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            alignItems: "center",
            marginLeft: 15,
        }),
  }));

function ImageSliderCard(props) {
    const classes = useStyles(props);

    return (
        <Box className={classes.card}>
        </Box>
    );
}

export default ImageSliderCard;