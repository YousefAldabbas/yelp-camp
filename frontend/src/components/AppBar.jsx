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
const YcButton = styled(Button)({
  marginTop: "0rem",
  backgroundColor: "black",
  width: "100%",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "1rem",
  padding: "0rem 2rem",
  textTransform: "none",
  fontWeight: "bold",
  [`&:hover`]: {
    backgroundColor: "black",
  },
  [`@media (max-width: 900px)`]: {
    width: "500px",
  },
  maxWidth: "300px",
});
const drawerWidth = "100%";
export default function MyAppBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user, isSuccess } = useSelector(
    (state) => state.auth
  );
  // useEffect(() => {
  //   if (!isAuthenticated && isSuccess) {
  //     navigate("/");
  //   }
  // }, [isAuthenticated, isSuccess, navigate]);
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
          width: "100%",
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#fafafa",
          },
        }}
      >
        <ArrowDropDownIcon
          onClick={() => {
            setMobileOpen(false);
          }}
          sx={{
            fontSize: "2rem",
            animation: "vertical-move 1s infinite",
            "@keyframes vertical-move": {
              "0%": {
                transform: "translateY(0px)",
              },
              "50%": {
                transform: "translateY(10px)",
              },
              "100%": {
                transform: "translateY(0px)",
              },
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
          }}
        >
          <ListItemText
            primary="Home"
            sx={{
              textAlign: "center",
            }}
          />
        </ListItem>
        <ListItem button onClick={() => {}}>
          <ListItemText
            primary="Add your own campground"
            sx={{
              textAlign: "center",
            }}
          />
        </ListItem>
        {!isAuthenticated && !user ? (
          <>
          <ListItem
            button
            onClick={() => {
              navigate("/signup");
            }}
          >
            <ListItemText
              primary="Login"
              sx={{
                textAlign: "center",
              }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate("/signin");
            }}
          >
            <ListItemText
              primary="Sign in"
              sx={{
                textAlign: "center",
              }}
            />
          </ListItem>


          </>
        ) : (
          <>
            <ListItem
              button
              onClick={() => {}}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexBasis: "1",
              }}
            >

              <ListItemText
                primary={`${user.username}`}
                sx={{
                  textAlign: "center",
                }}
              />
            </ListItem>
            <ListItem
             onClick={() => {
              dispatch(logout());
            }}
            >
              <ListItemButton
              sx={{
                textAlign: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
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
    <Box sx={{ flexGrow: 1, maxWidth: "100vw" }}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#000000",
          position: "absolute",
          top: 0,
          left: 0,
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
        </Typography>
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
      </Box>
      <AppBar
        position="static"
        sx={{
          mt: {
            xs: close ? "-2rem" : "4rem",
            md: close ? "-2rem" : "0rem",
            lg: close ? "-2rem" : "0rem",
          },
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
            onClick={() => navigate("/")}
          >
            <Box
              component="img"
              sx={{
                pb: "0.3rem",
              }}
              alt="logo"
              src="/assets/logo.svg"
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
            onClick={() => navigate("/")}
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
                    dispatch(logout());
                    navigate("/signin");
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
          >
            <MenuIcon
              onClick={() => {
                handleDrawerToggle();
              }}
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
          anchor="bottom"
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
            },
          }}
        >
          {drawer}
        </Drawer>

      </Box>
    </Box>
  );
}
