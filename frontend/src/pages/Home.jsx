import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCamps } from "../features/camp/campSlice";
import Cards from "../components/Cards";
import {
  InputAdornment,
  IconButton,
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const YcButton = styled(Button)({
  marginTop: "0rem",
  backgroundColor: "black",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "0.95rem",
  textTransform: "none",
  padding: "0rem 2rem",
  color: "white",
  fontWeight: "bold",
  [`&:hover`]: {
    backgroundColor: "black",
  },
  [`@media (max-width: 900px)`]: {
    width: "500px",
  },
  maxWidth: "100%",
});
const YcTextField = styled(TextField)({
  backgroundColor: "#F7F7F7",
  border: "none",
  borderRadius: "4px",
  padding: "1rem",
  outline: "none",
  width: "100%",
  ["p#description-helper-text "]: {
    top: "100%",
    bottom: "0",
    right: "0",
    left: "68%",
    [`@media (max-width: 600px)`]: {
      top: "100%",
      bottom: "0",
      right: "0",
      left: "60%",
    },
  },
  input: {
    fontSize: "0.95rem",
  },
});
function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { campgrounds } = useSelector(
    (state) => state.camp
  );
  let filteredCampgrounds = campgrounds
  useEffect(() => {
    dispatch(getCamps());
  }, []);

  return (
    <Box
      component="div"
      sx={{
        p: "0.5rem 1.5rem",
      }}
    >
      <Box
        component="main"
        sx={{
          backgroundColor: "#E5E5E5",
          p: {
            xs: "2rem 1.5rem",
            sm: "4rem 3.5rem",
            md: "4rem 3.5rem",
            lg: "4rem 3.5rem",
          },
        }}
      >
        <Stack
          flexDirection="column"
          sx={{
            maxWidth: {
              lg: "370px",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Welcome to YelpCamp!
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: "#605D58",
              m: "0.5rem 0rem",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            View out hand-picked campgrounds from all over the world. or add
            your own.
          </Typography>
          <Stack
            flexDirection="row"
            sx={{
              alignItems: "center",
              flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
              gap: 2,
              maxWidth: {
                lg: "350px",
              },
            }}
          >
            <YcTextField
              id="outlined-basic"
              placeholder="Search for camps"
              autoComplete="off"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      display: search ? "none" : "flex",
                    }}
                  >
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                onChange: (e) => {
                  setSearch(e.target.value);
                },
                disableUnderline: true,
              }}
            />
            <YcButton
            >Search</YcButton>
          </Stack>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              textDecoration: "underline 1.5px",
              cursor: "pointer",
              color: "#605D58",
              fontSize: "1rem",
              // style the underline
              m: "0.5rem 0rem",
              fontWeight: "400",
            }}
          >
            <Link
              to="/add-new-campground/"
              style={{
                cursor: "pointer",
                color: "#605D58",
              }}
            >
              Or add your own campground
            </Link>
          </Typography>
        </Stack>
      </Box>
      <Box
        component="section"
        sx={{
          mt: "6rem",
          width: "100%",
        }}
      >
        <Cards campgrounds={filteredCampgrounds}
        search={search}
        />
      </Box>
    </Box>
  );
}

export default Search;
