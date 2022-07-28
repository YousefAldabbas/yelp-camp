import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, Grid } from "@mui/material";
import { getCamps } from "../features/camp/campSlice";
import { useNavigate } from "react-router-dom";
const YcButton = styled(Button)({
  marginTop: "0rem",
  backgroundColor: "white",
  border: "1px solid #DCDCDC",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "1rem",
  textTransform: "none",
  color: "black",
  fontWeight: "bold",
  margin: 0,
  [`&:hover`]: {
    backgroundColor: "white",
  },
  width: "100%",
  [`&:onClick`]: {
    backgroundColor: "black",
    color: "white",
  },
  transition: "all 0.5s ease-in-out",
});

export default function Cards({campgrounds, search}) {
  const dispatch = useDispatch();
  // const [campgrounds, setCampgrounds] = useState([]);


  const navigate = useNavigate();

  let filteredCampgrounds = campgrounds.filter((campground) => {
    return campground.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <Grid
      container
      gap={6}
      sx={{
        justifyContent: {
          sm: "center",

          md: "space-between",

          lg: "space-between",
        },
        width: "100%",
      }}
    >
      { filteredCampgrounds.map((camp, index) => (
        <Grid item xs={12} sm={7} md={5.3} lg={3.5} key={index}>
          <Card
            sx={{
              m: 0,
              padding: "1rem",
              boxShadow: "none",
              border: "1px solid #DCDCDC",
            }}
          >
            <CardMedia
              component="img"
              height="190"
              image={camp.image}
              alt={camp.name}
              sx={{
                borderRadius: "0.3rem",
              }}
            />
            <CardContent
              sx={{
                padding: "1rem 0rem",
                maxHeight: {
                  lg: "150px",
                },
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {camp.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {camp.description.slice(0, 60) + "..."}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                padding: 0,
              }}
              onClick={() => {
                navigate("/campgrounds/" + camp._id);
              }}
            >
              <YcButton>View Campground </YcButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
