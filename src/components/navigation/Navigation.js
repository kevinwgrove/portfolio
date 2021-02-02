import { Menu } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AboutMeScreen,
    ContactScreen,
    HomeScreen,
    PortfolioScreen,
    BuildsScreen } from "../../screens";
import { MenuBar } from "../menu-bar";
import { Footer } from "../footer"; 


export const Navigation = () => {
    return (
        <BrowserRouter>
            <MenuBar />
            <Switch>
                <Route
                exact
                path="/"
                component={HomeScreen}
                />

                <Route 
                path="/aboutme"
                component={AboutMeScreen}
                />

                <Route
                path="/contact"
                component={ContactScreen}
                />

                <Route
                path="/portfolio"
                component={PortfolioScreen}
                />

                <Route 
                path="/builds"
                component={BuildsScreen}
                />

            </Switch>
            <Footer />
        </BrowserRouter>
    )
}