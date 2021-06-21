import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project/Project';
import Contact from './components/Contact';
import {makeStyles} from '@material-ui/core';
import styled from 'styled-components'

const Ul = styled.ul`
    list-style: none;
    display:flex;
    flex-direction:column;
    min-width: 65px;
    max-width: 80px;
    /* margin: 10 auto; */
    z-index: 2;
    justify-content: start;
    position: fixed;
    /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; */
    /* transform: ${({ open }) => open ? 'scale(1) translate(0%, 0%)' : 'scale(0.5) translate(500%, -500%)'}; */
    transform: ${({ open }) => open ? 'rotateY(0) translateX(0) scaleX(1)' : 'rotateY(180deg) translateX(-200%) scaleX(0)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 8vw;
    padding: 3rem 0;
    transition: transform 1.3s ease-in-out;
    background-color: rgba( 185, 134, 117, 0.8);
    /* border-radius: 0 0 0 100%; */
`;

const useStyles = makeStyles({
    link:{
        // fontFamily: 'Hannari',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        color: 'rgb(0, 0, 0)',
        textDecoration: 'none',
        marginLeft: '1vw',
        fontSize: 'calc(9px + 2vmin)',
        '&:hover':{
            fontSize:'calc(10px + 2vmin)',
            fontWeight: 'bold',
            color: '#fff'
        }
    },
    link_p:{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        margin: '20px',
        // marginRight: 0,
        // textAlign: 'start',
        fontSize: 'calc(8px + 1vmax)'
    }
})

const Navbar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <Ul open={props.open}>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/portfolio_rev7' className={classes.link}><p className={classes.link_p}>Home</p></Link> </li>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/about' className={classes.link}><p className={classes.link_p}>About</p></Link> </li>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/project' className={classes.link}><p className={classes.link_p}>Project</p></Link> </li>
                <li onClick={()=>props.setOpen(!props.open)}><Link to='/contact' className={classes.link}><p className={classes.link_p}>Contact</p></Link> </li>
            </Ul>
            <div>
                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/about'><About/></Route>
                    <Route exact path='/project'><Project/></Route>
                    <Route exact path='/contact'><Contact/></Route>
                    <Route exact path='/portfolio_rev7'><Home/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Navbar
