import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Menu } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
  },
  formControl: {
    minWidth: 200,
  },
  selectStyle: {
      fontSize: "2rem"
  }
}));

export default function FilterSelect(props) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('All');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    props.filterImages(event.target.value.toLowerCase())
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Filter</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filter}
          onChange={handleChange}
          className={classes.selectStyle}
        > 
        <MenuItem value="All"> All </MenuItem>
        {props.filterButtons.map((item,i) => <MenuItem value={item.category_name}> {item.category_name} </MenuItem>)}
        
        </Select>
      </FormControl>
    </div>
  );
}
