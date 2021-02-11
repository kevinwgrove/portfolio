import React, { useRef, useState } from "react";
import "./Background.css"
import { Fade,
    Grow,
    Typography,
    Button } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Carousel from 'react-material-ui-carousel'

export const Background = () => {
    const [index, setIndex] = useState()

    // const backgroundCarousel = useRef(null)
    // const backgroundSlider = useRef(null)

    // let direction = 1

    // const photos = [
    //     'bar-iberre.jpg',
    //     'bar-iberre2.jpg',
    //     'bilbao.jpg',
    //     'cincy-bfy.jpg',
    //     'gernika.jpg',
    //     'Palladium copy.jpg'
    // ]

    // const backgroundPrev = (e) => {
    //     e.stopPropagation()
    //     if (direction === 1) {
    //         backgroundSlider.current.appendChild(backgroundSlider.current.firstElementChild)
    //     }
    //     console.log("Slider Background: ", backgroundSlider.current)
    //     console.log("Carousel Background: ", backgroundCarousel.current)
    //     direction = -1
    //     backgroundCarousel.current.style.justifyContent = 'flex-end'
    //     backgroundSlider.current.style.transform = 'translate(33%)'
    // }

    // const backgroundNext = (e) => {
    //     e.stopPropagation()
    //     if (direction === -1) {
    //         backgroundSlider.current.prepend(backgroundSlider.current.lastElementChild)
    //     }
    //     console.log("Slider Background: ", backgroundSlider.current)
    //     console.log("Carousel Background: ", backgroundCarousel.current)
    //     direction = 1
    //     backgroundCarousel.current.style.justifyContent = 'flex-start'
    //     backgroundSlider.current.style.transform = 'translate(-33%)'
    // }

    // const backgroundAppend = () => {
    //     if (direction === 1) { 
    //         backgroundSlider.current.appendChild(backgroundSlider.current.firstElementChild)
    //     } else if (direction === -1) { 
    //         backgroundSlider.current.prepend(backgroundSlider.current.lastElementChild)
    //     }
    //     backgroundSlider.current.style.transition = 'none'
    //     backgroundSlider.current.style.transform = 'translate(0)'
    //     setTimeout(() => {backgroundSlider.current.style.transition = 'all 0.75s'})
    // }

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
                            id='background-container'
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

                        <div
                            id='background-carousel-container'
                        >
                            <Carousel
                                autoPlay={false}
                                id="background-carousel"
                                animation={'slide'}
                                timeout={1000}
                                swipe={true}
                                navButtonsAlwaysVisible={false}
                                index={0}
                                onChange={(index) => setIndex(index)}
                            >
                                <div>
                                            1
                                        </div>
                                        <div>
                                            2
                                        </div>
                                        <div>
                                            3
                                        </div>
                                        <div>
                                            4
                                        </div>
                                        <div>
                                            5
                                        </div>
                            </Carousel>
                        </div>
                        </div>

                    </div>

            {/* </Fade> */}
        </>
    )
}






{/* <div 
                                id="background-carousel-container"
                            >
                                <div 
                                    className="carousel-background"
                                    ref={backgroundCarousel}
                                >
                                    <div 
                                        className="slider-background"
                                        onTransitionEnd={backgroundAppend}
                                        ref={backgroundSlider}
                                    >
                                        <div>
                                            1
                                        </div>
                                        <div>
                                            2
                                        </div>
                                        <div>
                                            3
                                        </div>
                                        <div>
                                            4
                                        </div>
                                        <div>
                                            5
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id='background-controls'
                                >
                                    <div
                                        className='arrow-span-background arrow-left-background'
                                    >
                                        <Button
                                            className='button-background'
                                            variant='contained'
                                            onClick={(event) => backgroundPrev(event)}
                                        >
                                            <ChevronLeft 
                                                className="arrow-back-background"
                                            />
                                        </Button>

                                    </div>

                                    <div
                                        className='arrow-span-background arrow-right-background'
                                    >
                                        <Button
                                            className='button-background'
                                            variant='contained'
                                            onClick={(event) => backgroundNext(event)}
                                        >
                                            <ChevronRight 
                                                className="arrow-forward-background"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div> */}