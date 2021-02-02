import React, { useEffect, useState, useRef } from "react";
import { Grow,
    Button,
    Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom"
import "./MenuBar.css";

export const MenuBar = () => {

    return (
        <>
            <div id='menu-bar'>
                <Toolbar
                    id="back-to-top-anchor"
                >
                    <div
                        className="home-logo"
                    >
                        <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}
                        >
                            <Grow
                            in={true}
                            timeout={1000}
                            >
                                <img 
                                src="images/KG - White.png" 
                                alt="Kevin Grove home logo"
                                />
                            </Grow>
                        </Link>
                    </div>

                    <div
                        className="buttons-container"
                    >
                <Link
                to="/aboutme"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <Grow
                    in={true}
                    timeout={2000}
                    >
                        <Button
                        className="menu-button"
                        size="large"
                        >
                            About Me
                        </Button>
                    </Grow>
                </Link>

                <Link
                to="/portfolio"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <Grow
                    in={true}
                    timeout={3000}
                    >
                        <Button
                        className="menu-button"
                        size="large"
                        >
                            Portfolio
                        </Button>
                    </Grow>
                </Link>

                <Link
                to="/builds"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <Grow
                    in={true}
                    timeout={4000}
                    >
                        <Button
                        className="menu-button"
                        size="large"
                        >
                            Builds
                        </Button>
                    </Grow>
                </Link>
                
                <Link
                to="/contact"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <Grow
                    in={true}
                    timeout={5000}
                    >
                        <Button
                        className="menu-button"
                        size="large"
                        // style={{
                        //     padding: 20 + 'px'
                        // }}
                        >
                            Contact
                        </Button>
                    </Grow>
                </Link>
                </div>
                </Toolbar>
            </div>
        </>
    )
}