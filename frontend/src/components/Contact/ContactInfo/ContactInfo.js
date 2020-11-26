import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Room,MailOutline,Phone } from '@material-ui/icons';
import ContactDetails from './ContactDetails'
import Divider from '@material-ui/core/Divider';
import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    detailsMainLayout:{
        display:"flex",
        flexDirection: "column",
        alignItems:"center"

    },
    dividerInfo:{
        width:"100%",
        height:"1px"
    },
    socialIcons: {
        marginTop: "1rem",
        "& svg": {
            color:"black",
            marginLeft:"0.8rem",
            fontSize:"2rem"
        },
      flex:1,
      display: "flex",
      justifyContent: "right"
    },
  }));

function ContactInfo(props) {
    const classes = useStyles();
    const detailsList = [{"mainText":"Hlavna 22","secondText":"Bratislava","icon":Room},
                        {"mainText":"0905 111 222","icon":Phone},
                        {"mainText":"testing@gmail.com","icon":MailOutline}]

    return (
        <div className={classes.detailsMainLayout}>
            {detailsList.map((item,i) => <ContactDetails iconObject={<item.icon fontSize="large"/>} mainText={item.mainText} secondText={item.secondText}/>)}
            <Divider className={classes.dividerInfo}/>
            <div className={classes.socialIcons}>
                <Facebook />
                <Instagram />
                <Twitter />
                <YouTube />
            </div>

        </div>
    );
}

export default ContactInfo;