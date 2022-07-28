import React from "react";
import { Grid, Box, Typography, Stack, Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function SignIn() {

  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        flexWrap: "wrap",
        alignItems: "space-between",
        height: "100%",
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          backgroundColor: "#FFFFFF",
          p: {
            xs: "1rem",
            sm: "3rem 6rem",
            md: "2.5rem 4rem",
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
        >
          <Box
            component="img"
            alt="logo"
            src="/assets/logo.svg"
            sx={{
              width: {
                sx: "100%",
                sm: "200px",
                md: "130px",
                lg: "130px",
              },
            }}
          />

          <Stack
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
            onClick={() => navigate("/")}
          >
              <KeyboardBackspaceIcon
                 sx={{
                  color: "#8E8E8E",
                  textDecoration: 'underline'
                }}
              />

            <Typography
              variant="h6"
              sx={{
                color: "#8E8E8E",
                fontSize:{
                  xs: "1rem",
                }
              }}
            >
              Back to campgrounds
            </Typography>
          </Stack>
        </Stack>
        <LoginForm />
      </Grid>
      {/* right side */}
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        sx={{
          backgroundColor: "#F9F6F1",
          position: "relative",
          display: {
            sm: "block",
          },
          height:{
            ms:"100%",
            lg:"100vh",
          },
        }}
      >
        <Box
          sx={{
            position: {
              sm: "block",
              md: "absolute",
              lg: "absolute",
            },
            top: {
              md: "20%",
              lg: "20%",
            },
            left: {
              lg: "25%",
            },
            right: {
              lg: "12%",
            },
            padding: {
              xs: "1rem",
              sm: "2rem",
            },
            backgroundColor: "#F6F6F6",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            fontSize="1.4rem"
            sx={{
              fontWeight: "bold",
              fontSize: {
                lg: "1.4rem",
                md: "1.4rem",
                sm: "1.45rem",
              },
            }}
          >
            "yelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added"
          </Typography>
          <Stack
            spacing={2}
            flexDirection="row"
            sx={{
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              alt="icon"
              src="/assets/UserTestimonial.svg"
              sx={{
                marginTop: 2,
                width: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "2.8rem",
                  lg: "2.5rem",
                },
                height: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "2.8rem",
                  lg: "2.5rem",
                },
              }}
            />

            <Stack
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "0.4rem",
                  lg: "0.4rem",
                },
              }}
              alignContent="center"
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "0.9rem",
                    lg:"0.8rem"},
                  fontWeight: "bold",
                }}
              >
                May Andrews
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "0.9rem",
                    lg:"0.8rem"},
                  fontWeight: "bold",
                  color: "#8E8E8E",
                }}
              >
                Professional Hiker
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
