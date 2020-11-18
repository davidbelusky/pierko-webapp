import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FilterButton from './FilterButtons'

const useStyles = makeStyles((theme) => ({
    mainGalleryFilterLayout: {
      display:"flex",
      justifyContent: "center",
      marginTop: "3rem"
    },
    galleryFilterLayout: {
        display: "flex",
        height: "3rem",
    },
    filterAllButton:{
        height: "100%",
        width: "5rem"
    }

  }));

function GalleryFilter(props) {
    const classes = useStyles();
    const filterButtons = [{"name":"Cup"},{"name":"Picture"},{"name":"Flowerpot"}]

    return (
        <Box className={classes.mainGalleryFilterLayout}>
            <Box className={classes.galleryFilterLayout}>
                <Button variant="outlined" className={classes.filterAllButton}>
                    All
                </Button>
                {filterButtons.map((item,i) => <FilterButton button={item}/>)}
            </Box>
        </Box>
    );
}

export default GalleryFilter;