import React from "react";
import { Grow, 
    Button,
    Link } from "@material-ui/core";
import { GitHub,
    LinkedIn,
    } from "@material-ui/icons"
import "./Footer.css";

export const Footer = () => {
    return (
        <>
            <div id='footer'>
                {/* <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                > */}
                    <Grow
                    in={true}
                    timeout={3000}
                    >
                        <a
                        size="large"
                        href="https://github.com/kevinwgrove"
                        target="_blank"
                        >
                            <GitHub
                            className="footer-button"
                            />
                        </a>
                    </Grow>
                {/* </Link> */}

                <Link
                to="/aboutme"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <Grow
                    in={true}
                    timeout={3000}
                    >
                        <a
                        size="large"
                        href="https://www.linkedin.com/in/kevin-grove-249247139/"
                        target="_blank"
                        >
                            <LinkedIn
                            className="footer-button"
                            />
                        </a>
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
                        <a
                        size="large"
                        href="https://gitlab.com/kevinwgrove"
                        target="_blank"
                        >
                            <img 
                                src="images/Gitlab-Icon.png" 
                                alt="gitlab icon"
                                width="28px"
                                className="footer-button"
                            />
                        </a>
                    </Grow>
                </Link>
            </div>
        </>
    )
}