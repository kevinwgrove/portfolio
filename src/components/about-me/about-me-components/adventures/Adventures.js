import React, { useRef } from "react";
import "./Adventures.css"
import { Fade,
    Grow,
    Typography,
    Button } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Siema from 'siema'


export const Adventures = () => {
    const adventuresSlider = useRef(null)
    const adventuresCarousel = useRef(null)

    let direction = 1

    const adventuresPhotos = [
        'bar-iberre.jpg',
        'bar-iberre2.jpg',
        'bilbao.jpg',
        'cincy-bfy.jpg',
        'gernika.jpg',
        'Palladium copy.jpg'
    ]

    const adventuresPrev = (e) => {
        e.stopPropagation()
        if (direction === 1) {
            adventuresSlider.current.appendChild(adventuresSlider.current.firstElementChild)
        }
        console.log("Slider adventures: ", adventuresSlider.current)
        console.log("Carousel adventures: ", adventuresCarousel.current)
        direction = -1
        adventuresCarousel.current.style.justifyContent = 'flex-end'
        adventuresSlider.current.style.transform = 'translate(20%)'
    }

    const adventuresNext = (e) => {
        e.stopPropagation()
        if (direction === -1) {
            adventuresSlider.current.prepend(adventuresSlider.current.lastElementChild)
        }
        console.log("Slider adventures: ", adventuresSlider.current)
        console.log("Carousel adventures: ", adventuresCarousel.current)
        direction = 1
        adventuresCarousel.current.style.justifyContent = 'flex-start'
        adventuresSlider.current.style.transform = 'translate(-20%)'
    }

    const adventuresAppend = () => {
        if (direction === 1) { 
            adventuresSlider.current.appendChild(adventuresSlider.current.firstElementChild)
        } else if (direction === -1) { 
            adventuresSlider.current.prepend(adventuresSlider.current.lastElementChild)
        }
        adventuresSlider.current.style.transition = 'none'
        adventuresSlider.current.style.transform = 'translate(0)'
        setTimeout(() => {adventuresSlider.current.style.transition = 'all 0.75s'})
    }

    return (
        <>
            {/* <Fade
                in={true}
                timeout={1500}
            > */}

                    <div
                        id="adventures-card"
                    >

                        <div
                            id='adventures-container'
                        >

                            <Typography
                                variant='h4'
                                className='text-white adventures-heading adventures-noto-sans'
                            >
                                Adventures
                            </Typography>

                            <div 
                                id="adventures-carousel-container"
                            >
                                <div 
                                    className="adventures-carousel"
                                    ref={adventuresCarousel}
                                >
                                    <div 
                                        className="adventures-slider"
                                        onTransitionEnd={adventuresAppend}
                                        ref={adventuresSlider}
                                    >
                                        <div>
                                            <img 
                                                src={`images/background/${adventuresPhotos[0]}`} 
                                                alt="Bar Iberre"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${adventuresPhotos[1]}`} 
                                                alt="Bar Iberre"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${adventuresPhotos[2]}`} 
                                                alt="Bar Iberre"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${adventuresPhotos[3]}`} 
                                                alt="Bar Iberre"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${adventuresPhotos[4]}`} 
                                                alt="Bar Iberre"
                                                className='background-image'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id='adventures-controls'
                                >
                                    <div
                                        className='adventures-arrow-div adventures-arrow-left'
                                    >
                                        <Button
                                            className='about-me-button adventures-prev'
                                            variant='contained'
                                            onClick={(e) => adventuresPrev(e)}
                                        >
                                            <ChevronLeft 
                                                className="arrows"
                                            />
                                        </Button>

                                    </div>

                                    <div
                                        className='adventures-arrow-div adventures-arrow-right'
                                    >
                                        <Button
                                            className='about-me-button backgroung-next'
                                            variant='contained'
                                            onClick={(e) => adventuresNext(e)}
                                        >
                                            <ChevronRight 
                                                className="arrows"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <Typography
                                className='text-white nunito'
                                id='adventures-text'
                            >
                                <div
                                    className='adventures-paragraph'
                                >
                                I chose what one might call a "non-traditional" route to my education.
                                I've been playing music since Kindergarten, so I thought it'd be appropriate to pursue a life of music.
                                I received my Bachelor's of Science in Music Technology at IUPUI in 2017.
                                </div>
                                
                                <div
                                    className='adventures-paragraph'
                                >
                                Before finally pursuing my degree I spent two years between 2010-2012 living in Bilbao, Spain. 
                                There I taught English to students of all ages, and occassionally play gigs in a duo. 
                                With the few phrases I knew before I moved, I can now say that I am fluent in Spanish.
                                </div>
                                
                                <div
                                    className='adventures-paragraph'
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
                                    className='adventures-paragraph'
                                >
                                After getting my degree I spent about a year as a live sound engineer, building a music venue system from the ground up.
                                Soon after that, I took on a full-time gig at an A/V rental & staging company where I stumbled upon programming during their warehouse expansion project, and it quickly became an engaging passion.
                                </div>

                                <div
                                    className='adventures-paragraph'
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






