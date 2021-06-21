import React, { useEffect } from 'react';
import Burger from './Burger';
import Tooltip from '@material-ui/core/Tooltip';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import { makeStyles } from "@material-ui/core"
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Logo from '../src/assets/castle_nagoya_6246.png'; 

const useStyles = makeStyles({
  icon: {
    fontSize: 'calc(8px + 0.7vmax)',
    '&:hover': {
      color: '#ffffff',
    }
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={Logo} alt="logo"/>
        <p style={{textShadow: '2px 2px hsl(0deg 0% 0% / 20%)'}}>Mizue O'Bara</p>
      </header>
      <Router>
        <div style={{}}>
          <Burger/>
        </div>
      </Router>
      <div className="App-footer">
        <p className="iconContainer"><CopyrightIcon className={classes.icon}/></p>
        <p>2021 Mizue O'Bara, All rights reserved.</p>
        <p className="iconContainer"><a style={{color:'#000'}} href="https://github.com/mobara121"><GitHubIcon className={classes.icon}/></a></p>
        <p className="iconContainer"><a style={{color:'#000'}} href="https://www.linkedin.com/in/mizueobara/"><LinkedInIcon className={classes.icon}/></a></p>
        <p className="iconContainer">
          <Tooltip title="mizueo121@gmail.com" placement="top">
            <MailIcon className={classes.icon}/>
          </Tooltip>
        </p>
      </div>
    </div>
  );
}

export default App;
