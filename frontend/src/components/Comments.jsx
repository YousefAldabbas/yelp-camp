import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  styled,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import {Link, useNavigate,useLocation} from "react-router-dom";
const YcButton = styled(Button)({
  backgroundColor: "black",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "1.1rem",
  textTransform: "none",
  padding: "0rem 1rem",
  color: "white",
  fontWeight: "bold",
  [`&:hover`]: {
    backgroundColor: "black",
  },
  [`@media (max-width: 900px)`]: {
    width: "500px",
  },
  maxWidth: "220px",
});

function Comments({ comments }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const campgroundId = pathname.split("/")[2];


  const timeToNow = (date) => {
    let diff = 0;
    const now = new Date();
    diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (years > 0) {
      return `${years} years ago`;
    } else if (months > 0) {
      return `${months} months ago`;
    } else if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else if (seconds > 0) {
      return `${seconds} seconds ago`;
    } else {
      return "just now";
    }
  };

  const AllComments = comments.map((comment, index) => (
    <Box sx={{}} key={index}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            margin: "1rem 0rem",
            fontWeight: "bold",
          }}
        >
          {comment.user.username}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
          }}
        >
          {timeToNow(new Date(comment.date))}
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        sx={{
          margin: "1rem 0rem",
        }}
      >
        {comment.comment}
      </Typography>
      <Divider />
    </Box>
  ));

  return (
    <Box
      sx={{
        m: {
          xs: "1rem 1rem 1rem",
          md: "1rem 2rem 1rem",
          lg: "1rem 2rem 1rem",
        },
      }}
    >
      <Stack>
        {AllComments}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              xs: "center",

              md: "flex-end",
            },
            mt: {
              xs: "2rem",
              md: "2rem",
              lg: "2rem",
            },
          }}
        >
          <YcButton
          onClick={() => navigate(`/campgrounds/${campgroundId}/add-comment`)}
          >Leave a Review</YcButton>
        </Box>
      </Stack>
    </Box>
  );
}

export default Comments;
