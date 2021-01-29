import { Button, 
    Card, 
    Grow, 
    Typography, 
    Fab, 
    useScrollTrigger,
    Zoom,
    makeStyles,
    Toolbar, 
    Slide,
    Fade} from "@material-ui/core";
import { Code, OpenInNew, KeyboardArrowUp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Portfolio.css"
import { Link } from "react-router-dom";
import { ReactTinyLink } from 'react-tiny-link'
import PropTypes from "prop-types";
import Carousel from 'react-material-ui-carousel'
// import { Carousel } from "@brainhubeu/react-carousel";

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

export const Portfolio = (props) => {
    const [projects, setProjects] = useState()
    const [index, setIndex] = useState()
    const [animation, setAnimation] = useState(true)

    useEffect(() => {
        buildPortfolio()
    }, [])

    const buildPortfolio = () => {

        fetch('projects.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        }
        ).then(function(res) {
            return res.json()
        }).then(function(myJson) {
            for (const [key, value] of Object.entries(myJson)) {
                setProjects(value)
            }
        })
    }
    
    const triggerChange = (index) => {
        setAnimation(false)
        setTimeout(() => setAnimation(true), 5) 
        setIndex(index)
    }

    const buildInfo = () => {
        setAnimation(true)

        setTimeout(() => (
        <>
            <Fade
                in={animation}
                timeout={{
                    appear: 500,
                    exit: 250,
                    enter: 250
                }}
            >
                <div
                    className="info-container"
                >
                    <Typography
                        variant="h4"
                        className="card-title text-white"
                    >
                        {projects[index].name}
                    </Typography>
                    <div
                        className="paragraph-container"
                    >
                        {projects[index].description.split("  ").map((paragraph)=>{
                                return(
                                    <Typography
                                        className="paragraph text-white"
                                    >
                                        {paragraph}
                                    </Typography>
                                )
                            })
                        }
                    </div>
                </div>
            </Fade>
        </>
        ), 500)
        console.log(animation)
    }

    return(
        <>
        <div id="portfolio-container">
            <Typography
                className="text-white portfolio-heading"
                variant='h2'
                style={{
                    marginBottom: '10px'
                }}
            >
                Portfolio
            </Typography>

            <div
                id="carousel-container"
            >
            <Carousel
                autoPlay={false}
                id="carousel"
                animation={'slide'}
                timeout={750}
                swipe={true}
                navButtonsAlwaysVisible={true}
                index={0}
                onChange={(index) => setIndex(index)}
            >
            {
                projects ?
                projects.map((item)=>{
                return(
                    <>
                        <div
                            className="photo-container"
                        >
                            <Card>
                                <img 
                                    src={item.photo}
                                    className="project-photo"
                                />
                            </Card>
                        </div>
                    </>
                )}) :
                null
            }
            </Carousel>
            {
                index>=0 ?
                    <>
                        <Fade
                            in={animation}
                            timeout={{
                                appear: 500,
                                exit: 250,
                                enter: 250
                            }}
                            exit={true}
                            enter={true}
                        >
                            <div
                                className="info-container"
                            >
                                <Typography
                                    variant="h4"
                                    className="card-title text-white"
                                >
                                    {projects[index].name}
                                </Typography>

                                <div
                                    className="paragraph-container"
                                >
                                    {projects[index].description.split("  ").map((paragraph)=>{
                                            return(
                                                <Typography
                                                    className="paragraph text-white"
                                                >
                                                    {paragraph}
                                                </Typography>
                                            )
                                        })
                                    }
                                </div>

                                <div
                                    className="stack-container text-white"
                                    >
                                    <Typography
                                        variant="h5"
                                        style={{
                                            marginBottom: "5px"
                                        }}
                                    >
                                        Languages/Platforms: 
                                    </Typography>
                                    <Typography>
                                        {projects[index].stack.join(", ")}
                                    </Typography>
                                </div>

                                <div
                                    className="button-container"
                                >
                                    {
                                        projects[index].sourcecode != "" ?
                                        (
                                            <a
                                                href={projects[index].sourcecode}
                                                target="_blank"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black'
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    className="button"
                                                >
                                                    <Code
                                                        style={{
                                                            marginRight: "3px"
                                                        }}
                                                    />
                                                                Source Code
                                                </Button>
                                            </a>
                                        )
                                        :
                                        null
                                    }

                                    {
                                        projects[index].address != "" ?
                                        (
                                            <a
                                                href={projects[index].address}
                                                target="_blank"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black'
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    className="button"
                                                >
                                                    <OpenInNew
                                                        style={{
                                                            marginRight: "3px"
                                                        }}
                                                    />
                                                                Website
                                                </Button>
                                            </a>
                                        )
                                        :
                                        null
                                    }
                                </div>

                            </div>
                        </Fade>
                    </>
                :
                null
            }
            </div>
        </div>
        
        <ScrollTop {...props}>
            <Fab color="default" size="small" aria-label="scroll back to top">
                <KeyboardArrowUp />
            </Fab>
        </ScrollTop>
        </>
    )
}






{/* {
    projects ?
    projects.map((item)=>{
    return(
        <>
        <Grow
            in={true}
            timeout={2000}
        >
            <Card
                className="project-card"
            >
                    <Typography
                        variant="h4"
                        className="card-title"
                        fontFamily='Roboto'
                    >
                        {item.name}
                    </Typography>

                    <div
                        className="info-container"
                    >
                        <div
                            className="left-container"
                        >
                            <div
                                className="paragraph-container"
                            >
                                {item.description.split("  ").map((paragraph)=>{
                                    return(
                                        <Typography
                                            className="paragraph"
                                        >
                                            {paragraph}
                                        </Typography>
                                    )
                                })}
                            </div>

                            <div
                                className="stack-container"
                            >
                                <Typography
                                    variant="h6"
                                >
                                    Languages/Platforms: 
                                </Typography>
                                <Typography>
                                    {item.stack.join(", ")}
                                </Typography>
                            </div>

                            <div
                                className="button-container"
                            >
                                {
                                    item.sourcecode != "" ?
                                    (
                                        <a
                                            href={item.sourcecode}
                                            target="_blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'black'
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                className="source-code"
                                            >
                                                <Code
                                                    style={{
                                                        marginRight: "3px"
                                                    }}
                                                />
                                                            Source Code
                                            </Button>
                                        </a>
                                    )
                                     :
                                    null
                                }

                                {
                                    item.address != "" ?
                                    (
                                        <a
                                            href={item.address}
                                            target="_blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'black'
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                className="source-code"
                                            >
                                                <OpenInNew
                                                    style={{
                                                        marginRight: "3px"
                                                    }}
                                                />
                                                            Website
                                            </Button>
                                        </a>
                                    )
                                     :
                                    null
                                }
                                
                            </div>
                        </div>

                        <div
                            className="photo-container"
                        >
                            <Card>
                                <img 
                                    src={item.photo}
                                    className="project-photo"
                                />
                            </Card>
                        </div>
                    </div>
            </Card>
        </Grow>
        </>
    )}) :
    null
} */}