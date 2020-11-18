import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GalleryCard from './GalleryCard'
import img1 from '../../../images/img1.jpeg'
import img2 from '../../../images/img2.jpeg'
import img3 from '../../../images/img3.jpeg'
import img4 from '../../../images/img4.jpeg'



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
    const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    const cardInfos = [{"title":"Christmass Cup","details":lorem,"image":img1},{"title":"Nature Picture","details":lorem,"image":img2},
    {"title":"Black Cup","details":lorem,"image":img3},{"title":"Africa Picture","details":lorem,"image":img4},{"title":"Cup","details":lorem,"image":img1},
    {"title":"Red Flowerpot","details":lorem,"image":img2}]

    return (
        <Box className={classes.mainGalleryCards}>
            <Box className={classes.galleryCards}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                {cardInfos.map((item,i) => <GalleryCard data={item}/>)}

            </Grid>

                
            </Box>
        </Box>
    );
}

export default GalleryCards;