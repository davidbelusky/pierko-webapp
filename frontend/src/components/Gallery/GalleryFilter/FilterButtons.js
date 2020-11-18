import React from 'react';
import Box from '@material-ui/core/Box';
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
        <Box>
            <Button variant="outlined" className={classes.filterButton}>
                {props.button.name}
            </Button>
            
        </Box>
    );
}

export default FilterButtons;