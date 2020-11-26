import React from 'react';
import ContentImage from './ContentImage'
import ImageSlider from './ImageSlider/ImageSlider'
import Articles from './Articles/Articles'

function Home() {
    return (
        <div>
            <ContentImage />
            <ImageSlider />
            <Articles />
        </div>
    );
}

export default Home;