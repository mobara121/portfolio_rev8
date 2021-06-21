import React, {useState} from 'react';
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    burger:{
        width:'2rem',
        height:'2rem',
        position:'fixed',
        top:'8px',
        right: '20px',
        zIndex:20,
        display: 'flex',
            justifyContent:'space-around',
            flexFlow:'column nowrap'
    },
    line:{
        width:'2rem',
        height:'0.3rem',
        borderRadius: '50%',
        transformOrigin:'1px',
        transition:'all 0.3s linear',
        backgroundColor:'#000',
        boxShadow: '2px 2px hsl(0deg 0% 0% / 20%)'
    }
})

function Burger(){
    const classes = useStyles();
    const [open, setOpen] =useState(false);
    
    return(
        <>
            <div className={classes.burger} open={open} onClick={()=>setOpen(!open)}>
                <div className={classes.line} style={open? { transform:'rotate(45deg)'} : {transform:'rotate(0)'} } />
                <div className={classes.line} style={open? { transform:'translateX(100%)', opacity:0} : {transform:'translateX(0)', opacity:1, height:'0.31rem'} }/>
                <div className={classes.line} style={open? { transform:'rotate(-45deg)'} : { transform:'rotate(0)'} }/>
            </div>
            <Navbar open={open} setOpen={setOpen}/>
        </>
    )
}

export default Burger;