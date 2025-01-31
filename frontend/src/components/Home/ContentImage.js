import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContentImageFile from '../../images/cover.jpeg'

const useStyles = makeStyles((theme) => ({
    contentImageBox: {
      marginTop:"0.5rem",
      backgroundImage: `url(${ContentImageFile})`,
      height: "50vh",
      width: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position:"relative",
    },
  }));

function ContentImage(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.contentImageBox}>
        </div>
    );
}

export default ContentImage;