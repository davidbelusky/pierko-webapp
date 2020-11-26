import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Article from './Article'
import img1 from './../../../images/img1.jpeg'
import img2 from './../../../images/img2.jpeg'
import img3 from './../../../images/img3.jpeg'
import img4 from './../../../images/img4.jpeg'




const useStyles = makeStyles((theme) => ({
    articlesLayout: {
      maxWidth:"1400px",
      margin: "0 auto",
    },
  }));

export default function Articles() {
    const classes = useStyles();
    const textArticle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but al"

    const articles = [{"title":"Lorem Ipsum is simply","text":textArticle,"image":img1,flexPosition:"flex-start"},
                        {"title":"Lorem Ipsum is simply","text":textArticle,"image":img2,flexPosition:"flex-end"},
                        {"title":"Lorem Ipsum is simply","text":textArticle,"image":img4,flexPosition:"flex-start"},
                        {"title":"Lorem Ipsum is simply","text":textArticle,"image":img3,flexPosition:"flex-end"}


                        ]

    return (
        <div className={classes.articlesLayout}>
            <Grid container direction="column" justify="center" alignItems="center">
                {articles.map((item,i) => <Article data={item}/>)}

                
            </ Grid>
        </div>
    )
}
