import React, { useEffect, useState } from "react";
import { Card, 
    Fade, 
    Button, 
    Typography,
    Zoom, 
    Grow} from "@material-ui/core";
import { Close, Email, Call, Textsms } from "@material-ui/icons"
import './Home.css';
import { BounceLoader } from "react-spinners";
import ReactReadMoreReadLess from "react-read-more-read-less";


export const Home = () => {

    const [contact, setContact] = useState(false)

    return (
        <>
            <div
                id="home-container"
                className="text-white"
                onClick={() => {
                    if(contact){
                        setContact(false)
                    }
                }}
            >
                <div
                    className="info"
                >
                
                    <div
                        id="text-container"
                    >
                    
                        <Typography
                            className="roboto first-line text"
                        >
                            Hi, my name is
                        </Typography>
                    

                        <Typography
                            className="name nunito text w3-animate-opacity"
                            style={{
                                fontSize: "110px",
                            }}
                        >
                            Kevin Grove
                        </Typography>
                        
                        <div
                            id="paragraph-container"
                        >
                            <Typography
                                className="noto-sans paragraph text"
                            >
                                I'm a software engineer based in Indianapolis, IN. I specialize in building applications and websites as single/multi page application. Some languages and frameworks I've built with, but not limited to:
                            </Typography>

                        </div>

                            <Typography
                                className='ubuntu languages'
                            >
                                JavaScript, React, Redux, MOBX, Google Firebase, MongoDB, Python, Django, and more...
                            </Typography>

                    </div>
                    
                    <img 
                    src="images/Sofar.png" 
                    alt="Kevin Grove"
                    id="photo"
                    />
                
                </div>

                <div
                    id="contact-button-container"
                >
                    <Button
                        className="text-white button-home"
                        variant="contained"
                        onClick={() => setContact(!contact)}
                    >
                        {
                            !contact ?
                            "Get in touch"
                            :
                            <Close/>
                        }
                    </Button>
                </div>


            </div>
                    {
                        contact ?
                        <>
                            <Grow
                                in={true}
                                timeout={500}
                            >
                        <div
                            id="phantom-buttons-container"
                        >
                            <a href="mailto:kevinwilsongrove@gmail.com"
                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}
                            >
                                <Button
                                    className="text-white phantom-button nunito"
                                    variant="contained"
                                >
                                    <Email 
                                        style={{
                                            fontSize: "300%"
                                        }}
                                    />
                                </Button>
                            </a>

                            <a href="tel:+13176279559"
                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}
                            >
                                <Button
                                className="text-white phantom-button nunito"
                                variant="contained"
                                >
                                    <Call
                                        style={{
                                            fontSize: "300%"
                                        }}
                                    />
                                </Button>
                            </a>

                            <a href="sms://+13176279559"
                                style={{
                                    color: "white",
                                    textDecoration: "none"
                                }}
                            >
                                <Button
                                className="text-white phantom-button nunito"
                                variant="contained"
                                >
                                    <Textsms 
                                        style={{
                                            fontSize: "300%"
                                        }}
                                    />
                                </Button>
                            </a>    

                        </div>
                            </Grow>
                        </>
                        :
                        null
                    }
        </>
    )
}
