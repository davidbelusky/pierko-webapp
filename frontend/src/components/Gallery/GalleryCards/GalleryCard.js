import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Aos from 'aos'
import "aos/dist/aos.css"


const useStyles = makeStyles({
    cardContent:{
        height: "8rem",
    }
  });


function GalleryCard(props) {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return (
        <Grid data-aos="zoom-in" data-aos-once="true" data-aos-offset="10" data-aos-duration="1000"
         item xs={12} sm={6} md={4} xl={3}>
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.data.title}
                    height="300px"
                    width="100%"
                    image={props.data.gallery_image}
                    title={props.data.title}
                />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                {props.data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.data.details}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                I am interested
            </Button>
            </CardActions>
        </Card>
      </Grid>
    );
}

export default GalleryCard;