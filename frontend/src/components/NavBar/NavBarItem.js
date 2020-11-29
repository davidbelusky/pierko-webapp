import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navButtonAnimate } from './../../variants'



const useStyles = makeStyles((theme) => ({
    menuItem: {
        marginRight: 30,
        color: "black",
        fontSize: "1.2rem",
    },
  }));


function NavBarItem(props) {
    const classes = useStyles();

    return (
        <motion.div
        whileHover={{
            scale: 1.2,
            color: "red",
            transition: { duration: 0.2 },
          }}>
            <MenuItem className={classes.menuItem} component={Link} to={props.menuLink}>
                {props.menuName}
            </MenuItem >
        </motion.div>
    );
}

export default NavBarItem;