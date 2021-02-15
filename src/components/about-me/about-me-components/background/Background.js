import React, { useRef } from "react";
import "./Background.css"
import { 
    Typography,
    Button } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'


export const Background = () => {
    const backgroundSlider = useRef(null)
    const backgroundCarousel = useRef(null)

    let direction = 1

    const backgroundPhotos = [
        'bar-iberre.jpg',
        'bar-iberre2.jpg',
        'bilbao.jpg',
        'gernika.jpg',
        'cincy-bfy.jpg',
        'bfy-hifi.jpg',
        'Palladium copy.jpg', 
    ]

    const backgroundPrev = (e) => {
        e.stopPropagation()
        if (direction === 1) {
            backgroundSlider.current.appendChild(backgroundSlider.current.firstElementChild)
        }
        console.log("Slider Background: ", backgroundSlider.current)
        console.log("Carousel Background: ", backgroundCarousel.current)
        direction = -1
        backgroundCarousel.current.style.justifyContent = 'flex-end'
        backgroundSlider.current.style.transform = 'translate(14.285714%)'
    }

    const backgroundNext = (e) => {
        e.stopPropagation()
        if (direction === -1) {
            backgroundSlider.current.prepend(backgroundSlider.current.lastElementChild)
        }
        console.log("Slider Background: ", backgroundSlider.current)
        console.log("Carousel Background: ", backgroundCarousel.current)
        direction = 1
        backgroundCarousel.current.style.justifyContent = 'flex-start'
        backgroundSlider.current.style.transform = 'translate(-14.285714%)'
    }

    const backgroundAppend = () => {
        if (direction === 1) { 
            backgroundSlider.current.appendChild(backgroundSlider.current.firstElementChild)
        } else if (direction === -1) { 
            backgroundSlider.current.prepend(backgroundSlider.current.lastElementChild)
        }
        backgroundSlider.current.style.transition = 'none'
        backgroundSlider.current.style.transform = 'translate(0)'
        setTimeout(() => {backgroundSlider.current.style.transition = 'all 0.75s'})
    }

    return (
        <>
            {/* <Fade
                in={true}
                timeout={1500}
            > */}

                    <div
                        id="background-card"
                    >

                        <div
                            id='background-container'
                        >
                            <Typography
                                variant='h4'
                                className='text-white background-heading background-noto-sans'
                            >
                                Background
                            </Typography>

                            <Typography
                                className='text-white nunito'
                                id='background-text'
                            >
                                <div
                                    className='background-paragraph'
                                >
                                I chose what one might call a "non-traditional" route to my education.
                                I've been playing music since Kindergarten, so I thought it'd be appropriate to pursue a life of music.
                                I received my Bachelor's of Science in Music Technology at IUPUI in 2017.
                                </div>
                                
                                <div
                                    className='background-paragraph'
                                >
                                Before finally pursuing my degree I spent two years between 2010-2012 living in Bilbao, Spain. 
                                There I taught English to students of all ages, and occasionally play gigs in a duo. 
                                With the few phrases I knew before I moved, I can now say that I am fluent in Spanish.
                                </div>
                                
                                <div
                                    className='background-paragraph'
                                >
                                During my time at IUPUI I joined a local group (
                                    <a
                                        href="https://open.spotify.com/artist/4bAHFi3RQGvf7sl9vh6WyK"
                                        style={{
                                            color: 'white'
                                        }}
                                        target='_blank'
                                        rel='noreferrer noopener'
                                    >Bigfoot Yancey</a>
                                ) that plays original tunes and the occasional John Prine or Trampled by Turtles cover.
                                Due to COVID, we haven't been playing very often. 
                                </div>
                                
                                <div
                                    className='background-paragraph'
                                >
                                After getting my degree I spent about a year as a live sound engineer, building a music venue system from the ground up.
                                Soon after that, I took on a full-time gig at an A/V rental & staging company where I stumbled upon programming during their warehouse expansion project, and it quickly became an engaging passion.
                                </div>

                                <div
                                    className='background-paragraph'
                                >
                                Once I was laid off due to COVID, I took the opportunity to take advantage of <a
                                    href="https://www.kenzie.academy/"
                                    style={{
                                        color: 'white'
                                    }}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Kenzie Academy's
                                </a> 1 year Full-Stack Software Engineering program, and the rest was history.

                                </div>
                            </Typography>

                            <div 
                                id="background-carousel-container"
                            >
                                <div 
                                    className="background-carousel"
                                    ref={backgroundCarousel}
                                >
                                    <div 
                                        className="background-slider"
                                        onTransitionEnd={backgroundAppend}
                                        ref={backgroundSlider}
                                    >
                                        <div>
                                            <img 
                                                src={`images/background/${backgroundPhotos[0]}`} 
                                                alt="Bar Iberre"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${backgroundPhotos[1]}`} 
                                                alt="Bar Iberre 2"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${backgroundPhotos[2]}`} 
                                                alt="Bilbao"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${backgroundPhotos[3]}`} 
                                                alt="Gernika"
                                                className='background-image'
                                                />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${backgroundPhotos[4]}`} 
                                                alt="Bigfoot Yancey in Cincinatti"
                                                className='background-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/background/${backgroundPhotos[5]}`} 
                                                alt="Bigfoot Yancey at HIFI"
                                                className='background-image'
                                                />
                                        </div><div>
                                            <img 
                                                src={`images/background/${backgroundPhotos[6]}`} 
                                                alt="Me playing at The Palladium"
                                                className='background-image'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id='background-controls'
                                >
                                    <div
                                        className='background-arrow-div background-arrow-left'
                                    >
                                        <Button
                                            className='about-me-button background-prev'
                                            variant='contained'
                                            onClick={(e) => backgroundPrev(e)}
                                        >
                                            <ChevronLeft 
                                                className="arrows"
                                            />
                                        </Button>

                                    </div>

                                    <div
                                        className='background-arrow-div background-arrow-right'
                                    >
                                        <Button
                                            className='about-me-button background-next'
                                            variant='contained'
                                            onClick={(e) => backgroundNext(e)}
                                        >
                                            <ChevronRight 
                                                className="arrows"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                                 
                        </div>

                    </div>

            {/* </Fade> */}
        </>
    )
}






