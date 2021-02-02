import { Typography,
    Paper,
    Fade } from "@material-ui/core"

export const buildLeagueTable = (team) => {
    return (
        <>
            <Typography
            className="team-position"
            >
                {team.position}
            </Typography>

            
            <div
                className="badge-container"
            >
                <img 
                src={team["info"]["strTeamBadge"]} 
                alt={team.name}
                className="team-badge"
            /></div>

            <Typography
                className="team-name"
            >
                {team.name}
            </Typography>

            <Typography
                className="team-wins"
            >
                {team.win}
            </Typography>

            <Typography
                className="team-draws"
            >
                {team.draw}
            </Typography>

            <Typography
                className="team-losses"
            >
                {team.loss}
            </Typography>

            <Typography
                className="team-points"
            >
                {team.total}
            </Typography>
        
        </>
    )
}

export const buildTeamSchedule = (team, table) => {
    console.log(team)
    return (
        <>
            <Paper
                className="popper-window"
                key={team.teamid}
            >
                <img 
                    src={team.info.strTeamBanner} 
                    alt={team.name + " banner"}
                    className="popper-team-banner"
                />
                <Typography
                    variant="h5"
                    className="text-white"
                >
                    Upcoming Matches
                </Typography>

                {
                    team.schedule.map((match) => {
                        return (
                            <>
                                <div
                                    className="team-match text-white"
                                >
                                <Typography
                                    className="match-date"
                                >
                                    {match.dateEvent.slice(5)}
                                </Typography>


                               {match.strLeague.length > 6 ?
                                <Typography
                                    className="match-league"
                                >
                                    {match.strLeague.match(/\b([A-Z])/g).join('')}
                                </Typography>
                                :
                                <Typography
                                    className="match-league"
                                >
                                    {match.strLeague}
                                </Typography>
                                }


                                {
                                    match.strHomeTeam == team.name ?
                                    <Typography
                                        className="home-away"
                                    >
                                        H
                                    </Typography>
                                    :
                                    <Typography
                                        className="home-away"
                                    >
                                        A
                                    </Typography>
                                }

                                <Typography
                                    className="match-details"
                                >
                                    {match.strHomeTeam} v. {match.strAwayTeam}
                                </Typography>

                                <Typography
                                    className="match-time"
                                >
                                    {('0' + String(parseInt(match.strTime.slice(0, 2) - 5))).slice(-2)}:{match.strTime.slice(3, 5)} EST
                                </Typography>
                                </div>
                            </>
                        )
                    })
                }
            </Paper>
        </>
    )
}