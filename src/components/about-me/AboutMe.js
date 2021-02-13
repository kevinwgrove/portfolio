import React, {useRef} from "react";
import "./AboutMe.css"
import { Button, 
    Fade,
    Grow,
    Typography } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Background, Adventures, Hobbies } from "./about-me-components/index";



export const AboutMe = () => {
    

    return (
        <>
            <Fade
                in={true}
                timeout={1500}
            >
                <div
                    id='about-me-container'
                >
                    {/* <div className="controls">
                        <div
                            className='arrow-span-about-me arrow-left-about-me'
                        >
                            <Button
                                variant='contained'
                            >
                                <ChevronLeft 
                                    className="arrow-back-about-me"
                                />
                            </Button>

                        </div>

                        <div
                            className='arrow-span-about-me arrow-right-about-me'
                        >
                            <Button
                                className='button-about-me about-me-next'
                                variant='contained'
                            >
                                <ChevronRight 
                                    className="arrow-forward-about-me"
                                />
                            </Button>
                        </div>
                    </div> */}

                
                    <div className='text-white card'>
                        <Background />
                    </div>

                    <div className='text-white card'>
                        <Adventures />
                    </div>

                    <div className='text-white card'>
                        <Hobbies />
                    </div>
                      
                </div>

            </Fade>
        </>
    )
}

