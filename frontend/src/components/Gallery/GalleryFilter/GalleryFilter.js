import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FilterButton from './FilterButtons'
import {API_URL} from '../../../constants'
import { useState, useEffect } from 'react';

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
    const [filterButtons, setFilterButtons] = useState([])

    useEffect(() => {
        fetch(`${API_URL}api/gallery/category/`)
        .then(response => response.json())
        .then(data => setFilterButtons(data));
    },[]);

    function filterImages(e){
        const button_name = e.target.innerText.toLowerCase()
        if (button_name === "all") {
            props.setFilteredImages(props.images)
        }
        else {
            const filtered_images = props.images.filter(image => image.category_name === button_name)
            props.setFilteredImages(filtered_images)
        }
    }

    return (
        <Box className={classes.mainGalleryFilterLayout}>
            <Box className={classes.galleryFilterLayout}>
                <Button onClick={filterImages} variant="outlined" className={classes.filterAllButton}>
                    All
                </Button>
                {filterButtons.map((item,i) => <FilterButton button={item} filterImage={filterImages}/>)}
            </Box>
        </Box>
    );
}

export default GalleryFilter;