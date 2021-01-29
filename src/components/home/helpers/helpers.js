import { EPL_DB_KEY } from "../../../keys/eplID"

export const fetchLeagueTable = () => {
    fetch("https://thesportsdb.p.rapidapi.com/lookuptable.php?s=2020-2021&l=4328", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": EPL_DB_KEY,
                "x-rapidapi-host": "thesportsdb.p.rapidapi.com"
            }
        }).then(response => {
            return response.json();
        }).then((res) => {
            return res
        }).catch(err => {
            console.error(err);
        });
}