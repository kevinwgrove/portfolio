import React, { useEffect, useState, useRef } from "react";
import { Card, Fade, Typography } from "@material-ui/core";
import { Loading } from "../loading/index"
import './Home.css';
import { EPL_DB_KEY } from "../../keys/index";
import { BounceLoader } from "react-spinners";

export const Home = () => {
    const [table, setTable] = useState([])
    // const [teamInfo, setTeamInfo] = useState()
    // const [currentTeam, setCurrentTeam] = useState()
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetchLeagueTable()
    }, [])

    // useEffect(() => { 
    //     console.log(table)
    // }, [table])


    // console.log(teamInfo)

    const fetchLeagueTable = () => {
        console.log("Rendering table")
        setCount(count => count += 1)
        console.log("Count: ", count)
        fetch("https://thesportsdb.p.rapidapi.com/lookuptable.php?s=2020-2021&l=4328", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": EPL_DB_KEY,
                    "x-rapidapi-host": "thesportsdb.p.rapidapi.com"
                }
            }).then(response => {
                return response.json();
            }).then((res) => {
                const newTable = res.table.map((team) => { 
                    // console.log(team)
                    // console.log(team.teamid)
                    fetch(`https://thesportsdb.p.rapidapi.com/lookupteam.php?id=${team.teamid}`, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-key": EPL_DB_KEY,
                            "x-rapidapi-host": "thesportsdb.p.rapidapi.com"
                        }
                    }).then((response) => {
                        return response.json()
                    }).then((res) => {
                        console.log(res.teams[0], team)
                        return team
                            // "info": res.teams[0]
                        
                    }).catch(err => {
                        console.error(err)
                    })
                })
                return newTable
            }).then((newTable) => {
                console.log(newTable)
                setTable(() => newTable)
                return newTable
            }).catch(err => {
                console.error(err);
            });
    }
    // console.log(table)

    const fetchTeamInfo = (data) => {
        // let teamList = []
        // console.log(data)
        // console.log("Rendering team info")
        data.map((team) => {
            fetch(`https://thesportsdb.p.rapidapi.com/lookupteam.php?id=${team.teamid}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": EPL_DB_KEY,
                    "x-rapidapi-host": "thesportsdb.p.rapidapi.com"
                }
            }).then((response) => {
                return response.json()
            }).then((res) => {
                // teamList.push(res.teams[0])
                team.info = res.teams[0]

                // setTable(() => [...table, table[] team])
                // return res.teams[0]
            }).catch(err => {
                console.error(err)
            })
        })
        // setTeamInfo(data)
    }
  
    
    return (
        <div/>
        // <div>
        //     <Fade 
        //     in={true}
        //     timeout={2000}
        //     >
        //         <div id="home-container">
        //             <div
        //                 id="epl-table"
        //             >
        //             {
        //                 table ?
        //                 table.map((team) => {
        //                     return (
        //                         <>
        //                         <div
        //                             className="team-info text-white"
        //                         >

        //                             <Typography
        //                                 className="team-position"
        //                             >
        //                                 {table.indexOf(team) + 1}
        //                             </Typography>

        //                             {
        //                                 team  ? 
        //                                 <p>{JSON.stringify(team)}</p>
        //                                 :
        //                                 null
        //                             }
        //                             {/* <img src={team["info"]["strTeamBadge"]} alt=""/> */}

        //                             {/* {
        //                                 team && team.info.strTeamBadge ?
        //                                 :
        //                                 null
        //                             } */}

        //                             <Typography
        //                                 className="team-name"
        //                             >
        //                                 {team.name}
        //                             </Typography>

        //                             <Typography>

        //                             </Typography>

        //                         </div>
        //                         </>
        //                     )
        //                 })
        //                 :
        //                 <>
        //                     <div id="loader">
        //                         <BounceLoader
        //                             id='loader'
        //                             color={'#FFFFFF'}
        //                             size={120}
        //                         />
        //                         {/* <Typography
        //                             variant="h4"
        //                             className="text-white"
        //                         >
        //                             Loading...
        //                         </Typography> */}
        //                     </div>
        //                 </>
        //             }
        //             </div>
        //         </div>
        //     </Fade>
            
        // </div>
    )
}
