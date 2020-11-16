import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';



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
        <div>
            <MenuItem className={classes.menuItem}>
                {props.menuName}
            </MenuItem >
        </div>
    );
}

export default NavBarItem;