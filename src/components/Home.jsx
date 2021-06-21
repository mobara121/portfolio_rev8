import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
    Mizue:{
        fontSize:'calc(2em + 1.2vmax)',
        margin: 'auto 2vw',
        textShadow: '4px 4px hsl(0deg 0% 0% / 20%)'
    },
    Mizue_sub:{
        fontSize:'calc(0.9em + 1.1vmax)',
        margin: 'auto 2.5vw',
        textShadow: '4px 4px hsl(0deg 0% 0% / 20%)'
    }
})

const Home = () => {
    const classes = useStyles();

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return (
        <div style={{textAlign:'left', position:'absolute', top: '50%', transform: 'translate(-50%, -50%)', left:'50%', minWidth:'300px' }}>
            <div style={{border: '1rem double #fff', paddingBottom: '2vh'}}>
            <p data-aos="fade-right" className={classes.Mizue}>Mizue O'Bara</p>
            <p data-aos="fade-right" data-aos-delay="300" className={classes.Mizue_sub}>Full stack developer</p></div>
        </div>
    )
}

export default Home
