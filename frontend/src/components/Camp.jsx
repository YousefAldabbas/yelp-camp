import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCamp } from "../features/camp/campSlice";
import {useLocation} from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
export default function Camp({
  name,
  price,
  image,
  description,
  username,
  alt = "campground image",
}) {

useEffect(() => {
  window.scrollTo(0, 0)
}, [])


  return (
    <Box
      sx={{
        border: "1px solid #DCDCDC",
        padding: {
          xs: "1.5rem 1.5rem 1.5rem",
          sm: "3rem 3rem 1.5rem",
          md: "3rem 3rem 1.5rem",
          lg: "3rem 3rem 1.5rem",
        },
      }}
    >
      <Card sx={{ maxWidth: "100%", boxShadow: "none" }}>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            borderRadius: "0.3rem",
            height: {
              sm: "100%",
              md: "400",
              lg: "400",
            },
          }}
        />
        <CardContent
          sx={{
            padding: "0rem",
            m: "1rem 0rem 0rem 0rem",
          }}
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
              }}
            >
              ${price}/night
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              m: "1rem 0rem",
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "1.1rem",
              fontStyle: "italic",
            }}
          >
            Submitted by {username}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
