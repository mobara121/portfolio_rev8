import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProjectData } from './ProjectData';
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(7),
    },
    root: {
      maxWidth: '100%',
      '&:hover':{
          boxShadow:'0px 12px 18px -6px rgba(0, 0, 0, 0.3)'
      }
    },
    media: {
      height: 0,
      paddingTop: '66.66%',
    },
    cardContent: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
      },
    cardAction: {
        display:'flex',
        flexDirection: 'column',
        textAlign:'left',
        background:'rgba(0,0,0,0.1)'
    },
    mediaCover:{
        height: 100,
        paddingTop: '66.66%',
        backgroundColor: "rgba(0,0,0,0.3)",
        // position:"absolute",
        left: '50%',
        top: '50%',
        transform:'translate(-50%, -50%)',
        disply:'inline-block'
    }
  }));


const Project = () => {
    const classes = useStyles();

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>                
            {ProjectData.map((project, id)=>{
                return(
                    <Grid data-aos="fade-up" item key={project.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}>
                        <CardActionArea>
                           <a href={project.url}> 
                            <CardMedia
                            className={classes.media}
                            image={project.image}
                            title={project.title}
                            /></a>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2" style={{textShadow: '2px 2px hsl(0deg 0% 0% / 20%)'}}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.discription}
                                </Typography>
                            </CardContent>
                            {/* <div className={classes.mediaCover}></div> */}
                        </CardActionArea>
                        <CardActions className={classes.cardAction}>
                            <Typography style={{textAlign:'left'}} size="small" color="secondry">
                            Skills & Tools
                            </Typography>
                            <Typography style={{fontSize: '0.825rem'}}>{project.skill}</Typography>
                        </CardActions>
                        
                        </Card>                        
                    </Grid>)
                })}
            </Grid>
            <div className={classes.toolbar} />
        </div>
    )
}

export default Project
