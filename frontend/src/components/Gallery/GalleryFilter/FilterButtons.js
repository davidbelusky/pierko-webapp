import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    filterButton:{
        height: "100%",
        width: "8rem"
    }

  }));

function FilterButtons(props) {
    const classes = useStyles();

    return (
        <div>
            <Button onClick={e => props.filterImages(e.target.innerText.toLowerCase())} variant="outlined" className={classes.filterButton}>
                {props.button.category_name}
            </Button>
        </div>
    );
}

export default FilterButtons;