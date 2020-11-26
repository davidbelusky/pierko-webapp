import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import about_image from '../../images/static/about_image.jpg'


const useStyles = makeStyles((theme) => ({
    photoLayout: {
        display:"flex",
        justifyContent:"center",
        height:'40rem'
    },
    photo: {
        marginTop:"1rem",
        backgroundImage: `url(${about_image})`,
        height: "100%",
        width: "20rem",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position:"relative"
      },
  }));

function AboutPhoto(props) {
    const classes = useStyles();

    return (
        <div className={classes.photoLayout}>
            <div className={classes.photo}></div>
        </div>
    );
}

export default AboutPhoto;