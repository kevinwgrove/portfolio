import React, { useRef } from "react";
import "./Hobbies.css"
import { Fade,
    Grow,
    Typography,
    Button } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Siema from 'siema'


export const Hobbies = () => {
    const hobbiesSlider = useRef(null)
    const hobbiesCarousel = useRef(null)

    let direction = 1

    const hobbiesPhotos = [
        'bar-iberre.jpg',
        'bar-iberre2.jpg',
        'bilbao.jpg',
        'cincy-bfy.jpg',
        'gernika.jpg',
        'Palladium copy.jpg'
    ]

    const hobbiesPrev = (e) => {
        e.stopPropagation()
        if (direction === 1) {
            hobbiesSlider.current.appendChild(hobbiesSlider.current.firstElementChild)
        }
        console.log("Slider hobbies: ", hobbiesSlider.current)
        console.log("Carousel hobbies: ", hobbiesCarousel.current)
        direction = -1
        hobbiesCarousel.current.style.justifyContent = 'flex-end'
        hobbiesSlider.current.style.transform = 'translate(20%)'
    }

    const hobbiesNext = (e) => {
        e.stopPropagation()
        if (direction === -1) {
            hobbiesSlider.current.prepend(hobbiesSlider.current.lastElementChild)
        }
        console.log("Slider hobbies: ", hobbiesSlider.current)
        console.log("Carousel hobbies: ", hobbiesCarousel.current)
        direction = 1
        hobbiesCarousel.current.style.justifyContent = 'flex-start'
        hobbiesSlider.current.style.transform = 'translate(-20%)'
    }

    const hobbiesAppend = () => {
        if (direction === 1) { 
            hobbiesSlider.current.appendChild(hobbiesSlider.current.firstElementChild)
        } else if (direction === -1) { 
            hobbiesSlider.current.prepend(hobbiesSlider.current.lastElementChild)
        }
        hobbiesSlider.current.style.transition = 'none'
        hobbiesSlider.current.style.transform = 'translate(0)'
        setTimeout(() => {hobbiesSlider.current.style.transition = 'all 0.75s'})
    }

    return (
        <>
            {/* <Fade
                in={true}
                timeout={1500}
            > */}

                    <div
                        id="hobbies-card"
                    >

                        <div
                            id='hobbies-container'
                        >
                            <Typography
                                variant='h4'
                                className='text-white hobbies-heading hobbies-noto-sans'
                            >
                                Hobbies
                            </Typography>

                            <Typography
                                className='text-white nunito'
                                id='hobbies-text'
                            >
                                <div
                                    className='hobbies-paragraph'
                                >
                                I chose what one might call a "non-traditional" route to my education.
                                I've been playing music since Kindergarten, so I thought it'd be appropriate to pursue a life of music.
                                I received my Bachelor's of Science in Music Technology at IUPUI in 2017.
                                </div>
                                
                                <div
                                    className='hobbies-paragraph'
                                >
                                Before finally pursuing my degree I spent two years between 2010-2012 living in Bilbao, Spain. 
                                There I taught English to students of all ages, and occassionally play gigs in a duo. 
                                With the few phrases I knew before I moved, I can now say that I am fluent in Spanish.
                                </div>
                                
                                <div
                                    className='hobbies-paragraph'
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
                                    className='hobbies-paragraph'
                                >
                                After getting my degree I spent about a year as a live sound engineer, building a music venue system from the ground up.
                                Soon after that, I took on a full-time gig at an A/V rental & staging company where I stumbled upon programming during their warehouse expansion project, and it quickly became an engaging passion.
                                </div>

                                <div
                                    className='hobbies-paragraph'
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
                                id="hobbies-carousel-container"
                            >
                                <div 
                                    className="hobbies-carousel"
                                    ref={hobbiesCarousel}
                                >
                                    <div 
                                        className="hobbies-slider"
                                        onTransitionEnd={hobbiesAppend}
                                        ref={hobbiesSlider}
                                    >
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[0]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[1]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[2]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[3]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[4]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id='hobbies-controls'
                                >
                                    <div
                                        className='hobbies-arrow-div hobbies-arrow-left'
                                    >
                                        <Button
                                            className='about-me-button hobbies-prev'
                                            variant='contained'
                                            onClick={(e) => hobbiesPrev(e)}
                                        >
                                            <ChevronLeft 
                                                id="hobbies-arrow-back"
                                                className='arrows'
                                            />
                                        </Button>

                                    </div>

                                    <div
                                        className='hobbies-arrow-div hobbies-arrow-right'
                                    >
                                        <Button
                                            className='about-me-button backgroung-next'
                                            variant='contained'
                                            onClick={(e) => hobbiesNext(e)}
                                        >
                                            <ChevronRight 
                                                id="hobbies-arrow-forward"
                                                className='arrows'
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






