import React from 'react';
import GalleryFilter from './GalleryFilter/GalleryFilter'
import GalleryCards from './GalleryCards/GalleryCards'
import {API_URL} from '../../constants'
import { useState, useEffect } from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";



function Gallery() {
    const [galleryImages, setGalleryImages] = useState([])
    const [filteredImages, setFilteredImages] = useState([])


    useEffect(() => {
        fetch(`${API_URL}api/gallery/`)
        .then(response => response.json())
        .then(data => {
            setGalleryImages(data)
            setFilteredImages(data)
        })
    },[]);

    return (
        <div>
            <GalleryFilter filteredImages={filteredImages} setFilteredImages={setFilteredImages} images={galleryImages}/>
            <SimpleReactLightbox>
                <SRLWrapper>
                <   GalleryCards images={filteredImages}/>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    );
}

export default Gallery;