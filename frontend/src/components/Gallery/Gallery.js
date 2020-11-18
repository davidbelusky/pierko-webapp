import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import GalleryFilter from './GalleryFilter/GalleryFilter'
import GalleryCards from './GalleryCards/GalleryCards'

function Gallery() {

    return (
        <div>
            <GalleryFilter />
            <GalleryCards />
        </div>
    );
}

export default Gallery;