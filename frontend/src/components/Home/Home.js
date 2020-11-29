import React from 'react';
import ContentImage from './ContentImage'
import ImageSlider from './ImageSlider/ImageSlider'
import Articles from './Articles/Articles'
import { motion } from 'framer-motion'
import { homeContentAnimate } from './../../variants'


/*const homeContentAnimate = {
    hidden: {opacity: 0},
    show: {opacity: 1,
    transition: {
      duration: 1.5,
      delayChildren: 1
    }}
  }
*/

function Home() {
    return (
        <motion.div
        variants={homeContentAnimate}
        initial="hidden"
        animate="show" >
            <ContentImage/>
            <motion.div
            variants={homeContentAnimate}>
                <ImageSlider />
            </motion.div>
            <Articles />
        </motion.div>
    );
}

export default Home;