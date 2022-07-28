import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCamp } from "../features/camp/campSlice";
import { useParams   } from "react-router-dom";
import Comments from "../components/Comments";
import {
  Box,
  Stack,
  Grid,
} from "@mui/material";
import Camp from "../components/Camp";

function Campground() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camp = useSelector((state) => state.camp.campground);
  useEffect(() => {
    dispatch(getCamp(id));
  }, []);
  return (
    <Box
    >
      <Grid
        container
        gap={1}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4.5}
          xl={12}
          sx={{
            border: "1px solid #DCDCDC",
            display: "flex",
            justifyContent: "center",
            padding: {
              xs: "1.5rem 1.5rem 1.5rem",
              md: "6rem 6rem",
              lg: "3rem",
            },
            mt:{
              xs: "1.5rem",
              md: "1.5rem",
              lg: "0rem",
          },
            height: "100%",
            maxWidth: {
            },
            order: "2",
          }}
        >
          <Box
            component="img"
            alt="campground location"
            sx={{
              content:{
                xs: "url('/assets/map-l.png')",
                ms: "url('/assets/map-l.png')",
                md: "url('/assets/map-l.png')",
                lg: "url('/assets/map.png')",
              },
              maxWidth: "600px",
            }}
            width="100%"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={12}>
          <Stack>
            <Camp
              name={camp.name}
              price={camp.price? camp.price : "104.99"}
              image={camp.image}
              description={camp.description}
              username={camp.writer?.username||"Anonymous"}
            />
            <Box
              sx={{
                mt:{
                  xs: "2rem",
                  md: "2rem",
                  lg:"1.5rem"},
                border: "1px solid #DCDCDC",
                p: "1rem 1rem",
              }}
            >
              <Comments
                comments={camp.comments||[]}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Campground;
