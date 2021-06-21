import React, {useState, useEffect} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    root: {
        maxWidth: '30%',
        minWidth: '290px',
        margin: '5px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'stretch',
    },
    activity: {
        textShadow: '2px 2px hsl(0deg 0% 0% / 20%)', backgroundColor:'#fff', fontSize:'1.3rem', borderRadius:'5px', '&:hover':{boxShadow:'0px 12px 18px -6px rgba(0, 0, 0, 0.3)'}
    }
})

const About = () => {
    const classes = useStyles();
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(true)
    const [open3, setOpen3] = useState(true)

    const handleOpenClick1=()=>{
        setOpen1(!open1);
    }
    const handleOpenClick2=()=>{
        setOpen2(!open2);
    }
    const handleOpenClick3=()=>{
        setOpen3(!open3);
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return (
        <div style={{display:'flex', flexDirection: 'column', margin:"auto 8vw"}}>
            <div style={{textAlign:'left', marginTop:'25vh', marginBottom: '5vh', textShadow: '2px 2px hsl(0deg 0% 0% / 20%)'}}>
                <p data-aos="fade-right" >Bilingual professional with a newfound passion for web/software development.</p>
                <p data-aos="fade-right" data-aos-delay="300">I have just finished the first phase and my new journey to become a full-stack developer at Eleven Fifty Academy.</p>
            </div>

            <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin:"3vh 0"}}>
                <div className={classes.root} data-aos="fade-up" data-aos-delay="400">
                    <CardContent>
                        <div className={classes.content}>
                            <Typography variant="h5" gutterBottom className={classes.activity}>
                                Activities in Japan
                                <IconButton
                                    onClick={handleOpenClick1}
                                    ><ExpandMoreIcon/>
                                </IconButton>
                            </Typography>
                            
                            {!open1?
                            <p style={{textAlign: 'left', fontSize:'1rem'}}>1994 - 1998 : Bachelor's degree, Agriculture, Shinshu University<br/><br/>1998 - 2005 : Research & Development, Ohayo Co., / Asahi Co., Ltd.<br/><br/>2008 - 2009 : Japanese/English Translator, Shimanami International<br/><br/>2009 - 2014 : Internal Auditor, Nitto Seimo Co., Ltd.</p>: ''}
                        </div>
                    </CardContent>
                </div>
                <div className={classes.root} data-aos="fade-up" data-aos-delay="550">
                    <CardContent>
                        <div className={classes.content}>
                            <Typography variant="h5" gutterBottom className={classes.activity}>
                                Activities in US 
                                <IconButton
                                    onClick={handleOpenClick2}
                                    ><ExpandMoreIcon/>
                                </IconButton>
                            </Typography>
                            
                            {!open2 ?
                            <p style={{textAlign: 'left', fontSize:'1rem'}}>2015 - 2016 : Data ( POI ) Analyst, Apple Inc., Contract<br/><br/>2016 - 2017 : Executive Assistant, Nachi America Inc.<br/><br/>2017 - 2020 : Administrative Assistant, Tsuda USA Corporation</p> : ''}
                        </div>
                    </CardContent>
                </div>
                <div className={classes.root} data-aos="fade-up" data-aos-delay="700">
                    <CardContent>
                        <div className={classes.content}>
                            <Typography variant="h5" gutterBottom className={classes.activity}>
                                Coding Boot Camp 
                                <IconButton
                                    onClick={handleOpenClick3}
                                    ><ExpandMoreIcon/>
                                </IconButton>
                            </Typography>                            
                            {!open3?
                            <Typography>                            
                            <p style={{textAlign: 'left', fontSize:'0.9rem'}}>
                            •	Creating responsive web pages with <strong>HTML5</strong> and <strong>CSS3</strong><br/>
                            •	Extending site capabilities with <strong>JavaScript</strong> (Object-oriented language)<br/>
                            •	Applying Front-end JavaScript frameworks such as <strong>React.js</strong>, <strong>Bootstrap</strong>, and <strong>material-UI</strong><br/>
                            •	Building Integrated web applications with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>PostgreSQL</strong> database<br/>
                            •	<strong>SQL</strong> coding and table design for relational databases<br/>
                            •	<strong>APIs</strong> that perform database operations to create, read, update & delete data from tables<br/>
                            •	Advanced <strong>APIs</strong> that use parameters and complex queries to retrieve data from tables<br/></p></Typography> : ''}
                        </div>
                    </CardContent>
                </div>
            </div>
        </div>
    )
}

export default About
