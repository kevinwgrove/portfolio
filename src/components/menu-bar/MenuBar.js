import React, { useEffect, useState } from "react";
import {
  Grow,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { FileCopy } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./MenuBar.css";
export const MenuBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  });
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    window.removeEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });
  return (
    <>
      <Toolbar>
        <div id="menu-bar">
          <div className="home-logo">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Grow in={true} timeout={1000}>
                <img
                  src="images/KG - White.png"
                  alt="Kevin Grove home logo"
                  className="home-logo"
                />
              </Grow>
            </Link>
          </div>
          <div className="buttons-container">
            {windowWidth <= 809 ? (
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon fontSize="large" id="menu-icon" />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <a
                    href="https://drive.google.com/file/d/1r6azhZAM_TWEk94rn_Hvxhv4sa0DPOMT/view?ts=60ae6c11"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                    rel="noreferrer noopener"
                  >
                    <MenuItem onClick={handleClose} className="menu-item">
                      <Typography className="menu-link-text nunito">
                        Resume
                      </Typography>
                      <FileCopy fontSize="large" id="resume-icon" />
                    </MenuItem>
                  </a>
                  <Link
                    className="menu-link"
                    to="/aboutme"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <MenuItem onClick={handleClose} className="menu-item">
                      <Typography className="menu-link-text nunito">
                        About Me
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    className="menu-link"
                    to="/portfolio"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <MenuItem onClick={handleClose} className="menu-item">
                      <Typography className="menu-link-text nunito">
                        Portfolio
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    className="menu-link"
                    to="/builds"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <MenuItem onClick={handleClose} className="menu-item">
                      <Typography className="menu-link-text nunito">
                        Builds
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    className="menu-link"
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <MenuItem onClick={handleClose} className="menu-item">
                      <Typography className="menu-link-text nunito">
                        Contact
                      </Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </>
            ) : loading ? (
              <>
                <Grow in={true} timeout={2000}>
                  <Button className="menu-button" size="large">
                    <a
                      href="https://drive.google.com/file/d/1r6azhZAM_TWEk94rn_Hvxhv4sa0DPOMT/view?ts=60ae6c11"
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                      rel="noreferrer noopener"
                    >
                      <Typography id="resume-text" className="nunito">
                        Resume
                      </Typography>
                      <FileCopy fontSize="large" id="resume-icon" />
                    </a>
                  </Button>
                </Grow>
                <Link
                  to="/aboutme"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Grow in={true} timeout={3000}>
                    <Button className="menu-button" size="large">
                      About Me
                    </Button>
                  </Grow>
                </Link>
                <Link
                  to="/portfolio"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Grow in={true} timeout={4000}>
                    <Button className="menu-button" size="large">
                      Portfolio
                    </Button>
                  </Grow>
                </Link>
                <Link
                  to="/builds"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Grow in={true} timeout={5000}>
                    <Button className="menu-button" size="large">
                      Builds
                    </Button>
                  </Grow>
                </Link>

                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Grow in={true} timeout={6000}>
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
              </>
            ) : (
              <>
                <Button className="menu-button" size="large">
                  <a
                    href="https://drive.google.com/file/d/1r6azhZAM_TWEk94rn_Hvxhv4sa0DPOMT/view?ts=60ae6c11"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                    rel="noreferrer noopener"
                  >
                    <Typography id="resume-text">Resume</Typography>
                    <FileCopy fontSize="large" id="resume-icon" />
                  </a>
                </Button>
                <Link
                  to="/aboutme"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Button className="menu-button" size="large">
                    About Me
                  </Button>
                </Link>
                <Link
                  to="/portfolio"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Button className="menu-button" size="large">
                    Portfolio
                  </Button>
                </Link>
                <Link
                  to="/builds"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Button className="menu-button" size="large">
                    Builds
                  </Button>
                </Link>

                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
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
                </Link>
              </>
            )}
          </div>
        </div>
      </Toolbar>
    </>
  );
};
