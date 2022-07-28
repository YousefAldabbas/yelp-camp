import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postComment, reset } from "../features/comment/commentSlice";

import {
  CssBaseline,
  InputAdornment,
  IconButton,
  Container,
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  styled,
  Grid,
} from "@mui/material";

const YcButton = styled(Button)({
  backgroundColor: "black",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "1.1rem",
  textTransform: "none",
  padding: "0rem 1rem",
  marginTop: "1rem",
  color: "white",
  fontWeight: "bold",
  [`&:hover`]: {
    backgroundColor: "black",
  },
  width: "100%",
});
const YcTextField = styled(TextField)({
  backgroundColor: "#F7F7F7",
  border: "none",
  borderRadius: "4px",
  padding: "1rem",
  outline: "none",
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
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
});
const YcLable = styled(Typography)({
  color: "#626262",
  fontSize: "1rem",
  paddingBottom: "0.5rem",
});

const YcGrid = styled(Grid)({
  margin: "0.3rem 0",
});
const validationSchema = Yup.object().shape({
  comment: Yup.string().required("Required").min(4, "Too Short! &#128521;"),
});
const initialValues = {
  comment: "",
};

function AddComment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { isSuccess } = useSelector((state) => state.comment);

  useEffect(() => {
    if (!isAuthenticated && !user) {
      navigate("/signin");
    }
    if (isSuccess) {
      const campId = pathname.split("/")[2];
      navigate(`/campgrounds/${campId}`);

    }
    return () => {
      dispatch(reset());
    };
  }, [isSuccess, isAuthenticated, user, pathname, dispatch, navigate]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const newValues = {
        comment: values.comment.replace(/\s{2,}/g, " "),
      };
      dispatch(postComment(newValues));
    },
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <form onSubmit={formik.handleSubmit} style={{}}>
          <Grid
            container
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: "460px",
                lg: "460px",
              },
            }}
          >
            <YcGrid
              item
              xs={12}
              sx={{
                mb: "1rem",
                mt: 0,
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xl: "1rem",
                    xs: "1.8rem",
                  },
                }}
              >
                Add New Comment
              </Typography>
            </YcGrid>
            <YcGrid item xs={12}>
              <YcLable variant="h5" component="h2">
                Description
              </YcLable>
              <YcTextField
                id="comment"
                name="comment"
                type="text"
                autoComplete="off"
                variant="standard"
                multiline
                rows={7}
                placeholder="This was probably the best campground I've visited this past year, definitely recommend visiting any time soon."
                fullWidth
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.comment && formik.errors.v}
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  textarea: {
                    fontSize: "0.95rem",
                  },
                }}
              />
            </YcGrid>
            <YcGrid item xs={12}>
              <YcButton type="submit">Add Campground</YcButton>
            </YcGrid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default AddComment;
