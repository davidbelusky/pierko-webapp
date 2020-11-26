import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Room } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    detailLayout: {
        display:"flex",
        width: "80%",
        marginBottom: "2.5rem"

    },
    iconDetail: {
        flexGrow: 1
    },
    textDetailLayout: {
        flexGrow: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
  }));

function ContactDetails(props) {
    const classes = useStyles();
    const iconObject = props.iconObject

    return (
        <div className={classes.detailLayout}>
        {iconObject}
        <div className={classes.textDetailLayout}>
            <Typography variant="subtitle1" component="h2">
                {props.mainText}
            </Typography>
            <Typography variant="subtitle2" component="h2">
                {props.secondText}
            </Typography>
        </div>
    </div>
    );
}

export default ContactDetails;