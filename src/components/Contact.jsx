import React, {useEffect} from 'react'
import { makeStyles} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import { textAlign } from '@material-ui/system';
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com';

const useStyles = makeStyles({
    input: {
        margin: '0 1vw 3vh 1vw ',
        height: '5vh',
        paddingLeft: '1vw',
        border: '2px solid rgb(255, 255, 255)',
        borderRadius: '2px',
        '&:hover':{
            boxShadow:'0px 12px 18px -6px rgba(0, 0, 0, 0.3)'
        }
    },
    btn: {
        // backgroundColor:'rgba(0, 0, 0, 0.5)'
        opacity: 0.5
    },
    iconLink:{
        color: '#fff',
        // fontWeight: '900',
        // textDecoration: 'none',
        // fontFamily: 'Josefin Slab, serif',
        // fontSize: '1.2rem',        
        
    },
    icon:{
        width:'2em',
        fontSize: '2rem',
        color: 'rgba(0, 0, 0, 1)',
        transitionDuration: '0.6s',
        
        '&:hover':{ color: '#BCDBDB',fill:'#c398ac', fontSize:'2.1rem'}
    },
    sendBtn:{
        width:'35px', margin:'0 auto', backgroundColor:'#c398ac', border:'1px solid #c398ac', borderRadius:'2px', padding:"0 1px", marginTop:'2vh', 
        '&:hover':{
            backgroundColor:'#fff', border:'1px solid #fff', borderRadius:'2px',boxShadow:'0px 12px 18px -6px rgba(0, 0, 0, 0.3)'
        }
    },
    maiIcon:{
        
        fill:"#fff",
        '&:hover':{fill:"#c398ac"}
    }
})

const Contact = () => {
    const classes = useStyles();

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_1uscbkp', e.target, 'user_acxrY5eiCbEwaTKG8uSDa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert('Your message was sent to Mizue. Thank you!')
      }

    return (
        <div style={{margin:"15vh 0 0 0"}}>
            <div style={{margin:'0vh 6vw'}}>
                <div>
                    <div data-aos="flip-up"  style={{fontSize:'calc(1rem + 1.1vmax)', textShadow:'2px 2px hsl(0deg 0% 0% / 20%)'}}>Mizue O'Bara</div>
                    <div data-aos="flip-up"  style={{fontSize:'calc(0.8rem + 0.9vmax)',textShadow:'2px 2px hsl(0deg 0% 0% / 20%)'}}>mizueo121@gmail.com</div>                   
                </div>
                <div data-aos="flip-up"  style={{margin: '1vh auto'}}>
                            <IconButton className={classes.btn}><a className={classes.iconLink} href="https://github.com/mobara121"><GitHubIcon className={classes.icon}/></a></IconButton>
                            <IconButton className={classes.btn}><a className={classes.iconLink} href="https://www.linkedin.com/in/mizueobara/"><LinkedInIcon className={classes.icon}/></a></IconButton>
                </div>
                <div style={{fontSize: '1.5rem', margin:'10vh 6vw', }}>
                    <form onSubmit={sendEmail} style={{display:'flex', flexDirection:'column', width:'75vw', minWidth:'285px', maxWidth: '400px', margin:'0 auto'}}>
                        <input data-aos="flip-up"  placeholder="Name" type="name" name="name" className={classes.input}></input>
                        <input data-aos="flip-up" placeholder="Email" type="email" name="email"  className={classes.input}></input>
                        <input data-aos="flip-up" placeholder="Subject" type="subject" name="subject"  className={classes.input}></input>
                        <textarea data-aos="flip-up" placeholder="Your message" type="textarea" name="message"  className={classes.input} style={{height:'10vh', paddingTop: '1vh', fontSize:'0.6em'}}></textarea>
                        <button data-aos="flip-up" type="submit" value="Send" className={classes.sendBtn}><MailIcon className={classes.maiIcon}/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
