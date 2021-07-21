import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  AboutMeScreen,
  ContactScreen,
  HomeScreen,
  PortfolioScreen,
  BuildsScreen,
  EPLTableScreen,
} from "../../screens";
import { MenuBar } from "../menu-bar";
import { Footer } from "../footer";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div
        id="back-to-top-anchor"
        style={{
          height: 0,
          top: 0,
        }}
      ></div>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/aboutme" component={AboutMeScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/portfolio" component={PortfolioScreen} />
        <Route path="/builds" component={BuildsScreen} />
        <Route path="/epltable" component={EPLTableScreen} />
      </Switch>
      <MenuBar />
      <Footer />
    </BrowserRouter>
  );
};
