import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { findAllByDisplayValue } from '@testing-library/react';


const useStyles = makeStyles((theme) => ({
    formLayout: {
        display:"flex",
        flexDirection: "column",
        alignItems:"center"
    },
    inputs:{
        width:"80%",
        marginBottom:"1rem"
    },
    sendButtonLayout:{
        width:"80%",
        display: "flex",
        justifyContent: "center"
    },
    sendButton:{
        width:"40%"
    }
    
  }));

function ContactEmail(props) {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formLayout}>
                <TextField className={classes.inputs} id="outlined-basic" label="Name" variant="outlined" />
                <TextField className={classes.inputs} id="outlined-basic" label="Email" variant="outlined" />
                <TextField className={classes.inputs} id="outlined-multiline-static" rows={5} multiline label="Email message" variant="outlined" />
                <div className={classes.sendButtonLayout}>
                    <Button className={classes.sendButton} variant="outlined">Send</Button>
                </div>
            </FormControl>
            
        </div>
    );
}

export default ContactEmail;