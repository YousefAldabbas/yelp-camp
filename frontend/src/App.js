import React,{ useEffect } from "react";
import routes from "./routes";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import MyAppBar from "./components/AppBar";
import { Box,CssBaseline } from "@mui/material";
import Footer from "./components/Footer";
import { getCamps } from "./features/camp/campSlice";

import { ToastContainer,Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from "./theme/theme"
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { pathname } = location;
  const isHome =
    pathname === "/home" ||
    pathname.startsWith("/campground") ||
    pathname === "/add-new-campground/" ||
    pathname === "/add-comment/";
  const getRoutes = (routes) => {
    return routes.map((route) => {
      return (
        <Route
          exact
          path={route.path}
          element={route.component} //route.needAuth? isAuthenticated && user? route.component: navigate("/signin") : route.component
          key={route.key}
        />
      );
    });
  };


  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])


  return (
    <ThemeProvider theme={theme}>
      {isHome && (
        <Box
          sx={{
            m: {
              xs: "4rem 0rem",
              sm: "2rem 1rem",
              md: "4rem 4rem",
              lg: "4rem 4rem",
            },
          }}
        >
          <CssBaseline />
          <MyAppBar />

          <Box

            sx={{
              p: "0.5rem 1.5rem",
            }}
          >
            <Routes>{getRoutes(routes)}</Routes>
            <Footer />
          </Box>
        </Box>
      )}
      {!isHome && <Routes>{getRoutes(routes)}</Routes>}
      <ToastContainer
      position="top-center"
      autoClose={2000}
      transition={Flip}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
