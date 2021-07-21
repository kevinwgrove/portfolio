import React, { useEffect, useState } from "react";
import { Navigation } from "../src/components/navigation/index";
import { Loading } from "../src/components/loading/index";
import { Fade } from "@material-ui/core";
import { fetchLeague, fetchLeagueTable } from "./helpers/index";
import "./App.css";
import { usePortfolioStore } from "./PortfolioContext";
function App() {
  const portfolioStore = usePortfolioStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeagueTable().then((result) => (portfolioStore.table = result));
    fetchLeague().then((result) => (portfolioStore.league = result));
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Fade in={!loading} timeout={1500}>
          <Navigation />
        </Fade>
      )}
    </>
  );
}
export default App;
