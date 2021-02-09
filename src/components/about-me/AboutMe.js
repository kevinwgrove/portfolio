import React from "react";
import "./AboutMe.css"
import { Button, 
    Fade,
    Grow,
    Typography } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Background, Adventures } from "./about-me-components/index";



export const AboutMe = () => {
    const slider = document.querySelector('.slider-about-me')
    // const prev = document.querySelector('.arrow-left-about-me')
    // const next = document.querySelector('.arrow-right-about-me')
    const carousel = document.querySelector('.carousel-about-me')

    let direction = 1
    
    const stepPrevious = () => {
        if (direction === 1) {
            slider.appendChild(slider.firstElementChild)
            // console.log("Previous", direction)
        }
        direction = -1
        console.log("Previous", direction)
        carousel.style.justifyContent = 'flex-end'
        slider.style.transform = 'translate(33%)'
    }

    const stepNext = () => {
        if (direction === -1) {
            slider.prepend(slider.lastElementChild)
            // console.log("Next", direction)
        }
        direction = 1
        console.log("Next", direction)
        carousel.style.justifyContent = 'flex-start'
        slider.style.transform = 'translate(-33%)'
    }

    const sliderAppend = () => {
        if (direction === 1) { // next
            slider.appendChild(slider.firstElementChild)
        } else if (direction === -1) { // previous
            slider.prepend(slider.lastElementChild)
        }
        slider.style.transition = 'none'
        slider.style.transform = 'translate(0)'
        setTimeout(() => {slider.style.transition = 'all 0.5s'})
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
                        <span
                            className='arrow-span-about-me arrow-left-about-me'
                        >
                            <Button
                                className='button-about-me arrow-about-me'
                                variant='contained'
                                onClick={stepPrevious}
                            >
                                <ArrowBackIos 
                                    className="arrow-back-about-me"
                                />
                            </Button>
                        </span>

                        <span
                            className='arrow-span-about-me arrow-right-about-me'
                        >
                            <Button
                                className='button-about-me arrow-about-me'
                                variant='contained'
                                onClick={stepNext}
                            >
                                <ArrowForwardIos 
                                    className="arrow-forward-about-me"
                                />
                            </Button>
                        </span>
                    </div>

                <div
                    id="about-me-carousel-container"
                >
                    <div
                        className='carousel-about-me'
                    >
                        <div
                            className='slider-about-me'
                            onTransitionEnd={sliderAppend}
                        >
                            <section className='text-white'><Background /></section>
                            <section className='text-white'><Adventures /></section>
                            <section className='text-white'>Background 3</section>
                        </div>
                        
                    </div>
                </div>
                </div>

            </Fade>
        </>
    )
}