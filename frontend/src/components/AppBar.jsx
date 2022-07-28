import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, styled } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";

import YcButton from "../theme/YcButton";

import Logo from "../assets/Logo.svg";

const drawerWidth = "80%";

export default function MyAppBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user, isSuccess } = useSelector(
    (state) => state.auth
  );
  const [close, setClose] = useState(false);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          p:2,
          justifyContent: "end",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#fafafa",
          },
          backgroundColor: "#fafafa",
        }}
      >
        <CloseIcon
          onClick={() => {
            setMobileOpen(false);
          }}
          sx={{
            fontSize: "2rem",
            animation: "vertical-move 5s infinite",
            "@keyframes vertical-move": {
              from: {
                "-ms-transform": "rotate(0deg)",
                "-moz-transform": "rotate(0deg)",
                "-webkit-transform": "rotate(0deg)",
                "-o-transform": "rotate(0deg)",
                "transform": "rotate(0deg)",
              },
              to:{
                "-ms-transform": "rotate(360deg)",
                "-moz-transform": "rotate(360deg)",
                "-webkit-transform":"rotate(360deg)",
                "-o-transform": "rotate(360deg)",
                transform: "rotate(360deg)",
              }
            },
          }}
        />
      </Box>
      <List
        sx={{
          position: "relative",

        }}
      >
        <ListItem
          button
          onClick={() => {
            navigate("/home");
            handleDrawerToggle()
          }}
          sx={{

            fontSize:"2rem"
              }}
        >
          <ListItemText
             disableTypography
             primary={<Typography type="body2" sx={{ fontSize:"1.5rem" }}>Home</Typography>}
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            navigate("/add-new-campground/");
            handleDrawerToggle()
          }}
        >
          <ListItemText
             disableTypography
             primary={<Typography type="body2" sx={{ fontSize:"1.5rem" }}>Add campground</Typography>}
          />
        </ListItem>
        {!isAuthenticated && !user ? (
          <>
            <ListItem
              button
              onClick={() => {
                navigate("/signup");
                handleDrawerToggle()
              }}
            >
            <ListItemText
             disableTypography
             primary={<Typography type="body2" sx={{ fontSize:"1.5rem" }}>sign up</Typography>}
          />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                navigate("/signin");
                handleDrawerToggle()
              }}
            >
              <ListItemText
             disableTypography
             primary={<Typography type="body2" sx={{ fontSize:"1.5rem" }}>sign in</Typography>}
          />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem
              button
              onClick={() => {
                handleDrawerToggle()
              }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexBasis: "1",
                order: 1
              }}
            >
             <ListItemText
             disableTypography
             primary={<Typography type="body2" sx={{ fontSize:"1.5rem",color:"black",fontWeight:"bold" }}>{`welcome ${user.username}`}</Typography>}
          />
            </ListItem>
            <ListItem
              onClick={() => {
                dispatch(logout());
                handleDrawerToggle()
              }}
              sx={{
                mt:{
                  xs:40
                }
              }}
            >
              <ListItemButton
                sx={{
                  textAlign: "center",
                  display: "flex",
                  p:2,
                  borderRadius:"20px",
                  justifyContent: "center",
                backgroundColor:"#000000",
                color:"#fff",
                fontSize:"1.5rem"
                }}
              >
                <LogoutIcon
                  sx={{
                    mr: "0.6rem",

                  }}
                />
                Logout
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100vw",

        position: {
          lg: "static",
          md: "static",
          xs: "fixed",
        },

        zIndex: 999,
        width:"100%",
        left: 0,
        top: 0,
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#000000",
          position: {
            lg: "absolute",
            md: "absolute",
            sm: "none",
          },
          top:  {
            lg: 0,
            md: 0,
            sm: 0,
          },
          right: {
            lg: 0,
            md: 0,
            sm: 0,
          },
          left: {
            lg: 0,
            md: 0,
            sm: 0,
          },
          width: "100%",
          display: close ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: {
              xs: "0.8rem",
              sm: "0.8rem",
              md: "0.8rem",
              lg: "0.8rem",
            },
            p: "0.3rem",
          }}
        >
          this project was made by{" "}
          <Box
            component="span"
            sx={{ color: "#8ADFEC", textDecoration: "underline" }}
          >
            Yousef Aldabbas{" "}
          </Box>{" "}
          and designed by{" "}
          <Box
            component="span"
            sx={{ color: "#8ADFEC", textDecoration: "underline" }}
          >
            Codewell{" "}
          </Box>
          <CloseIcon
            sx={{
              color: "white",
              fontSize: {
                xs: "0.8rem",
                sm: "0.8rem",
                md: "1rem",
                lg: "1rem",
              },
              cursor: "pointer",
            }}
            onClick={() => {
              setClose(true);
            }}
          />
        </Typography>
      </Box>
      <AppBar
        sx={{
          mt: {
            xs: close ? "0rem" : "3rem",
            sm: close ? "0rem" : "1.8rem",
            md: close ? "0rem" : "2rem",
            lg: close ? "-2rem" : "0rem",
          },
          position: {
            lg: "static",
            md: " static",
            xs: "fixed",
          },
          zIndex: 99,
          backgroundColor: "white",
          boxShadow: "none",
          mb: "1.5rem",
          maxWidth: "100%",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 1,
            }}
            onClick={() => {navigate("/home")}
          }
          >
            <Box
              component="img"
              sx={{
                pb: "0.3rem",
              }}
              alt="logo"
              src={Logo}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
              },
              color: "#4F4F4F",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => navigate("/home")}
          >
            Home
          </Typography>

          <Stack
            flexDirection="row"
            alignItems="center"
            gap={2}
            sx={{
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
              },
            }}
          >
            {!isAuthenticated && !user ? (
              <>
                <Typography
                  variant="h6"
                  color="#4F4F4F"
                  fontSize="1rem"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Login
                </Typography>
                <YcButton
                  color="inherit"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Create an account
                </YcButton>
              </>
            ) : (
              <>
                {" "}
                <Typography
                  variant="h6"
                  color="#4F4F4F"
                  fontSize="1rem"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {

                    navigate("/signin");
                    dispatch(logout());
                  }}
                >
                  {user.username}
                </Typography>
                <Typography
                  variant="h6"
                  color="#8E8E8E"
                  fontSize="1rem"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(logout());
                    navigate("/signin");
                  }}
                >
                  logout
                </Typography>
              </>
            )}
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              p: 2,
              display: {
                sx: "block",
                sm: "block",
                md: "none",
                lg: "none",
              },
              color: "#8E8E8E",

              position: "absolute",
              right: "0rem",
              top: "0rem",
            }}
            onClick={() => {
              handleDrawerToggle();
            }}
          >
            <MenuIcon

              sx={{
                backgroundColor: "#E5E5E5",
                borderRadius: "5%",
                color: "black",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { sm: "block", md: "none", lg: "none" },

        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          anchor="left"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius:"10px"
            },

          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
