import React, { useEffect, useState } from "react";
import { Button, Typography, Grow, IconButton } from "@material-ui/core";
import { Close, Email } from "@material-ui/icons";
import "./Home.css";
import { MEASUREMENT_ID } from "../../keys/index";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
ReactGA.initialize(MEASUREMENT_ID);
export const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  const [contact, setContact] = useState(false);
  const sendEmail = () => {
    const link = "mailto:kevinwilsongrove@gmail.com";
    window.location.href = link;
  };
  return (
    <>
      <div
        id="home-container"
        className="text-white"
        onClick={() => {
          if (contact) {
            setContact(false);
          }
        }}
      >
        <div className="info">
          <div id="text-container-home">
            <Typography className="roboto first-line text-home">
              Hi, my name is
            </Typography>

            <Typography
              className="name-home nunito text-home w3-animate-opacity"
              style={{
                fontSize: "110px",
              }}
            >
              Kevin Grove
            </Typography>

            <div id="paragraph-container">
              <Typography className="noto-sans paragraph-home text-home">
                I'm a software engineer based in Indianapolis, IN. I specialize
                in building applications and websites as single/multi page
                application. Some languages and frameworks I've built with, but
                not limited to:
              </Typography>
            </div>
            <Typography className="ubuntu languages">
              JavaScript, React, Redux, MOBX, Google Firebase, MongoDB, Python,
              Django, and more...
            </Typography>
          </div>
          <div id="img-div">
            <img src="images/Sofar.png" alt="Kevin Grove" id="photo" />
          </div>
        </div>
        <div id="contact-button-container">
          {!contact ? (
            <Button
              className="text-white button-home"
              variant="contained"
              onClick={() => setContact(true)}
            >
              Get in touch
            </Button>
          ) : (
            <IconButton
              className="text-white button-home close-button"
              variant="contained"
              onClick={() => setContact(false)}
            >
              <Close
                style={
                  {
                    // padding: "0"
                  }
                }
              />
            </IconButton>
          )}
        </div>
        {contact ? (
          <>
            <Grow in={true} timeout={500}>
              <div id="phantom-buttons-container">
                <Button
                  className="text-white phantom-button"
                  variant="contained"
                  onClick={sendEmail}
                >
                  <Email
                    style={{
                      fontSize: "300%",
                    }}
                  />
                </Button>
              </div>
            </Grow>
          </>
        ) : null}
      </div>
    </>
  );
};
export default withRouter(Home);
