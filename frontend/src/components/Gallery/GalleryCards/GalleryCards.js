import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GalleryCard from './GalleryCard'

const useStyles = makeStyles((theme) => ({
mainGalleryCards: {
    display:"flex",
    justifyContent: "center",
    marginTop: "3rem"
},
galleryCards:{
    width:"80%",
}
}));

function GalleryCards(props) {
    const classes = useStyles();
    return (
        <Box className={classes.mainGalleryCards}>
            <Box className={classes.galleryCards}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                {props.images.map((item,i) => <GalleryCard data={item}/>)}
            </Grid>
            </Box>
        </Box>
    );
}

export default GalleryCards;