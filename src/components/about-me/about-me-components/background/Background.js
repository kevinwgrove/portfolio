import React from "react";
import "./Background.css"
import { Fade,
    Grow,
    Typography } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";

export const Background = () => {
    


    return (
        <>
            {/* <Fade
                in={true}
                timeout={1500}
            > */}

                    <div
                        id="background-card"
                    >
                        <Typography
                            variant='h4'
                            className='text-white background-heading noto-sans-about-me'
                        >
                            Background
                        </Typography>

                        <div
                            id='background-body'
                        >
                            <Typography
                                className='text-white nunito'
                                id='background-text'
                            >
                                <div
                                    className='paragraph-about-me'
                                >
                                I chose what one might call a "non-traditional" route to my education.
                                I've been playing music since Kindergarten, so I thought it'd be appropriate to pursue a life of music.
                                I received my Bachelor's of Science in Music Technology at IUPUI in 2017.
                                </div>
                                
                                <div
                                    className='paragraph-about-me'
                                >
                                Before finally pursuing my degree I spent two years between 2010-2012 living in Bilbao, Spain. 
                                There I taught English to students of all ages, and occassionally play gigs in a duo. 
                                With the few phrases I knew before I moved, I can now say that I am fluent in Spanish.
                                </div>
                                
                                <div
                                    className='paragraph-about-me'
                                >
                                During my time at IUPUI I joined a local group (
                                    <a
                                        href="https://open.spotify.com/artist/4bAHFi3RQGvf7sl9vh6WyK"
                                        style={{
                                            color: 'white'
                                        }}
                                        target='_blank'
                                    >Bigfoot Yancey</a>
                                ) that plays original tunes and the occassional John Prine or Trampled by Turtles cover.
                                Due to COVID, we haven't been playing very often. 
                                </div>
                                
                                <div
                                    className='paragraph-about-me'
                                >
                                After getting my degree I spent about a year as a live sound engineer, building a music venue system from the ground up.
                                Soon after that, I took on a full-time gig at an A/V rental & staging company where I stumbled upon programming during their warehouse expansion project, and it quickly became an engaging passion.
                                </div>

                                <div
                                    className='paragraph-about-me'
                                >
                                Once I was laid off due to COVID, I took the opportunity to take advantage of <a
                                    href="https://www.kenzie.academy/"
                                    style={{
                                        color: 'white'
                                    }}
                                    target='_blank'
                                >
                                    Kenzie Academy's
                                </a> 1 year Full-Stack Software Engineering program, and the rest was history.

                                </div>
                            </Typography>
                            
                        </div>

                    </div>

            {/* </Fade> */}
        </>
    )
}