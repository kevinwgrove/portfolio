import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { Fade, 
    Grow,
    TextField, 
    Typography, 
    makeStyles, 
    Button,
    Fab, 
    useScrollTrigger,
    Zoom } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons"
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../keys/index'
import './Contact.css'

const useStylesCustom = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fff',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        color: '#000',
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }));

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    name: {
        margin: '10px',
        flexGrow: '1',
    },
    email: {
        margin: '10px',
        width: '70%'
    },
    subject: {
        margin: '10px',
        flexGrow: '1'
    },
    message: {
        margin: '10px',
        flexGrow: '1'
    }, 
    button: {
        margin: '10px',
        width: '30%'
    },
    topAnchor: {
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

function CustomTextField(props) {
    const classes = useStylesCustom();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.topAnchor}>
          {children}
        </div>
      </Zoom>
    );
  }

export const Contact = (props) => {
    const classes = useStyles()

    const [sent, setSent] = useState(false)

    const sentConfirmed = () => {
        setSent(true)
        setTimeout(() => setSent(false), 7000)
    }

    const sentMessage = () => {
        return (
            <div className="message-sent text-white">
                <Fade
                in={sent}
                timeout={2000}
                exit={5000}
                >
                    <Typography
                    variant="h6"
                    >
                        Your message has been sent. I will get back to you as soon as I can. Thank you! -Kevin
                    </Typography>
                </Fade>
            </div>
        )
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            sentConfirmed()
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <>
            <div id="contact-container">
                <Fade
                    in={true}
                    timeout={1000}
                >
                    <Typography
                        className="text-white contact-heading"
                        variant='h2'
                        style={{
                            marginBottom: '10px'
                        }}
                    >
                        Contact Form 
                    </Typography>

                </Fade>

                
                
                    <Typography
                        className="text-white roboto"
                    >
                        You can always call me @ <a href="tel:+13176279559" className="text-white">(317) 627-9559</a>
                    </Typography>

                    <Typography
                        className="text-white roboto"
                    >
                        Our shoot me a <a href="sms://+13176279559" className="text-white roboto">text</a>
                    </Typography>
                
                {   sent ? 
                    (sentMessage()) :
                    (
                        <div className="message-sent text-white">
                        
                        </div>
                    )
                }

                <form 
                    className="form"
                    onSubmit={sendEmail}
                >

                    <div className="name-container">
                        <Grow
                            in={true}
                            timeout={1000}
                        >
                            <CustomTextField
                                label="First Name"
                                className={classes.name}
                                variant="filled"
                                id="first-name"
                                name="first-name"
                                required
                                />
                        </Grow>

                        <Grow
                            in={true}
                            timeout={1000}
                        >
                            <CustomTextField
                                label="Last Name"
                                className={classes.name}
                                variant="filled"
                                id="last-name"
                                name="last-name"
                                required
                            />
                        </Grow>
                    </div>
                    
                    <div className="email-container">
                    <Grow
                        in={true}
                        timeout={1500}
                    >
                        <CustomTextField
                            label="Email"
                            className={classes.email}
                            variant="filled"
                            id="email"
                            name="email"
                            required
                        />
                    </Grow>
                    </div>

                    <Grow
                        in={true}
                        timeout={2000}
                    >
                        <CustomTextField
                            label="Subject"
                            className={classes.subject}
                            variant="filled"
                            id="subject"
                            name="subject"
                            required
                        />
                    </Grow>

                    <Grow
                        in={true}
                        timeout={2000}
                    >
                    <CustomTextField
                        label="Message"
                        className={classes.message}
                        multiline
                        rows={10}
                        variant="filled"
                        id="message"
                        name="message"
                        required
                        />
                    </Grow>

                    <div className="button-container">
                        <Grow
                            in={true}
                            timeout={2500}
                        >
                        <Button 
                            type="submit"
                            variant="contained"
                            className={classes.button}
                        >
                            Submit
                        </Button>
                        </Grow>
                    </div>
        
                </form>
            </div>
            <ScrollTop {...props}>
                <Fab color="default" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </>
    )
}