// import { EPL_DB_KEY } from "../keys/eplID";
// import { usePortfolioStore } from "../PortfolioContext";

export const fetchLeagueTable = async () => {
  const result = await fetch(
    "https://thesportsdb.p.rapidapi.com/lookuptable.php?s=2020-2021&l=4328",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": EPL_DB_KEY,
        "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
      },
    }
  );
  const response = await result.json();
  const table = response.table.map(async (team, index) => {
    const teamInfo = await fetch(
      `https://thesportsdb.p.rapidapi.com/lookupteam.php?id=${team.teamid}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": EPL_DB_KEY,
          "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
        },
      }
    );
    const teamInfoResult = await teamInfo.json();
    const teamScedule = await fetch(
      `https://thesportsdb.p.rapidapi.com/eventsnext.php?id=${team.teamid}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": EPL_DB_KEY,
          "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
        },
      }
    );
    const teamSceduleResult = await teamScedule.json()
    const teamResults = await fetch(
        `https://thesportsdb.p.rapidapi.com/eventslast.php?id=${team.teamid}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": EPL_DB_KEY,
            "x-rapidapi-host": "thesportsdb.p.rapidapi.com",
          },
        }
      );
    const teamResultsResult = await teamResults.json()
    const finalTeam = {
      ...team,
      info: teamInfoResult.teams[0],
      position: index + 1,
      schedule: teamSceduleResult.events,
      results: teamResultsResult.results
    };
    return finalTeam;
  });
  return Promise.all(table);

};

export const fetchLeague = async () => {
  const result = await fetch("https://thesportsdb.p.rapidapi.com/lookupleague.php?id=4328", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": EPL_DB_KEY,
      "x-rapidapi-host": "thesportsdb.p.rapidapi.com"
    }
  })
  const response = await result.json()
  console.log(response.leagues)
  return Promise.all(response.leagues)
}
