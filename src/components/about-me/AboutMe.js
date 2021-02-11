import React, {useRef} from "react";
import "./AboutMe.css"
import { Button, 
    Fade,
    Grow,
    Typography } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Background, Adventures, Hobbies } from "./about-me-components/index";



export const AboutMe = () => {
    const slider = useRef(null)
    const carousel = useRef(null)

    let direction = 1

    const stepPrevious = () => {
        if (direction === 1) {
            slider.current.appendChild(slider.current.firstElementChild)
        }
        // console.log("Slider About me: ", slider.current)
        // console.log("Carousel About me: ", carousel.current)
        direction = -1
        carousel.current.style.justifyContent = 'flex-end'
        slider.current.style.transform = 'translate(33%)'
    }

    const stepNext = () => {
        if (direction === -1) {
            slider.current.prepend(slider.current.lastElementChild)
        }
        // console.log("Slider About me: ", slider.current)
        // console.log("Carousel About me: ", carousel.current)
        direction = 1
        carousel.current.style.justifyContent = 'flex-start'
        slider.current.style.transform = 'translate(-33%)'
    }

    const sliderAppend = () => {
        if (direction === 1) { 
            slider.current.appendChild(slider.current.firstElementChild)
        } else if (direction === -1) { 
            slider.current.prepend(slider.current.lastElementChild)
        }
        slider.current.style.transition = 'none'
        slider.current.style.transform = 'translate(0)'
        setTimeout(() => {slider.current.style.transition = 'all 0.75s'})
    }

    return (
        <>
            <Fade
                in={true}
                timeout={1500}
            >
                <div
                    id='about-me-container'
                >
                    <div className="controls">
                        <div
                            className='arrow-span-about-me arrow-left-about-me'
                        >
                            <Button
                                className='button-about-me'
                                variant='contained'
                                onClick={stepPrevious}
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
                                className='button-about-me'
                                variant='contained'
                                onClick={stepNext}
                            >
                                <ChevronRight 
                                    className="arrow-forward-about-me"
                                />
                            </Button>
                        </div>
                    </div>

                <div
                    id="about-me-carousel-container"
                >
                    <div
                        className='carousel-about-me'
                        ref={carousel}
                    >
                        <div
                            className='slider-about-me'
                            onTransitionEnd={sliderAppend}
                            ref={slider}
                        >
                            <section className='text-white'><Background /></section>
                            <section className='text-white'><Adventures /></section>
                            <section className='text-white'><Hobbies /></section>
                        </div>
                        
                    </div>
                </div>
                </div>

            </Fade>
        </>
    )
}