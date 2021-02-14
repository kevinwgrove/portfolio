import React, { useRef } from "react";
import "./Hobbies.css"
import { 
    Typography,
    Button } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'



export const Hobbies = () => {
    const hobbiesSlider = useRef(null)
    const hobbiesCarousel = useRef(null)

    let direction = 1

    const hobbiesPhotos = [
        'red river gorge.jpg',
        'me and buddy.jpg',
        'stork.jpeg',
        'kingfisher.jpeg',
        'african hawk.jpeg',
        'takeoff-burntside.jpg',
        'bwca bass.jpeg',
        'bwca shoreline.jpeg',
        'bwca sunset.jpg',
        'bwca first year.jpg',
        'bwca bluff.jpeg',
        'bwca stars.jpeg'
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
        hobbiesSlider.current.style.transform = 'translate(8.33%)'
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
        hobbiesSlider.current.style.transform = 'translate(-8.33%)'
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
                                    One of my favorite things to do in life is to observe the natural world around me.
                                    Whether that's escaping off into the wilderness or marveling over the magnificent creatures in their natural habitat.
                                </div>
                                {/* <Link
                                to="/birdnerd"
                                style={{
                                    textDecoration: 'none'
                                }}
                                ></Link> */}
                                <div
                                    className='hobbies-paragraph'
                                >
                                    As much as I get made fun of for my love of birds, I do admire their ability to fly and more so the incredible songs they create (Note: not all birds have pleasant songs, i.e. Marabou Stork).
                                    I wouldn't say I'm a huge birder, I don't drop everything to go see a rare bird that is thousands of miles away.
                                    Though, I do enjoy spotting them and listening to their calls.
                                </div>
                                
                                <div
                                    className='hobbies-paragraph'
                                >
                                    From my childhood up to about my sophmore year in high school, my family would go up to a camp in Ely, MN, just on the border of the Boundary Waters Canoe Area (BWCA).
                                    The BWCA is a 1,000,000+ acre wilderness area located in the Superior National Forest in northern Minnesota.
                                    Ever since 2013, I have been planning an annual trip to the Boundary Waters with friends.
                                    Granted there has been a couple of years we weren't able to go.
                                    It's an amazing experience that I enjoy sharing with those who have a passion for camping and the outdoors.
                                </div>

                                <div
                                    className='hobbies-paragraph'
                                >
                                    In part, those trips up to the Boundary Waters have made me develop a love of fishing.
                                    I wouldn't say I'm a huge fisherman either, but when you are relying on fish as your main source of nutrients out in the middle of nowhere, it definitely is exciting to know that you're going to eat well that night.
                                    I also wouldn't pass up a chance to go fishing.
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
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[5]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[6]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[7]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[8]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[9]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[10]}`} 
                                                alt="Bar Iberre"
                                                className='hobbies-image'
                                            />
                                        </div>
                                        <div>
                                            <img 
                                                src={`images/hobbies/${hobbiesPhotos[11]}`} 
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






