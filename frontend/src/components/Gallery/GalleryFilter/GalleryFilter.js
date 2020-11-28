import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FilterButton from './FilterButtons'
import {API_URL} from '../../../constants'
import { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FilterSelect from './FilterSelect'


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
    const filterSelectionType = useMediaQuery('(min-width:761px)');


    useEffect(() => {
        fetch(`${API_URL}api/gallery/category/`)
        .then(response => response.json())
        .then(data => setFilterButtons(data));
    },[]);

    function filterImages(selected_filter){
        if (selected_filter === "all") {
            props.setFilteredImages(props.images)
        }
        else {
            const filtered_images = props.images.filter(image => image.category_name === selected_filter)
            props.setFilteredImages(filtered_images)
        }
    }

    return (
        <Box className={classes.mainGalleryFilterLayout}>
            { filterSelectionType ?
            <Box className={classes.galleryFilterLayout}>
                <Button onClick={e => filterImages(e.target.innerText.toLowerCase())} variant="outlined" className={classes.filterAllButton}>
                    All
                </Button>
                {filterButtons.map((item,i) => <FilterButton button={item} filterImages={filterImages}/>)}
            </Box>
            :
            <FilterSelect filterButtons={filterButtons} filterImages={filterImages}/>
}
        </Box>
    );
}

export default GalleryFilter;