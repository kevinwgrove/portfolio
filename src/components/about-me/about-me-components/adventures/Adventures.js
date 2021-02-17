import React, { useRef } from "react";
import "./Adventures.css"
import { 
    Typography,
    Button } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'



export const Adventures = () => {
    const adventuresSlider = useRef(null)
    const adventuresCarousel = useRef(null)

    let direction = 1

    const adventuresPhotos = [
        'mama-lioness.jpg',
        'mama-and-cubs.jpg',
        'Safari.png',
        'northern-lights-iceland.jpg',
        'honeymoon.jpg',
        'great-wall.jpg',
        'surfing-indo.jpg', 
        'Indo.jpg',
        'me-and-pops-Vail.jpg',
        'vail.jpg',
        'the kop anfield.jpg'
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
        adventuresSlider.current.style.transform = 'translate(9.09%)'
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
        adventuresSlider.current.style.transform = 'translate(-9.09%)'
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
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[0]}`} 
                                                alt="Lioness in Tsavo West"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[1]}`} 
                                                alt="Mama Lioness and Cubs"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[2]}`} 
                                                alt="Safari resort"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[3]}`} 
                                                alt="Northern Lights in Iceland"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[4]}`} 
                                                alt="Honeymoon Northern Lights"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[5]}`} 
                                                alt="Great Wall with my brother"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[6]}`} 
                                                alt="Surfing Indonesia"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[7]}`} 
                                                alt="Indo waves"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[8]}`} 
                                                alt="Pops & I in Vail"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[9]}`} 
                                                alt="Lunch break on Vail"
                                                className='adventures-image'
                                            />
                                        </div>
                                        <div
                                            className='adventures-image-container'
                                        >
                                            <img 
                                                src={`images/adventures/${adventuresPhotos[10]}`} 
                                                alt="The Kop at Anfield"
                                                className='adventures-image'
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
                                            className='about-me-button adventures-next'
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
                                <Typography
                                variant='h4'
                                className='text-white adventures-heading adventures-noto-sans'
                                >
                                    Adventures
                                </Typography>
                                <div
                                    className='adventures-paragraph'
                                >
                                    As a product of a retired commercial pilot and a flight attendant, I acquired an itch for travel.
                                    However, there are only a few regrets in my life, one of them being that I didn't take advantage of the fact that I could've flown by myself to anywhere in United States.
                                    I could've had so many adventures as a kid.
                                </div>

                                <div
                                    className='adventures-paragraph'
                                >
                                    I have been able to visit 4 of the <a 
                                        href="https://www.livescience.com/57927-new-zealand-part-of-eighth-continent.html"
                                        style={{
                                            color: 'white'
                                        }}
                                        target='_blank'
                                        rel='noreferrer noopener'
                                    >
                                        8 continents
                                    </a>. 
                                    I have helped a Maasai spot lions at night in Tsavo West National Park, seen the Northern Lights in Iceland, visited the Great Wall outside of Beijing, surfed waves in Indonesia, skied the Rockies, and visited 35 of 50 States.
                                    I've even had the privilege of attending a Liverpool match at Anfield, even though they lost.
                                    One of my dreams is to visit every continent before I kick the bucket.
                                </div>

                                <div
                                    className='adventures-paragraph'
                                >
                                    
                                </div>
                                
                                <div
                                    className='adventures-paragraph'
                                >
                                    There is something special about traveling to a distant place with all new people and a totally different culture that teaches so many important aspects of life.
                                    I'm truly fortunate and grateful for all the opportunities I've had to explore.
                                </div>
                                
                            </Typography>
                                 
                        </div>

                    </div>

            {/* </Fade> */}
        </>
    )
}






