import React from "react";
import { Grow, Link } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div id="phantom">
        <div id="footer">
          {/* <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                > */}
          <Grow in={true} timeout={3000}>
            <a
              size="large"
              href="https://github.com/kevinwgrove"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHub className="footer-button" />
            </a>
          </Grow>
          {/* </Link> */}
          <Link
            to="/aboutme"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Grow in={true} timeout={3000}>
              <a
                size="large"
                href="https://www.linkedin.com/in/kevin-grove-249247139/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedIn className="footer-button" />
              </a>
            </Grow>
          </Link>
          <Link
            to="/portfolio"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Grow in={true} timeout={3000}>
              <a
                size="large"
                href="https://gitlab.com/kevinwgrove"
                target="_blank"
                rel="noreferrer noopener"
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
      </div>
    </>
  );
};
