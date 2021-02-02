import React, { useEffect, useState } from "react";
import { Card, 
    Fade, 
    IconButton, 
    Typography,
    Popper,
    Paper } from "@material-ui/core";
import { ArrowForwardIos, KeyboardArrowDown } from "@material-ui/icons"
import './Home.css';
import { BounceLoader } from "react-spinners";
import ReactReadMoreReadLess from "react-read-more-read-less";


export const Home = () => {
    // const portfolioStore = usePortfolioStore()

    return (
        <>
            <div
                id="home-container"
            >
                <Typography
                    variant="h1"
                >
                    Home
                </Typography>
            </div>
        </>
    )
}
