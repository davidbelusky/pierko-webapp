import React from 'react';
import Carousel from 'react-elastic-carousel'
import ImageSliderCard from './ImageSliderCard'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import img1 from '../../../images/img1.jpeg'
import img2 from '../../../images/img2.jpeg'
import img3 from '../../../images/img3.jpeg'
import img4 from '../../../images/img4.jpeg'



const useStyles = makeStyles((theme) => ({
    carouselBoxMain: {
        width: "100%",
        display:'flex',
        justifyContent: 'center',
        marginTop: "3rem",
        marginBottom: "3rem"
    },
    carouselBox:{
        width: '70%',
        '@media (max-width: 632px)': {
            width: "100%",
          },
          '@media (max-width: 1600px)': {
            width: "90%",
          },
    }
  }));

function ImageSlider(props) {
    const imgList = [img1,img2,img3,img4]
    const classes = useStyles();
    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 650, itemsToShow: 2},
        {width: 1000, itemsToShow: 3},
        {width: 1500, itemsToShow: 6},
]
    return (
        <Box className={classes.carouselBoxMain}>
            <Box className={classes.carouselBox}>
                <Carousel className={classes.carousel} breakPoints={breakPoints}>
                    {imgList.map((item,i) => <ImageSliderCard imagePath={item}/>)}
                </Carousel>
            </Box>
        </Box>
    );
}

export default ImageSlider;