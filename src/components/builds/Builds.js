import React, { useEffect, useState, useReducer } from "react";
import { Card, 
    Fade, 
    IconButton, 
    Typography,
    Popper,
    Paper } from "@material-ui/core";
import { Close, KeyboardArrowDown } from "@material-ui/icons"
import { EPL_DB_KEY } from "../../keys/index";
import { BounceLoader } from "react-spinners";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { fetchLeagueTable, 
    fetchTeamSchedules,
    buildLeagueTable,
    buildTeamSchedule } from "../../helpers/index"
import "./Builds.css";
import { usePortfolioStore } from "../../PortfolioContext";

export const Builds = () => {
    const [table, setTable] = useState([])
    const [currentTeam, setCurrentTeam] = useState({props: {children: {key: 0}}})
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const portfolioStore = usePortfolioStore()
    const mobxTable = portfolioStore.table

    useEffect(() => {
        if(mobxTable.length > 0) {
            console.log("this", mobxTable)
            setTable(mobxTable)
        } else {
            console.log(mobxTable)
            helperFetchTable()
        }
    }, [])

    const helperFetchTable = async () => {
        const result = await fetchLeagueTable()
        setTable(result)
    }

    const buildTable = () => {
        return (table.sort((a, b) => {
            return a.position - b.position
        }).map((team) => {
            return (
                <>
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
            <Fade 
            in={true}
            timeout={1000}
            >
                <div id="builds-container">
                    <div
                        id="epl-container"
                    >
                    <div
                        id="epl-table"
                    >
                    {
                        table.length == 20 ?
                        <>
                        <div
                            className="info-header text-white"
                            >
                            {/* <div
                                id="phantom"
                            > */}

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

                    {/* </div> */}
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
                    </div>
                </div>
            </Fade>
            
        </>
    )
}
