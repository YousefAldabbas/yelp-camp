import React from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";

import YcLogo from "../components/YcLogo";
import Checkmark from "../assets/Checkmark.svg"
import Airbnb from "../assets/Airbnb.svg"
import Booking from "../assets/Booking.svg"
import PlumGuide from "../assets/PlumGuide.svg"



import YcButton from "../layouts/YcButton";
const Main = () => {

  const navigate = useNavigate();
  const features = [
    "Add your own camp suggestions.",
    "Leave reviews and experiences.",
    "See locations for all camps.",
  ];

  const images = [
    Airbnb,
    Booking,
    PlumGuide,
  ];
  const Ul = (features) => {
    return (
      <Box>
        {features.map((feature, index) => {
          return (
            <Stack
              key={index}
              flexDirection="row"
              sx={{
                alignItems: "center",
                mb: {
                    xs: "0.5rem",
                  sm: "0.5rem",
                  md: "0.5rem",
                  lg: "0.5rem",
                },
              }}
            >
              <Box
                component="img"
                alt="checkmark"
                src={Checkmark}
                sx={{
                  width: {
                    lg: "20px",
                  },
                  height: {
                    lg: "20px",
                  },
                  mr: {
                    xs: "0.5rem",
                    sm: "0.5rem",
                    md: "0.5rem",
                    lg: "0.5rem",
                  },
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    sx: "1rem",
                    lg: "1.1rem",
                  },
                  color: "#8E8E8E",
                  mr: {
                    sx: "1rem",
                    lg: "1rem",
                  },
                  fontWeight: "bold",
                }}
              >
                {feature}
              </Typography>
            </Stack>
          );
        })}
      </Box>
    );
  };
  const AllImages = (images) => {
    return images.map((image, index) => {
      return (
        <Box
        key={index}
          component="img"
          alt="icon"
          sx={{
            width: {
                xs: `calc(100% / 3)`,
                md: "140px",
                lg:"140px"},
          }}
          src={image}
        />
      );
    });
  };

  return (
    <Stack
      sx={{
        marginTop: {
          md: "3.5rem",
          lg: "3.5rem",
        },
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          lineHeight: {
            md: "3.6rem",
          },
          fontSize: {
            xs: "2rem",
          },
        }}
      >
        Explore the best camps on Earth.
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        color="#8E8E8E"
        sx={{
          m: {
            xs: "0.7rem 0rem",
            sm: "0.7rem 0rem",
            md: "1rem 0rem",
            lg: "1rem 0rem",
          },
          fontSize: {
            xs: "1rem",
            md: "1.1rem",
          },
            lineHeight: {
                xs: "1.2rem",
            }
        }}
      >
        YelpCamp is a curated list of the best camping spots on Earth.
        Unfiltered and unbiased reviews.
      </Typography>
      {Ul(features)}
      <YcButton
        sx={{
          color: "#FFFFFF",
          maxWidth: "250px",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        onClick={() => navigate("/home")}
      >
        View CampGrounds
      </YcButton>

      <Stack
        sx={{
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "flex-start",
          mt: {
            md: "1rem",
            lg: "1rem",
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          fontSize="1rem"
          color="#8E8E8E"
          sx={{
            m: {
              sm: "1rem 0rem",
            },
          }}
        >
          partnered with:
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {AllImages(images)}
        </Stack>
      </Stack>
    </Stack>
  );
};

function LandingPage() {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        },
        height: "100%",
        overflow: {
          md: "hidden",
          lg: "hidden",
        },
        position: "relative",
      }}
      gap="0"
      spacing={0}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        sx={{
          position: "relative",
          backgroundColor: "white",
          p: {
            xs: "1rem",
            sm: "3rem 2.2rem",
            md: "2.5rem 2rem",
            lg: "3rem 6rem",
          },
          height: {
            sm: "100%",
            md: "100vh",
          },
        }}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            position: {
              xs: "fixed",
              sm: "fixed",
              md: "relative",
            },
            top: {
              xs: "0%",
              sm: "0%",
            },
            left: {
              xs: "0%",
              sm: "0%",
            },
            width: {
              xs: "100%",
            },
            zIndex: 1,
            backgroundColor: {
              xs: "white",
              sm: "white",
            },
            p: {
              xs: "1.5rem 1rem",
              md: 0,
            },
          }}
        >
          <YcLogo />
        </Stack>
        <Main />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        sx={{
          position: "relative",
          display: {
            sm: "block",
          },
          mt: {
            sm: "6rem",
            md: "0rem",
          },
          width: "100%",
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: "white",
            width: {
              xs: "100%",
              sm: "100wv",
              md: "440px",
              lg: "100%",
            },
            height: {
              xs: "350px",
              sm: "350px",
              md: "100vh",
            },
            backgroundImage: {
              xs: "url(/assets/Hero-image-s.jpg)",
              sm: "url(/assets/Hero-image-s.jpg)",
              md: "url(/assets/Hero-image.jpg)",
            },
            backgroundSize: {
              xs: "cover",
              sm: "cover",
            },
            backgroundPosition: {
              xs: "center",
            },
            m: 0,
            p: 0,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
