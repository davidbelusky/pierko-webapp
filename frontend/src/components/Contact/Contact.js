import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ContactEmail from './ContactEmail'
import ContactInfo from './ContactInfo/ContactInfo'

const useStyles = makeStyles((theme) => ({
    contactMainLayout: {
        height: '100vh',
        display: 'flex',
        flexDirection:"column",
        alignItems:"center"
    },
    contactSecondLayout:{
        height:"100%",
        width:"70%",
        display:"flex",
        '@media (max-width: 1084px)': {
            width: "100%",
          },
    },
    emailLayout:{
    },
    contactLayout:{
    },
    helpContactLabel:{
        marginTop: "2rem",
        marginBottom: "0.5rem"
    },
    dividerContact:{
        width:"100%",
        height:"1px",
        marginBottom:"3rem"
    },
    infoContactLayout:{
        marginBottom: "0.5rem",
        maxWidth: "600px",
        paddingLeft: "2rem",
        paddingRight: "2rem"

    },
    infoContactLabel: {
        fontSize:"1rem"
    }
  }));

function Contact(props) {
    const classes = useStyles();

    return (
        <div className={classes.contactMainLayout}>
                <Typography className={classes.helpContactLabel} variant="h5" component="h5">
                    Need help? Please contact us!
                </Typography>
                <div className={classes.infoContactLayout}>
                <Typography className={classes.infoContactLabel} variant="subtitle2" component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard when an unknown printer took a galley of type and scrambled it to dummy text ever since the 1500s
                </Typography>
                </div>
                <Divider className={classes.dividerContact}/>
            <div className={classes.contactSecondLayout}>
                <Grid container justify="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.emailLayout}>
                            <ContactEmail />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.contactLayout}>
                            <ContactInfo />
                        </div>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    );
}

export default Contact;