import React, { useEffect, useState } from 'react'
import './EPLTable.css'
import { fetchLeagueTable, 
    buildLeagueTable,
    buildTeamSchedule } from "../../../../helpers/index"
import { usePortfolioStore } from "../../../../PortfolioContext";
import { BounceLoader } from "react-spinners";
import { Fade, 
    IconButton, 
    Typography,
    Popper,
    Paper, 
    Grow,
    Button} from "@material-ui/core";
import { Close, KeyboardArrowDown, ChevronLeft } from "@material-ui/icons"
// import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from "react-router-dom"

export const EPLTable = () => {
    const [table, setTable] = useState([])
    const [currentTeam, setCurrentTeam] = useState({props: {children: {key: 0}}})
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const portfolioStore = usePortfolioStore()
    const mobxTable = portfolioStore.table

    const helperFetchTable = async () => {
        const result = await fetchLeagueTable()
        setTable(result)
    }

    useEffect(() => {
        if(mobxTable.length > 0) {
            setTable(mobxTable)
        } else {
            helperFetchTable()
        }
    }, [mobxTable])

    const buildTable = () => {
        let miliseconds = 0
        return (table.sort((a, b) => {
            return a.position - b.position
        }).map((team) => {
            miliseconds += 200
            return (
                <>
                <Grow
                    in={true}
                    timeout={miliseconds}
                >
                <div
                    key={team.teamid}
                    className="team-info text-white"
                >

                    {buildLeagueTable(team)}
                    

                    <Popper 
                    open={open} 
                    anchorEl={anchorEl} 
                    placement={placement} 
                    transition>
                        {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper
                                className="popper-window"
                            >

                                {currentTeam}

                            </Paper>
                        </Fade>
                        )}
                    </Popper>
                            <IconButton
                                id={team.teamid}
                                className="team-button"
                                onClick={handleClick('bottom-end', team)}
                            >
                                { team.teamid === currentTeam.props.children.key && open ?
                                    <Close 
                                    style={{
                                        height: "15px",
                                        width:  "15px",
                                        color: "white"
                                    }}
                                    /> :
                                    <KeyboardArrowDown 
                                        style={{
                                            height: "15px",
                                            width:  "15px",
                                            color: "white"
                                        }}
                                    />
                                }
                            </IconButton>

                </div>
                </Grow>
                </>
            )
        }))
    }

    const handleClick = (newPlacement, team) => (event) => {
        console.log(currentTeam.props.children.key)
        event.preventDefault()
        const result = buildTeamSchedule(team, table)
        setCurrentTeam(team)
        if(event.currentTarget.id === currentTeam.props.children.key){
            setOpen((prev) => placement !== newPlacement || !prev);
        } else {
            setOpen(() => placement !== newPlacement || true)
        }
        setAnchorEl(event.currentTarget);
        setPlacement(newPlacement);
        setCurrentTeam(result)
    };

    return (
        <>
        
            <div
                id="epl-container"
            >
                <div
                    id="left-container-epl"
                >
                    <Link
                    to="/builds"
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                    >
                        <Button
                            className='button-epl'
                            variant='contained'
                            id="back-icon-epl"
                        >
                            <ChevronLeft 
                                className="back-icon"
                            />
                        </Button>
                    </Link>
                </div>
                
                <div
                    id="epl-table"
                >
                {
                    table.length === 20 ?
                    <>
                    <div
                        className="info-header text-white"
                        >

                        <Typography
                            className="team-position-header"
                        >
                            Pos.
                        </Typography>
                            

                        <Typography
                            className="team-name"
                        >
                            Team
                        </Typography>

                        <Typography
                            className="team-wins"
                        >
                            W
                        </Typography>

                        <Typography
                            className="team-draws"
                        >
                            D
                        </Typography>

                        <Typography
                            className="team-losses"
                        >
                            L
                        </Typography>

                        <Typography
                            className="team-points"
                        >
                            Pts.
                        </Typography>


                    </div>
                    {
                        buildTable()
                    }
                    </>
                    :
                    <>
                        <div id="loader">
                            <BounceLoader
                                id='loader'
                                color={'#FFFFFF'}
                                size={120}
                            />
                            <Typography
                                variant="h4"
                                className="text-white"
                            >
                                Loading...
                            </Typography>
                        </div>
                    </>
                }
                </div>
                <div 
                    id="right-container-epl"
                >

                </div>
            </div>
        </>
    )
}