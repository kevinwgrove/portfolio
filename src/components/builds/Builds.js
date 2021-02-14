import React, { useEffect, useState } from "react";
import { Card, 
    Fade, 
    IconButton, 
    Typography,
    Popper,
    Paper, 
    Button} from "@material-ui/core";
import { ArrowForwardIos, ArrowForward, ChevronRight } from "@material-ui/icons"
import { EPL_DB_KEY } from "../../keys/index";
import { BounceLoader } from "react-spinners";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { fetchLeagueTable,
    fetchLeague, 
    buildLeagueTable,
    buildTeamSchedule } from "../../helpers/index"
import "./Builds.css";
import { usePortfolioStore } from "../../PortfolioContext";
import { EPLTable } from "./build-components/epl-table/index"
import { Link } from "react-router-dom"


export const Builds = () => {
    const [build, setBuild] = useState(true)
    const [epl, setEpl] = useState(false)
    const [league, setLeague] = useState({})
    
    const portfolioStore = usePortfolioStore()
    const mobxLeague = portfolioStore.league

    useEffect(() => {
        if(mobxLeague.length > 0) {
            console.log(mobxLeague[0].strBadge)
            setLeague(mobxLeague[0])
        } else {
            helperFetchLeague()
        }
        buildBOTD()
    }, [])

    const helperFetchLeague = async () => {
        const result = await fetchLeague()
        console.log(result[0])
        setLeague(result[0])
    }

    const buildBOTD = () => {
        fetch('bird-info.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        }).then((res) => {
            return res.json()
        }).then((result) => {
            console.log(result)
        })
    }

    return (
        <>
            <Fade 
            in={true}
            timeout={1000}
            >

                <div id="builds-container">

                    <Typography
                        id='builds-p'
                        className='text-white noto-sans'
                    >
                        This page is dedicated to demonstrate my knowledge on building complex, component based applications using different API calls. You also get to see some of the hobbies I enjoy in my free time. Enjoy!!!
                    </Typography>

                    <Fade
                    in={true}
                    timeout={2000}
                    >
                    <div
                        id="epl-card"
                        className='builds-card'
                    >
                        <Typography
                            className='text-white jura'
                            id='epl-title'
                        >
                            English Premier League Table
                        </Typography>
                        <div
                            className="api-container"
                        >
                            <div
                                className='logos-container'
                            >
                                <img 
                                src="images/the_sports_db.png" 
                                alt="The Sports DB Logo"
                                id="sports-db"       
                                />

                                <ArrowForward 
                                    className='arrow-forward-builds'
                                />

                                <img 
                                src={league.strBadge} 
                                alt="EPL Badge"
                                id="league-badge"
                                />
                            </div>

                            <div
                                className='info-container-builds'
                            >
                                <Typography
                                    className="text-white roboto roboto-text-builds"
                                >
                                    TheSportsDB is a community database of sports artwork and data that I used to build a league table. It's not the most accurate, but it's affordable and it does the job, so I can't complain. 
                                </Typography>


                                <Link
                                to="/epltable"
                                style={{
                                    textDecoration: 'none'
                                }}
                                >
                                    <Button
                                        className='button-builds'
                                        variant='contained'
                                    >
                                        <ChevronRight 
                                            className="arrow-forward-ios-builds"
                                        />
                                    </Button>
                                </Link>
                            </div>

                        </div>

                    </div>
                    
                    </Fade>

                    <Fade
                    in={true}
                    timeout={2000}
                    >
                    <div
                        id="epl-card"
                        className='builds-card'
                    >
                        <Typography
                            className='text-white jura'
                            id='epl-title'
                        >
                            Bird Of The Day (a.k.a. "Bird Nerd")
                        </Typography>
                        <div
                            className="api-container"
                        >
                            <div
                                className='logos-container'
                            >
                                <img 
                                src="images/ebird.webp" 
                                alt="eBird Logo"
                                id="ebird-logo"       
                                />

                                <ArrowForward 
                                    className='arrow-forward-builds'
                                />

                                <img 
                                src='images/cornell-lab.jpg' 
                                alt="Cornell Lab of Ornithology logo"
                                id="cornell-lab-logo"
                                />
                            </div>

                            <div
                                className='info-container-builds'
                            >
                                <Typography
                                    className="text-white roboto roboto-text-builds"
                                >
                                    This build is under construction. Please be patient, awesomeness is soon to come. 
                                </Typography>


                                {/* <Link
                                to="/epltable"
                                style={{
                                    textDecoration: 'none',
                                    color: 'black'
                                }}
                                > */}
                                    <Button
                                        className='button-builds'
                                        variant='contained'
                                    >
                                        <ChevronRight 
                                            className="arrow-forward-ios-builds"
                                        />
                                    </Button>
                                {/* </Link> */}
                            </div>

                        </div>

                    </div>
                    </Fade>
                </div>

            </Fade>
            
        </>
    )
}
