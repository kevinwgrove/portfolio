import React from "react";
import "./AboutMe.css";
import {
  Fade,
  Zoom,
  makeStyles,
  useScrollTrigger,
  Fab,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
// import { ArrowBackIos, ArrowForwardIos, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Background, Adventures, Hobbies } from "./about-me-components/index";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "100px",
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
export const AboutMe = (props) => {
  return (
    <>
      <Fade in={true} timeout={1500}>
        <div id="about-me-container">
          <div className="text-white card">
            <Background />
          </div>
          <div className="text-white card">
            <Adventures />
          </div>
          <div className="text-white card">
            <Hobbies />
          </div>
        </div>
      </Fade>
      <ScrollTop {...props}>
        <Fab color="default" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
};
